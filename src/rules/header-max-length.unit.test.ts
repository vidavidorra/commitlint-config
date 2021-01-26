import { describe, expect, it } from '@jest/globals';
import { RuleOutcome } from '@commitlint/types';
import headerMaxLength from './header-max-length';
import parse from '@commitlint/parse';

interface MessageConfig {
  regular: string;
  dependency: string;
  padding: string;
  maxLength: number;
  maxDependencyLength: number;
}

describe('headerMaxLength', () => {
  const successResult: RuleOutcome = [true];
  const messageConfig: Readonly<MessageConfig> = {
    regular: [
      'Knowledge, like air, is vital to life. Like air, no one should be',
      'denied it.',
    ].join(' '),
    dependency: [
      'We are told to remember the idea, not the man, because a man can fail.',
      'He can be caught, he can be killed and forgotten, but 400 years later,',
      'an idea can still change the world.',
    ].join(' '),
    padding: '*',
    maxLength: 100,
    maxDependencyLength: 200,
  };

  it.each(['chore', 'fix'])(
    "succeeds with a short '%s' message",
    async (type: string) => {
      const message = await parse(
        `${type}: ${messageConfig.regular}`.padEnd(
          messageConfig.maxLength,
          messageConfig.padding,
        ),
      );
      const result = headerMaxLength(message);

      expect(result).toEqual(successResult);
    },
  );

  it.each(['chore', 'fix'])(
    "fails with a long '%s' message",
    async (type: string) => {
      const message = await parse(
        `${type}: ${messageConfig.regular}`.padEnd(
          messageConfig.maxLength + 1,
          messageConfig.padding,
        ),
      );
      const expectedResult: RuleOutcome = [
        false,
        [
          `header must not be longer than ${messageConfig.maxLength}`,
          `characters, current length is ${message.raw.length}`,
        ].join(' '),
      ];
      const result = headerMaxLength(message);

      expect(result).toEqual(expectedResult);
    },
  );

  it.each([
    'chore(deps)',
    'fix(deps)',
    'chore(peer-deps)',
    'chore(deps-dev)',
    'build(deps-dev)',
  ])(
    "succeeds with a short '%s' dependency message",
    async (prefix: string) => {
      const message = await parse(
        `${prefix}: ${messageConfig.dependency}`.padEnd(
          messageConfig.maxDependencyLength,
          messageConfig.padding,
        ),
      );
      const result = headerMaxLength(message);

      expect(result).toEqual(successResult);
    },
  );

  it.each([
    'chore(deps)',
    'fix(deps)',
    'chore(peer-deps)',
    'chore(deps-dev)',
    'build(deps-dev)',
  ])("fails with a long '%s' dependency message", async (prefix: string) => {
    const message = await parse(
      `${prefix}: ${messageConfig.dependency}`.padEnd(
        messageConfig.maxDependencyLength + 1,
        messageConfig.padding,
      ),
    );
    const expectedResult: RuleOutcome = [
      false,
      [
        'header for dependency commits must not be longer than',
        `${messageConfig.maxDependencyLength} characters, current length is`,
        message.raw.length,
      ].join(' '),
    ];
    const result = headerMaxLength(message);

    expect(result).toEqual(expectedResult);
  });
});
