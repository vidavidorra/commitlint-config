import { Commit, RuleOutcome } from '@commitlint/types';

interface Config {
  maxLength: number;
  dependency: {
    maxLength: number;
    commitStyle: {
      name: string;
      type: RegExp;
      scope: RegExp;
    }[];
  };
}

function headerMaxLength(parsed: Commit): RuleOutcome {
  const config: Readonly<Config> = {
    maxLength: 100,
    dependency: {
      maxLength: 200,
      commitStyle: [
        {
          name: 'Renovate',
          type: /^fix$/,
          scope: /^deps$/,
        },
        {
          name: 'Renovate',
          type: /^chore$/,
          scope: /^deps$/,
        },
        {
          name: 'Renovate (custom rule)',
          type: /^chore$/,
          scope: /^peer-deps$/,
        },
      ],
    },
  };

  if (parsed.header.length <= config.maxLength) {
    return [true];
  }

  const isDependencyCommit = config.dependency.commitStyle.some(
    (e) =>
      parsed.type !== null &&
      e.type.test(parsed.type) &&
      parsed.scope !== null &&
      e.scope.test(parsed.scope),
  );
  if (!isDependencyCommit && parsed.header.length > config.maxLength) {
    return [
      false,
      [
        `header must not be longer than ${config.maxLength} characters,`,
        `current length is ${parsed.header.length}`,
      ].join(' '),
    ];
  }

  if (
    isDependencyCommit &&
    parsed.header.length > config.dependency.maxLength
  ) {
    return [
      false,
      [
        'header for dependency commits must not be longer than',
        `${config.dependency.maxLength} characters, current length is`,
        parsed.header.length,
      ].join(' '),
    ];
  }

  return [true];
}

export default headerMaxLength;
