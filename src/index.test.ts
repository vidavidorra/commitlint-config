import test from 'ava';
import load19x from '@commitlint/load-19.x';
import lint19x from '@commitlint/lint-19.x';
import load20x from '@commitlint/load-20.x';
import lint20x from '@commitlint/lint-20.x';
import {type LoadOptions} from '@commitlint/types';
import {headerMaxLength} from './rules/index.js';
import config from './index.js';

/* eslint-disable @typescript-eslint/naming-convention */
const versions = {
  '19.x': {load: load19x, lint: lint19x},
  '20.x': {load: load20x, lint: lint20x},
} as const;
/* eslint-enable @typescript-eslint/naming-convention */

test('extends the "@commitlint/config-conventional" config', (t) => {
  t.deepEqual(config.extends, ['@commitlint/config-conventional']);
});

test('uses the "function-rules" plugin', (t) => {
  t.deepEqual(config.plugins, ['function-rules']);
});

test('creates the "function-rules/header-max-length" rule', (t) => {
  const rule = config.rules?.['function-rules/header-max-length'];
  t.deepEqual(rule, [2, 'always', headerMaxLength]);
});

/**
 * The type of the `RulesConfig` have changed in [commitlint v20.3.1](
 * https://github.com/conventional-changelog/commitlint/releases/tag/v20.3.1),
 * and are no longer compatible with those from v19. Specifically the types of
 * the `scope-case` and `scope-enum` rules have been changed to also accept a
 * rule object. The `config` should therefore not use these rules, specifically
 * not the object version, to ensure backwards compatibility with v19. This
 * tests validates that is the case and warrants the use of `as unknown as any`
 * in some of the tests below.
 */
test('does not use the "scope-case" and "scope-enum" rules', (t) => {
  t.is(config.rules?.['scope-case'], undefined);
  t.is(config.rules?.['function-rules/scope-case'], undefined);
  t.is(config.rules?.['scope-enum'], undefined);
  t.is(config.rules?.['function-rules/scope-enum'], undefined);
});

const disables = test.macro<[string]>({
  exec(t, ruleName) {
    t.deepEqual(config.rules?.[ruleName], [0]);
  },
  title: (_, ruleName) => `disables the "${ruleName} rule`,
});
test(disables, 'body-max-line-length');
test(disables, 'footer-max-line-length');
test(disables, 'header-max-length');

/**
 * Specify the package file, which doesn't contain a configuration, to
 * prevent `@commitlint/load` from searching the filesystem for an actual
 * configuration.
 */
const loadOptions: LoadOptions = {file: 'package.json'} as const;
const loadConfig = test.macro<[keyof typeof versions]>({
  async exec(t, version) {
    await t.notThrowsAsync(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      versions[version].load(config as unknown as any, loadOptions),
    );
  },
  title: (_, version) =>
    `@commitlint/load@${version} can load the configuration`,
});

test(loadConfig, '19.x');
test(loadConfig, '20.x');

const lintUsingConfiguration = test.macro<[keyof typeof versions]>({
  async exec(t, version) {
    const qualifiedConfig = await versions[version].load(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      config as unknown as any,
      loadOptions,
    );
    const input = [
      'chore(deps): we are told to remember the idea, not the man. Because a',
      'man can fail. He can be caught, he can be killed and forgotten. But 400',
      'years later, an idea can still change the world - A. Moore',
    ].join(' ');
    const outcome = await versions[version].lint(
      input,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      qualifiedConfig.rules as unknown as any,
      {plugins: qualifiedConfig.plugins},
    );

    t.deepEqual(outcome, {input, valid: true, errors: [], warnings: []});
  },
  title: (_, version) =>
    `@commitlint/lint@${version} can use the configuration`,
});
test(lintUsingConfiguration, '19.x');
test(lintUsingConfiguration, '20.x');
