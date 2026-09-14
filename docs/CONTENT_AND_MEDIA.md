# Content and media workflow

The public site is intentionally file-driven. Routine updates should not require changing page markup.

## Source of truth

- `src/data/site.ts`: contact details, Google rating/count, breakfast, featured reviews.
- `src/data/media.ts`: every homepage image, provenance, credit and replacement priority.
- `src/data/guide.ts`: Mercedes/local editorial stories.
- `src/styles/global.css`: shared visual tokens.
- `src/styles/home.css`: the consolidated homepage presentation.

Do not introduce a database or CMS until editing these files becomes a real operational constraint.

## Media classes

- `owned`: authoritative La Niña photography.
- `guest`: community/guest imagery selected for the current site.
- `stock`: temporary atmospheric/editorial imagery.
- `legacy`: older property images retained until better originals exist.
Each asset has a stable ID. Replace the path/source behind that ID rather than coupling layout code to a filename.

`replacePriority` is the future photo-shoot backlog:
- `high`: replace as soon as a strong La Niña original exists.
- `medium`: replacement materially improves authenticity.
- `low`: atmospheric stock may remain until a clearly better real image exists.

## Processing

Untouched working originals live under `media-source/` and are intentionally git-ignored.
Published derivatives live under `public/media/`.

Run:

```bash
npm run media:process
```

The processor normalizes size, contrast, saturation and sharpening without changing the factual content of the photograph.
## Update loop

For a routine request such as “feature this new review”, “use this photo”, or “change breakfast hours”:

1. Update `site.ts` or `media.ts`.
2. Put any new raw image in the corresponding `media-source/<kind>/` folder.
3. Run `npm run media:process` when a new local image was added.
4. Run `npm run check && npm run build`.
5. Review the homepage at desktop and phone widths.
6. Commit only after the release gate is green.

The Google rating/count is currently a manual refresh field. It should not become an API dependency until automated freshness is worth the operational cost.

## Visual direction

The palette is derived from the current curated imagery: dark earth/ink, warm linen, olive, terracotta, amber and a restrained water blue.
Photography should carry the color. UI surfaces should remain quiet.
