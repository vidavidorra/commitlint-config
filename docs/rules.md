# Rules <!-- omit in toc -->

This configuration is extending [@commitlint/config-conventional][@commitlint/config-conventional]. Only the changed and added rules, compared to [@commitlint/config-conventional][@commitlint/config-conventional], are documented here.

- [`body-max-line-length`](#body-max-line-length)
- [`footer-max-line-length`](#footer-max-line-length)
- [`header-max-length`](#header-max-length)
- [`function-rules/header-max-length`](#function-rulesheader-max-length)

## `body-max-line-length`

- **condition**: `body` each line has `value` or less characters.
- **level**: `disabled`.

## `footer-max-line-length`

- **condition**: `footer` lines has `value` or less characters.
- **level**: `disabled`.
- **value**: n/a

## `header-max-length`

- **condition**: `header` has `value` or less characters.
- **level**: `disabled`.
- **value**: n/a

## `function-rules/header-max-length`

- **condition**: `header` has `value` or less characters.
- **level**: `error`.
- **rule**: `always`.
- **value**:
  The value is dependent on the commit header and has the following values.

  - Default.
    ```json
    100
    ```
  - If `header` has one of the prefixes listed below.
    - `chore(deps)`, for [**Renovate**][renovate] and [**Dependabot**][dependabot].
    - `fix(deps)`, for [**Renovate**][renovate].
    - `build(deps)`, for [**Dependabot**][dependabot].
    - `chore(deps-dev)`, for [**Dependabot**][dependabot].
    - `build(deps-dev)`, for [**Dependabot**][dependabot].
    ```json
    200
    ```

> [!NOTE]
> Regular commits have the default header length and fail if the header is too long.
>
> ```shell
> $ echo 'chore: knowledge, like air, is vital to life. Like air, no one should be denied it. - Alan Moore' | npx commitlint  # passes, 96 characters
> $ echo 'chore: knowledge, like air, is vital to life. Like air, no one should be denied it. - Alan Moore, V for Vendetta' | npx commitlint  # fails, 112 characters
> ```
>
> [**Renovate**][renovate] and [**Dependabot**][dependabot] commits have extended header length.
>
> ```shell
> $ echo 'chore(deps): we are told to remember the idea, not the man. Because a man can fail. He can be caught, he can be killed and forgotten. But 400 years later, an idea can still change the world - A. Moore' | npx commitlint # passes, 200 characters
> $ echo 'chore(deps): we are told to remember the idea, not the man. Because a man can fail. He can be caught, he can be killed and forgotten. But 400 years later, an idea can still change the world - Alan Moore' | npx commitlint # fails, 202 characters
> ```

<!-- References -->

[@commitlint/config-conventional]: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
[renovate]: https://renovatebot.com
[dependabot]: https://dependabot.com
