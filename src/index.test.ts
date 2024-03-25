import test from 'ava';
import load19x from '@commitlint/load-19.x';
import lint19x from '@commitlint/lint-19.x';
import {type LoadOptions} from '@commitlint/types';
import {headerMaxLength} from './rules/index.js';
import config from './index.js';

/* eslint-disable @typescript-eslint/naming-convention */
const versions = {
  '19.x': {load: load19x, lint: lint19x},
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
    await t.notThrowsAsync(versions[version].load(config, loadOptions));
  },
  title: (_, version) =>
    `@commitlint/load@${version} can load the configuration`,
});
test(loadConfig, '19.x');

const lintUsingConfiguration = test.macro<[keyof typeof versions]>({
  async exec(t, version) {
    const qualifiedConfig = await versions[version].load(config, loadOptions);
    const input = [
      'chore(deps): we are told to remember the idea, not the man. Because a',
      'man can fail. He can be caught, he can be killed and forgotten. But 400',
      'years later, an idea can still change the world - A. Moore',
    ].join(' ');
    const outcome = await versions[version].lint(input, qualifiedConfig.rules, {
      plugins: qualifiedConfig.plugins,
    });

    t.deepEqual(outcome, {input, valid: true, errors: [], warnings: []});
  },
  title: (_, version) =>
    `@commitlint/lint@${version} can use the configuration`,
});
test(lintUsingConfiguration, '19.x');
