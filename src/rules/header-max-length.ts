import { Commit, RuleOutcome } from '@commitlint/types';

function headerMaxLength(parsed: Commit): RuleOutcome {
  const config = {
    maxLength: 100,
    dependencyCommit: {
      type: /^(chore|fix)$/,
      scope: /^(peer-)?deps(-dev)?$/,
      maxLength: 200,
    },
  };

  const length = parsed.header.length;
  const isDepsCommit =
    parsed.type !== null &&
    config.dependencyCommit.type.test(parsed.type) &&
    parsed.scope !== null &&
    config.dependencyCommit.scope.test(parsed.scope);

  if (length <= config.maxLength) {
    return [true];
  }

  if (!isDepsCommit && length > config.maxLength) {
    return [
      false,
      [
        `header must not be longer than ${config.maxLength}`,
        `characters, current length is ${length}`,
      ].join(' '),
    ];
  }

  if (isDepsCommit && length > config.dependencyCommit.maxLength) {
    return [
      false,
      [
        `header for dependency commits must not be longer than`,
        `${config.dependencyCommit.maxLength} characters, current`,
        `length is ${length}`,
      ].join(' '),
    ];
  }

  return [true];
}

export default headerMaxLength;
