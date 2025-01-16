# release-please-monorepo-example

## Adding a new package

> [!NOTE]  
> This description guides you how to add a new package called `foo` to the monorepo.

- Add new package to `.release-please-manifest.json`.
```
{
  ...,
  "foo": "0.1.0"
}
```
- Add new package to `release-please-config.json`.
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
- Add new package `package.json` workspaces.
```
{
  ...,
  "workspaces": [
     ...,
     "foo"
  ]
}
```
- Update `grep` command to find changed packages in GitHub workflows.
```
# before
grep -E '^(...)/'

# after
grep -E '^(...|foo)/'
```
- Add new step to `release-please` GitHub workflow.
```
...
      - run: npm publish --workspace foo
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        if: ${{ steps.release.outputs['foo--release_created'] }}
```
- Run `npm install` to update `package-lock.json`.
- Open a PR and squash merge it with a breaking change commit. This will ensure the new package is released with version `1.0.0`.
