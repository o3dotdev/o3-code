# 0003 Statsig Gate Overrides

## Status

Active

## Intent

O3 Code should have a narrow local mechanism for overriding selected boolean Statsig feature gates while preserving upstream evaluation for every gate by default. This Patch only installs the shared override plumbing; it does not choose which product feature gates are enabled.

## Files

- [SOP](./SOP.md)
- [Evidence](./EVIDENCE.md)
