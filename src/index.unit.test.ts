import * as config from './';
import { describe, expect, it } from '@jest/globals';
import rules from './rules';

describe('commitlint plugin function rules', () => {
  it("exports a CommonJS module with 'rules' object", () => {
    expect(config.rules).not.toBeUndefined();
    expect(typeof config.rules).toEqual('object');
  });

  it("extends the '@commitlint/config-conventional' config", () => {
    expect(config.extends).toEqual(['@commitlint/config-conventional']);
  });

  it("uses the 'function-rules' plugin", () => {
    expect(config.plugins).toEqual(['function-rules']);
  });

  it("creates the 'function-rules/header-max-length' rule", () => {
    // @ts-expect-error: TS2532: Object is possibly 'undefined'.
    const rule = config.rules['function-rules/header-max-length'];
    expect(rule).toEqual([2, 'always', rules.headerMaxLength]);
  });

  it.each([
    'body-max-line-length',
    'footer-max-line-length',
    'header-max-length',
  ])("disables the '%s' rule", (ruleName: string) => {
    // @ts-expect-error: TS2532: Object is possibly 'undefined'.
    const rule = config.rules[ruleName];
    expect(rule).toEqual([0]);
  });
});
