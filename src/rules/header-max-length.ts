import {type Rule, type RuleOutcome} from '@commitlint/types';

type Commit = Parameters<Rule>[0];

const config = {
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
        name: 'Dependabot (Angular/Conventional Commits)',
        /**
         * References for the commit message used by Dependabot.
         * - https://github.com/dependabot/dependabot-core/blob/v0.162.0/common/lib/dependabot/pull_request_creator/pr_name_prefixer.rb#L125-L127
         * - https://github.com/dependabot/dependabot-core/blob/v0.162.0/common/lib/dependabot/pull_request_creator/pr_name_prefixer.rb#L114
         * - https://github.com/dependabot/dependabot-core/blob/v0.162.0/common/lib/dependabot/pull_request_creator/pr_name_prefixer.rb#L229-L234
         */
        type: /^(chore|build)$/,
        scope: /^deps(-dev)?$/,
      },
    ],
  },
} as const;

function failedMessage(dependency: boolean, length: number): string {
  const maxLength = dependency ? config.dependency.maxLength : config.maxLength;
  return [
    `header ${dependency ? 'for dependency commits ' : ''}must not be longer`,
    `than ${maxLength} characters, current length is ${length}`,
  ].join(' ');
}

function headerMaxLength(parsed: Commit): RuleOutcome {
  const headerLength = parsed.header?.length ?? 0;
  if (headerLength <= config.maxLength) {
    return [true];
  }

  const isDependencyCommit = config.dependency.commitStyle.some(
    (commitStyle) =>
      commitStyle.type.test(parsed.type ?? '') &&
      commitStyle.scope.test(parsed.scope ?? ''),
  );
  const maxLength = isDependencyCommit
    ? config.dependency.maxLength
    : config.maxLength;
  if (headerLength > maxLength) {
    return [false, failedMessage(isDependencyCommit, headerLength)];
  }

  return [true];
}

export {type Commit, config, failedMessage, headerMaxLength};
