import test from 'ava';
import type commitlintLoad from '@commitlint/load-17.x';
import type commitlintLint from '@commitlint/lint-17.x';
import {type LoadOptions} from '@commitlint/types';
import {config} from './config.js';
import {headerMaxLength} from './rules/index.js';

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
const loadConfig = test.macro<[string]>({
  async exec(t, version) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const module = await import(`@commitlint/load-${version}`);
    const load = module.default.default as typeof commitlintLoad.default;

    await t.notThrowsAsync(load(config, loadOptions));
  },
  title: (_, version) =>
    `@commitlint/load@${version} can load the configuration`,
});
test(loadConfig, '9.x');
test(loadConfig, '10.x');
test(loadConfig, '11.x');
test(loadConfig, '12.x');
test(loadConfig, '13.x');
test(loadConfig, '14.x');
test(loadConfig, '15.x');
test(loadConfig, '16.x');
test(loadConfig, '17.x');

const lintUsingConfiguration = test.macro<[string]>({
  async exec(t, version) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const loadModule = await import(`@commitlint/load-${version}`);
    const load = loadModule.default.default as typeof commitlintLoad.default;
    const qualifiedConfig = await load(config, loadOptions);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const module = await import(`@commitlint/lint-${version}`);
    const lint = module.default.default as typeof commitlintLint.default;

    const input = [
      'chore(deps): we are told to remember the idea, not the man. Because a',
      'man can fail. He can be caught, he can be killed and forgotten. But 400',
      'years later, an idea can still change the world - A. Moore',
    ].join(' ');
    const outcome = await lint(input, qualifiedConfig.rules, {
      plugins: qualifiedConfig.plugins,
    });

    t.deepEqual(outcome, {input, valid: true, errors: [], warnings: []});
  },
  title: (_, version) =>
    `@commitlint/lint@${version} can use the configuration`,
});
test(lintUsingConfiguration, '9.x');
test(lintUsingConfiguration, '10.x');
test(lintUsingConfiguration, '11.x');
test(lintUsingConfiguration, '12.x');
test(lintUsingConfiguration, '13.x');
test(lintUsingConfiguration, '14.x');
test(lintUsingConfiguration, '15.x');
test(lintUsingConfiguration, '16.x');
test(lintUsingConfiguration, '17.x');
