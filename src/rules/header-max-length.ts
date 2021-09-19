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
          type: /^(chore|fix)$/,
          scope: /^deps$/,
        },
        {
          name: 'Renovate (custom rule)',
          type: /^chore$/,
          scope: /^peer-deps$/,
        },
        {
          name: 'Dependabot (Angular/Conventional Commits)',
          type: /^(chore|build)$/,
          /**
           * References for the scope style used by Dependabot.
           * - https://github.com/dependabot/dependabot-core/blob/v0.130.3/common/lib/dependabot/pull_request_creator/pr_name_prefixer.rb#L125-L127
           * - https://github.com/dependabot/dependabot-core/blob/v0.130.3/common/lib/dependabot/pull_request_creator/pr_name_prefixer.rb#L114
           */
          scope: /^deps(-dev)?$/,
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
