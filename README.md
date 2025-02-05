# release-please-monorepo-example

## Creating a prerelease package

This section describes how to create a prerelease for package `foo@1.2.0` to `foo@2.0.0-beta`.

### Steps to Add a New Package

- Create new branch from with `pre/` prefix such as `pre/foo-2` or `pre/foo-2.0.0` (branch naming is irrelevant besides the prefix) and push it to origin.
- Update `release-please-config.json` to support prerelease. `prerelease-type` can be any value such as beta, alpha, rc etc.

```
{
  ...
  "packages": {
    ...
    "foo": {
      "release-type": "node",
      "prerelease-type": "beta",
      "prerelease": true,
      "versioning": "prerelease"
    }
  }
}
```
- Make changes to foo package, and commit and push them(NOTE: at most 100 commits difference is allowed between main and `pre/` branch).
- Merge prerelease PR created by release-please bot and your package will be created `foo@2.0.0-beta`.

## Adding a New Package

This section describes how to add a new package, `foo`, to the monorepo.

### Steps to Add a New Package

- Add the package to `.release-please-manifest.json`:

```
{
  ...,
  "packages/foo": "0.1.0"
}
```

- Add the package to `release-please-config.json`.

```
{
  ...
  "packages": {
    ...
    "packages/foo": {
      "release-type": "node"
    }
  }
}
```

- Add a new step to the `release-please` GitHub workflow for publishing the package.

```
...
      - name: Publish foo package
        uses: ./.github/actions/publish
        with:
          package: packages/foo
          ref: ${{ steps.release.output['packages/foo--tag_name'] }}
          node-auth-token: ${{ secrets.GITHUB_TOKEN }}
        if: ${{ steps.release.outputs['packages/foo--release_created'] }}
```

- Run `pnpm install` to update `pnpm-lock.yaml`.
- Open a pull request and squash merge it with a breaking change commit to release the package with version `1.0.0`.
