# Provenance Records

Every binary asset that enters `local-assets/original/` must be recorded here
so the release package can be reproduced and its rights documented.

For each asset group, record:

- Source repository / URL and the exact commit or file ID.
- Original file name, byte size, and SHA-256.
- Download date and who ran the download.
- Rights attribution and whether the asset may be redistributed in the
  release package.
- Processing pipeline (conversion, upscaling) and the tool versions used.

The pinned checksum list lives in `research/checksums.sha256` and is generated
with `npm run generate:checksums` after the originals are placed in
`local-assets/original/`.

See docs/ASSET-PIPELINE.md for the full workflow.

## Dialogue mapping

The Japanese, Korean, and English memorial-lobby subtitle lines in
`src/config.ts` are mapped from the official dialogue table for Haruka (Dress).
The project does not use a cross-locale or legacy fallback source for these
lines.
