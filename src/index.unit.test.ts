import * as config from './';
import { describe, expect, it } from '@jest/globals';
import rules from './rules';

describe('commitlint plugin function rules', () => {
  it("exports a CommonJS module with 'rules' object", () => {
    expect(config.rules).not.toBeUndefined();
  });

  it("extends the '@commitlint/config-conventional' config", () => {
    expect(config.extends).toEqual(['@commitlint/config-conventional']);
  });

  it("uses the 'function-rules' plugin", () => {
    expect(config.plugins).toEqual(['function-rules']);
  });

  it("creates the 'function-rules/header-max-length' rule", () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error: TS2532: Object is possibly 'undefined'.
    const rule = config.rules['function-rules/header-max-length'];
    expect(rule).toEqual([2, 'always', rules.headerMaxLength]);
  });

  /**
   * Due to a bug in the `.each` type, it is not possible to use it with
   * `@jest/globals`. See https://github.com/facebook/jest/issues/10447 for the
   * specific issue. As a workaround the TypeScript error is ignored.
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error: TS2349: This expression is not callable.
  it.each([
    'body-max-line-length',
    'footer-max-line-length',
    'header-max-length',
  ])("disables the '%s' rule", (ruleName: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error: TS2532: Object is possibly 'undefined'.
    const rule = config.rules[ruleName];
    expect(rule).toEqual([0]);
  });
});
