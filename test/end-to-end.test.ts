import { beforeAll, describe, expect, it } from '@jest/globals';
import { spawnSync } from 'child_process';

describe('commitlint configuration', () => {
  beforeAll(() => {
    const timeoutMs = 30000;
    const command = 'npm run build:clean-first';
    const [bin, ...args] = command.split(' ');
    const result = spawnSync(bin, args, { timeout: timeoutMs });

    if (result.signal === 'SIGTERM') {
      throw new Error(
        [
          `Command '${command}' timed out after ${timeoutMs.toLocaleString()}`,
          'ms.',
        ].join(' '),
      );
    }
    if (result.status === null || result.status !== 0) {
      throw new Error(`Command '${command}' failed with code ${result.status}`);
    }
  });

  /**
   * Due to a bug in the `.each` type, it is not possible to use it with
   * `@jest/globals`. See https://github.com/facebook/jest/issues/10447 for the
   * specific issue. As a workaround the TypeScript error is ignored.
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error: TS2349: This expression is not callable.
  describe.each(['9.x', '10.x', '11.x'])(
    'commitlint v%s',
    (version: string) => {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      let load: any;
      let lint: any;
      /* eslint-enable @typescript-eslint/no-explicit-any */

      beforeAll(async () => {
        load = await (await import(`@commitlint/load-${version}`)).default;
        expect(load).not.toBeUndefined();

        lint = await (await import(`@commitlint/lint-${version}`)).default;
        expect(lint).not.toBeUndefined();
      });

      it('@commitlint/load can load the configuration', async () => {
        /**
         * `extends` is resolved relative to the configuration file. See the
         * [`@commitlint/load` documentation page](
         * https://commitlint.js.org/#/reference-api?id=commitlintload) .
         */
        const config = await load(
          { extends: ['../dist/src/index'] },
          { file: './test/commitlint-config.js' },
        );

        expect(Object.keys(config.plugins)).toEqual(['function-rules']);
        expect(Object.keys(config.rules)).toContain(
          'function-rules/header-max-length',
        );
      });

      /**
       * This test isn't fully decoupled as it uses `load` as well as `lint`.
       * `load` is needed because the loaded config is necessary in order test
       * whether `lint` can use the configuration.
       * If both this and the `load` tests fail, fix the `load` test first
       * before looking into this test.
       */
      it('@commitlint/lint uses the configuration', async () => {
        const config = await load(
          { extends: ['../dist/src/index'] },
          { file: './test/commitlint-config.js' },
        );

        const message = [
          'we are told to remember the idea, not the man, because a man can',
          'fail. He can be caught, he can be killed and forgotten, but 400',
          'years later, an idea can still change the world',
        ].join(' ');
        const report = await lint(`chore(deps): ${message}`, config.rules, {
          plugins: config.plugins,
        });

        expect(report.valid).toEqual(true);
      });
    },
  );
});
