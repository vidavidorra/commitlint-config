### [2.1.9](https://github.com/vidavidorra/commitlint-config/compare/v2.1.8...v2.1.9) (2021-02-25)

### Continuous Integration

- **renovate:** group commitlint develop- and dependencies separately ([e386086](https://github.com/vidavidorra/commitlint-config/commit/e3860861f92bf90863f9dd7344b8696b5d4b1705))

### [2.1.8](https://github.com/vidavidorra/commitlint-config/compare/v2.1.7...v2.1.8) (2021-02-17)

### Bug Fixes

- **deps:** update dependency commitlint-plugin-function-rules to v1.1.23 ([#164](https://github.com/vidavidorra/commitlint-config/issues/164)) ([f8e1623](https://github.com/vidavidorra/commitlint-config/commit/f8e162307265270377ff9ed3ac45a2f30f024112))

### [2.1.7](https://github.com/vidavidorra/commitlint-config/compare/v2.1.6...v2.1.7) (2021-02-14)

### Build System

- remove `postinstall` script from the published package ([41f0766](https://github.com/vidavidorra/commitlint-config/commit/41f0766f722854641e1e02522943f2e94856c617))

### [2.1.6](https://github.com/vidavidorra/commitlint-config/compare/v2.1.5...v2.1.6) (2021-02-13)

### Continuous Integration

- **renovate:** use shared configuration from `vidavidorra/.github` ([ef7634d](https://github.com/vidavidorra/commitlint-config/commit/ef7634d50c1f25cd3c9ef075cf1e655032c39bf7))

### [2.1.5](https://github.com/vidavidorra/commitlint-config/compare/v2.1.4...v2.1.5) (2021-02-13)

### Tests

- add check to CommonJS module export to be an object ([421e71e](https://github.com/vidavidorra/commitlint-config/commit/421e71e665cb1089ea54613ec9fa016682fe1f0a))

### [2.1.4](https://github.com/vidavidorra/commitlint-config/compare/v2.1.3...v2.1.4) (2021-02-13)

### Bug Fixes

- move husky configuration to shell scripts, as per husky v5 documentation ([4a28aae](https://github.com/vidavidorra/commitlint-config/commit/4a28aae8f8755e9539bcaf8b23ff206ebcd29c85))

### [2.1.3](https://github.com/vidavidorra/commitlint-config/compare/v2.1.2...v2.1.3) (2021-02-05)

### Documentation

- **rules:** update `function-rules/header-max-length` example with commitlint execution ([b1441ca](https://github.com/vidavidorra/commitlint-config/commit/b1441ca133f0823fee3b5989115dd0f49eda387e))

### [2.1.2](https://github.com/vidavidorra/commitlint-config/compare/v2.1.1...v2.1.2) (2021-02-01)

### Build System

- set `esModuleInterop` to `true` to fix `@commitlint/types` import ([32fb415](https://github.com/vidavidorra/commitlint-config/commit/32fb4156c306f7a34a90f1a90b0340d7f3b7bef7))

### [2.1.1](https://github.com/vidavidorra/commitlint-config/compare/v2.1.0...v2.1.1) (2021-01-31)

### Documentation

- add 2021 to license ([792fbb5](https://github.com/vidavidorra/commitlint-config/commit/792fbb582195826ab7bf657da99182dfa78ca49b))

### Continuous Integration

- remove `chore` scope from changelog (generation) ([66f12c2](https://github.com/vidavidorra/commitlint-config/commit/66f12c203b1f0c6120b12ffe66879d32e79f1da1))

## [2.1.0](https://github.com/vidavidorra/commitlint-config/compare/v2.0.0...v2.1.0) (2021-01-31)

### Features

- **header-max-length:** support Dependabot Angular/Conventional Commits ([#145](https://github.com/vidavidorra/commitlint-config/issues/145)) ([fcf54ba](https://github.com/vidavidorra/commitlint-config/commit/fcf54ba97dbb193a748ce2df08a67d18adbcea2c))

## [2.0.0](https://github.com/vidavidorra/commitlint-config/compare/v1.0.21...v2.0.0) (2021-01-31)

### ⚠ BREAKING CHANGES

- **header-max-length:** remove `fix(peer-deps)` from allowed dependency prefix

### Bug Fixes

- **header-max-length:** remove `fix(peer-deps)` from allowed dependency prefix ([0e828b5](https://github.com/vidavidorra/commitlint-config/commit/0e828b53727db1ff9d7755b5d7690829a9e2a1ba))

### Code Refactoring

- **header-max-length:** create `commitStyle` configuration ([3a06f86](https://github.com/vidavidorra/commitlint-config/commit/3a06f864501c5320d156c3388d89432da15c4047))

### Tests

- **header-max-length:** include all types in non-scoped tests ([455f604](https://github.com/vidavidorra/commitlint-config/commit/455f6045c5f5bf581c91999d46f0acc7436217f8))

### [1.0.21](https://github.com/vidavidorra/commitlint-config/compare/v1.0.20...v1.0.21) (2020-10-25)

### Bug Fixes

- **deps:** update dependency commitlint-plugin-function-rules to v1.1.20 ([#50](https://github.com/vidavidorra/commitlint-config/issues/50)) ([7ec1e1e](https://github.com/vidavidorra/commitlint-config/commit/7ec1e1eef610c64dd27f135830d8ff38f75fed0d))

### [1.0.20](https://github.com/vidavidorra/commitlint-config/compare/v1.0.19...v1.0.20) (2020-10-25)

### Documentation

- fix contributing guide link ([4bdcfa1](https://github.com/vidavidorra/commitlint-config/commit/4bdcfa1773e1fe3824668d8ef5a1cad0209bd1b0))

### [1.0.19](https://github.com/vidavidorra/commitlint-config/compare/v1.0.18...v1.0.19) (2020-10-24)

### Bug Fixes

- **package:** specify supported node engine to v10 (LTS) ([58a619a](https://github.com/vidavidorra/commitlint-config/commit/58a619ac33016d629d34814da0aaaf06aa7bb4b0))

### Styles

- format changelog and format it during release ([8d224ca](https://github.com/vidavidorra/commitlint-config/commit/8d224cab9a7895c9109582a1506499a174521689))
- use relative matcin gin ESLint ignore file ([cc9aeed](https://github.com/vidavidorra/commitlint-config/commit/cc9aeedf7799ea0acfe3181f8c4440303673463b))

### [1.0.18](https://github.com/vidavidorra/commitlint-config/compare/v1.0.17...v1.0.18) (2020-10-24)

### Bug Fixes

- **deps:** update dependency commitlint-plugin-function-rules to v1.1.19 ([#49](https://github.com/vidavidorra/commitlint-config/issues/49)) ([c717bea](https://github.com/vidavidorra/commitlint-config/commit/c717bea81f6f2f1654e84e4ec25ee6bf2cd31fe9))

### [1.0.17](https://github.com/vidavidorra/commitlint-config/compare/v1.0.16...v1.0.17) (2020-10-21)

### Bug Fixes

- **deps:** update dependency commitlint-plugin-function-rules to v1.1.16 ([#42](https://github.com/vidavidorra/commitlint-config/issues/42)) ([b1eaa1e](https://github.com/vidavidorra/commitlint-config/commit/b1eaa1e1a2352b5f9d6f18b15cd16a0716678e16))

### [1.0.16](https://github.com/vidavidorra/commitlint-config/compare/v1.0.15...v1.0.16) (2020-10-19)

### Bug Fixes

- **deps:** update dependency commitlint-plugin-function-rules to v1.1.15 ([#39](https://github.com/vidavidorra/commitlint-config/issues/39)) ([205b9b4](https://github.com/vidavidorra/commitlint-config/commit/205b9b43a255061852270f80aa7c1e894a3b82a7))

### [1.0.15](https://github.com/vidavidorra/commitlint-config/compare/v1.0.14...v1.0.15) (2020-10-19)

### Documentation

- change contributing guide reference wording ([a88483e](https://github.com/vidavidorra/commitlint-config/commit/a88483ed4e6a0f2f5e107c1a264d9a93d91f08fe))

### [1.0.14](https://github.com/vidavidorra/commitlint-config/compare/v1.0.13...v1.0.14) (2020-10-19)

### Documentation

- fix contributing guide link ([876d95f](https://github.com/vidavidorra/commitlint-config/commit/876d95fc2754c9ec89f8067e0bde170de8a9dc62))

### [1.0.13](https://github.com/vidavidorra/commitlint-config/compare/v1.0.12...v1.0.13) (2020-10-18)

### Documentation

- add full documentation for this project with my new readme style ([019d596](https://github.com/vidavidorra/commitlint-config/commit/019d59628767714b8df4dc0df10b4752d7be8dc6))

### [1.0.12](https://github.com/vidavidorra/commitlint-config/compare/v1.0.11...v1.0.12) (2020-10-07)

### Bug Fixes

- **deps:** update dependency commitlint-plugin-function-rules to v1.1.14 ([#24](https://github.com/vidavidorra/commitlint-config/issues/24)) ([42f24bf](https://github.com/vidavidorra/commitlint-config/commit/42f24bfd2cf5d9eca52cc4531c7cda7dccd6f20b))

### [1.0.11](https://github.com/vidavidorra/commitlint-config/compare/v1.0.10...v1.0.11) (2020-10-07)

### Continuous Integration

- separate build check from lint and check build pre-commit ([1f9cbfe](https://github.com/vidavidorra/commitlint-config/commit/1f9cbfe2470d2b2f2928ca3073e9a09ca17b76a6))

### [1.0.10](https://github.com/vidavidorra/commitlint-config/compare/v1.0.9...v1.0.10) (2020-10-02)

### Bug Fixes

- **deps:** update dependency commitlint-plugin-function-rules to v1.1.13 ([#17](https://github.com/vidavidorra/commitlint-config/issues/17)) ([1e5bd09](https://github.com/vidavidorra/commitlint-config/commit/1e5bd09a0087253b1fe8e2abe9e6890e59c17bdb))

### [1.0.9](https://github.com/vidavidorra/commitlint-config/compare/v1.0.8...v1.0.9) (2020-10-02)

### Continuous Integration

- **renovate:** fix accidental removal of `pinDependencies` ([8f3ad94](https://github.com/vidavidorra/commitlint-config/commit/8f3ad9456b7696eae1c649d7310605f93350cbcf))
- **renovate:** migrate config to Renovate > v21.28.0 ([4b97176](https://github.com/vidavidorra/commitlint-config/commit/4b97176469feb5371fa55c3e0db3f2261345b9c2))

### [1.0.8](https://github.com/vidavidorra/commitlint-config/compare/v1.0.7...v1.0.8) (2020-09-28)

### Bug Fixes

- **deps:** update dependency commitlint-plugin-function-rules to v1.1.11 ([#9](https://github.com/vidavidorra/commitlint-config/issues/9)) ([fbb35f4](https://github.com/vidavidorra/commitlint-config/commit/fbb35f445c6e205eb125f2a050c15a524f7ab9fc))

### [1.0.7](https://github.com/vidavidorra/commitlint-config/compare/v1.0.6...v1.0.7) (2020-09-27)

### Tests

- **end-to-end:** rename build script to `build:clean-first` ([1c93b6d](https://github.com/vidavidorra/commitlint-config/commit/1c93b6d98441730d578f6f73b3a78a653ca2db67))

### Continuous Integration

- run full tests in lint-staged ([c9b5cc3](https://github.com/vidavidorra/commitlint-config/commit/c9b5cc38a8a1f6e9bde1151e3f65ddc39882c4ab))

### [1.0.6](https://github.com/vidavidorra/commitlint-config/compare/v1.0.5...v1.0.6) (2020-09-27)

### Bug Fixes

- **deps:** update dependency @commitlint/config-conventional to v11 ([#8](https://github.com/vidavidorra/commitlint-config/issues/8)) ([11e5e85](https://github.com/vidavidorra/commitlint-config/commit/11e5e85eaef5266f606f8c92a684dabbcaa6111a))
- **deps:** update dependency commitlint-plugin-function-rules to v1.1.10 ([#6](https://github.com/vidavidorra/commitlint-config/issues/6)) ([61840c0](https://github.com/vidavidorra/commitlint-config/commit/61840c0c78b32cfdd2d474e5c413eada97f2077c))

### [1.0.5](https://github.com/vidavidorra/commitlint-config/compare/v1.0.4...v1.0.5) (2020-09-27)

### Continuous Integration

- **npm:** set `access=public` ([9c909a7](https://github.com/vidavidorra/commitlint-config/commit/9c909a79b06eca1dae38788fbf0fab6364031dcf))

### [1.0.4](https://github.com/vidavidorra/commitlint-config/compare/v1.0.3...v1.0.4) (2020-09-27)

### Documentation

- add build and npm version badges ([194cd0c](https://github.com/vidavidorra/commitlint-config/commit/194cd0c543ec39e274f044a1a5324abd9066db76))

### [1.0.3](https://github.com/vidavidorra/commitlint-config/compare/v1.0.2...v1.0.3) (2020-09-27)

### Continuous Integration

- trigger release ([e0d9545](https://github.com/vidavidorra/commitlint-config/commit/e0d95450886ddea655e3477c082463f491016a1a))

### [1.0.2](https://github.com/vidavidorra/commitlint-config/compare/v1.0.1...v1.0.2) (2020-09-27)

### Bug Fixes

- **package:** add `main`, `types` and `files` for the package ([db2ab99](https://github.com/vidavidorra/commitlint-config/commit/db2ab992dc62807c2946d0caf5b362094543a700))

### [1.0.1](https://github.com/vidavidorra/commitlint-config/compare/v1.0.0...v1.0.1) (2020-09-27)

### Continuous Integration

- publish npm package ([66b1bcc](https://github.com/vidavidorra/commitlint-config/commit/66b1bccbc4f134711b3d3e143cdd1987eb95c8c3))

## 1.0.0 (2020-09-27)

### Features

- add configuration sources and tests ([2540a00](https://github.com/vidavidorra/commitlint-config/commit/2540a002243ae0da2530f875dc04b664f19a4632))

### Continuous Integration

- check build for type errors when linting ([10d7830](https://github.com/vidavidorra/commitlint-config/commit/10d783051f3d76cd8e4e4a0fdcfb7cf516d9a032))
- **commits:** add commitlint configuration to allow longer dependency commits ([7d70ddd](https://github.com/vidavidorra/commitlint-config/commit/7d70ddd44e2c05182cebf62703f575133abd9aab))
