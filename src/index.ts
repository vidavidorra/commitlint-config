import { UserConfig } from '@commitlint/types';
import rules from './rules';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['function-rules'],
  rules: {
    'body-max-line-length': [0],
    'footer-max-line-length': [0],
    'header-max-length': [0],
    'function-rules/header-max-length': [2, 'always', rules.headerMaxLength],
  },
};

/**
 * Export single object, according to the CommonJS model. The CommonJS module is
 * explicitly used here as that's the kind of module commitlint requires for
 * shareable configurations.
 */
export = config;
