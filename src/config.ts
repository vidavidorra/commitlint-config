import {type UserConfig} from '@commitlint/types';
import {headerMaxLength} from './rules/index.js';

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  plugins: ['function-rules'],
  rules: {
    'body-max-line-length': [0],
    'footer-max-line-length': [0],
    'header-max-length': [0],
    'function-rules/header-max-length': [2, 'always', headerMaxLength],
  },
};

export {config};
