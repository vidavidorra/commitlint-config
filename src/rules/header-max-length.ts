import {type Commit, type RuleOutcome} from '@commitlint/types';

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
  if (parsed.header.length <= config.maxLength) {
    return [true];
  }

  const isDependencyCommit = config.dependency.commitStyle.some(
    (commitStyle) =>
      parsed.type !== null &&
      commitStyle.type.test(parsed.type) &&
      parsed.scope !== null &&
      commitStyle.scope.test(parsed.scope),
  );
  const maxLength = isDependencyCommit
    ? config.dependency.maxLength
    : config.maxLength;
  if (parsed.header.length > maxLength) {
    return [false, failedMessage(isDependencyCommit, parsed.header.length)];
  }

  return [true];
}

export {config, failedMessage, headerMaxLength};
