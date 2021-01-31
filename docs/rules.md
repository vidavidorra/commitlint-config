# Rules

This configuration is extending [@commitlint/config-conventional][@commitlint/config-conventional]. Only the changed and added rules, compared to [@commitlint/config-conventional][@commitlint/config-conventional], are documentend here.

## body-max-line-length

- **condition:** `body` each line has `value` or less characters.
- **level:** `disabled`.

## footer-max-line-length

- **condition:** `footer` lines has `value` or less characters.
- **level:** `disabled`.

## header-max-length

- **condition:** `header` has `value` or less characters.
- **level:** `disabled`.

## function-rules/header-max-length

- **condition:** `header` has `value` or less characters.
- **level:** `error`.
- **rule:** `always`.
- **value**  
  The value is dependent on the commit header and can have the following values.
  - Default.
    ```
    100
    ```
  - If `header` has one of the prefixes listed below.
    - `chore(deps)`
    - `fix(deps)`
    - `chore(peer-deps)`
    - `chore(deps)`
    - `build(deps)`
    - `chore(deps-dev)`
    - `build(deps-dev)`
    ```
    200
    ```

```shell
$ echo 'chore: Knowledge, like air, is vital to life. Like air, no one should be denied it. - Alan Moore'  # passes
$ echo 'chore: Knowledge, like air, is vital to life. Like air, no one should be denied it. - Alan Moore, V for Vendetta'  # fails

$ echo 'chore(deps): We are told to remember the idea, not the man, because a man can fail. He can be caught, he can be killed and forgotten, but 400 years later, an idea can still change the world.'  # passes
$ echo 'chore(deps): We are told to remember the idea, not the man, because a man can fail. He can be caught, he can be killed and forgotten, but 400 years later, an idea can still change the world. - Alan Moore'  # fails

$ echo 'chore(peer-deps): We are told to remember the idea, not the man, because a man can fail. He can be caught, he can be killed and forgotten, but 400 years later, an idea can still change the world.'  # passes
$ echo 'chore(peer-deps): We are told to remember the idea, not the man, because a man can fail. He can be caught, he can be killed and forgotten, but 400 years later, an idea can still change the world. - Alan Moore'  # fails
```

<!-- References -->

[@commitlint/config-conventional]: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
