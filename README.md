# release-please-monorepo-example

## Adding a New Package

This section describes how to add a new package, `foo`, to the monorepo.

### Steps to Add a New Package

- Add the package to `.release-please-manifest.json`:
```
{
  ...,
  "foo": "0.1.0"
}
```
- Add the package to `release-please-config.json`.
```
{
  ...
  "packages": {
    ...
    "foo": {
      "release-type": "node"
    }
  }
}
```
- Add the package to `package.json` workspaces.
```
{
  ...,
  "workspaces": [
     ...,
     "foo"
  ]
}
```
- Update the `grep` command in GitHub workflows for identifying changed packages in tests.
```
# before
grep -E '^(...)/'

# after
grep -E '^(...|foo)/'
```
- Add a new step to the `release-please` GitHub workflow for publishing the package.
```
...
      - run: npm publish --workspace foo
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        if: ${{ steps.release.outputs['foo--release_created'] }}
```
- Run `npm install` to update `package-lock.json`.
- Open a pull request and squash merge it with a breaking change commit to release the package with version `1.0.0`.
