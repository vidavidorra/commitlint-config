# [**commitlint**][commitlint] configuration <!-- omit in toc -->

[**commitlint**][commitlint] configuration extending [@commitlint/config-conventional][@commitlint/config-conventional].

- Based on [@commitlint/config-conventional][@commitlint/config-conventional].
- Allow longer commit messages headers specifically for dependency management tools like [Renovate](https://www.mend.io/renovate/) and [Dependabot](https://dependabot.com/).
- No restriction on maximum line length of body and footer.

---

[![npm version](https://img.shields.io/npm/v/@vidavidorra/commitlint-config?logo=npm&style=flat-square)](https://www.npmjs.com/package/@vidavidorra/commitlint-config)
[![npm downloads](https://img.shields.io/npm/dm/@vidavidorra/commitlint-config?logo=npm&style=flat-square)](https://www.npmjs.com/package/@vidavidorra/commitlint-config)
[![Node.js version support](https://img.shields.io/node/v/@vidavidorra/commitlint-config?logo=node.js&style=flat-square)](https://nodejs.org/en/about/releases/)
[![Renovate enabled](https://img.shields.io/badge/Renovate-enabled-brightgreen?logo=renovatebot&logoColor&style=flat-square)](https://renovatebot.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Code coverage](https://img.shields.io/codecov/c/github/vidavidorra/commitlint-config?logo=codecov&style=flat-square)](https://codecov.io/gh/vidavidorra/commitlint-config)
[![License](https://img.shields.io/github/license/vidavidorra/commitlint-config?style=flat-square)](LICENSE.md)

- [Install](#install)
- [Usage](#usage)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Security policy](#security-policy)
- [License](#license)

## Install

```shell
npm install --save-dev @vidavidorra/commitlint-config @commitlint/cli
```

> [!IMPORTANT]
> Due to the `header-trim` rule addition in [**commitlint**][commitlint] v18.6.0, `@commitlint/cli` should be at least v18.6.0.

## Usage

Use this configuration in your project's [**commitlint**][commitlint] configuration by specifying it as item in the `extends` array ([**commitlint** Shareable configuration](https://commitlint.js.org/#/concepts-shareable-config?id=concept-shareable-configuration)).

> [!TIP]
> You may use either just the scope, `@vidavidorra`, or the full path, `@vidavidorra/commitlint-config`, of the package.

```js
module.exports = {
  extends: ['@vidavidorra'],
};
```

## Documentation

See [docs/rules](docs/rules.md) for the configured rules.

## Contributing

Please [create an issue](https://github.com/vidavidorra/commitlint-config/issues/new/choose) if you have a bug report or feature proposal, or [create a discussion](https://github.com/vidavidorra/commitlint-config/discussions) if you have a question. If you like this project, please consider giving it a star ⭐

Refer to the [contributing guide](https://github.com/vidavidorra/.github/blob/main/CONTRIBUTING.md) detailed information about other contributions, like pull requests.

[![Conventional Commits: 1.0.0](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow?style=flat-square)](https://conventionalcommits.org)
[![XO code style](https://shields.io/badge/code_style-5ed9c7?logo=xo&labelColor=gray&style=flat-square)](https://github.com/xojs/xo)
[![Code style](https://img.shields.io/badge/code_style-Prettier-ff69b4?logo=prettier&style=flat-square)](https://github.com/prettier/prettier)

## Security policy

Please refer to the [Security Policy on GitHub](https://github.com/vidavidorra/commitlint-config/security/) for the security policy.

## License

This project is licensed under the [GPLv3 license](https://www.gnu.org/licenses/gpl.html).

Copyright © 2020-2024 Jeroen de Bruijn

<details><summary>License details.</summary>
<p>

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>.

The full text of the license is available in the [LICENSE](LICENSE.md) file in this repository and [online](https://www.gnu.org/licenses/gpl.html).

</details>

<!-- References -->

[commitlint]: https://commitlint.js.org/
[@commitlint/config-conventional]: https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
