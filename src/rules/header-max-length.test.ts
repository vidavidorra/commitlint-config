import test from 'ava';
import {
  type Commit,
  config,
  failedMessage,
  headerMaxLength,
} from './header-max-length.js';

function commit(
  type: string,
  scope: string | undefined,
  maxLength: number,
): Commit {
  const prefix = scope === undefined ? `${type}: ` : `${type}(${scope}): `;
  const description =
    'Knowledge, like air, is vital to life. Like air, no one should be denied it.';
  const subject = description.padEnd(maxLength - prefix.length);

  return {
    raw: prefix + subject,
    header: prefix + subject,
    type,
    scope: scope ?? null,
    subject,
    body: null,
    footer: null,
    mentions: [],
    notes: [],
    references: [],
    revert: null,
    merge: null,
  } as unknown as Commit;
}

const outcome = test.macro<
  [boolean, string, string | undefined, string | undefined, number]
>({
  // eslint-disable-next-line max-params
  async exec(t, success, type, scope, tool, maxLength) {
    t.deepEqual(
      headerMaxLength(commit(type, scope, maxLength)),
      success ? [true] : [false, failedMessage(tool !== undefined, maxLength)],
    );
  },
  // eslint-disable-next-line max-params
  title(_, success, type, scope, tool) {
    return [
      success ? 'succeeds with a short' : 'fails with a long',
      `"${type}` + (scope === undefined ? '"' : `(${scope})"`),
      tool === undefined ? 'message' : `${tool} dependency message`,
    ].join(' ');
  },
});

test(outcome, true, 'chore', undefined, undefined, config.maxLength);
test(outcome, true, 'fix', undefined, undefined, config.maxLength);
test(outcome, true, 'build', undefined, undefined, config.maxLength);
test(outcome, false, 'chore', undefined, undefined, config.maxLength + 1);
test(outcome, false, 'fix', undefined, undefined, config.maxLength + 1);
test(outcome, false, 'build', undefined, undefined, config.maxLength + 1);
const maxDepsLength = config.dependency.maxLength;
test(outcome, true, 'chore', 'deps', 'Renovate', maxDepsLength);
test(outcome, true, 'fix', 'deps', 'Renovate', maxDepsLength);
test(outcome, false, 'chore', 'deps', 'Renovate', maxDepsLength + 1);
test(outcome, false, 'fix', 'deps', 'Renovate', maxDepsLength + 1);
test(outcome, true, 'chore', 'deps', 'Dependabot', maxDepsLength);
test(outcome, true, 'build', 'deps', 'Dependabot', maxDepsLength);
test(outcome, true, 'chore', 'deps-dev', 'Dependabot', maxDepsLength);
test(outcome, true, 'build', 'deps-dev', 'Dependabot', maxDepsLength);
test(outcome, false, 'chore', 'deps', 'Dependabot', maxDepsLength + 1);
test(outcome, false, 'build', 'deps', 'Dependabot', maxDepsLength + 1);
test(outcome, false, 'chore', 'deps-dev', 'Dependabot', maxDepsLength + 1);
test(outcome, false, 'build', 'deps-dev', 'Dependabot', maxDepsLength + 1);
