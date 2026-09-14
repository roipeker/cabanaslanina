# Cabañas La Niña — Agent operating contract

This repository is the autonomous source of truth for the Cabañas La Niña marketing site.

## Product goal

Maintain a fast, contemporary, mobile-first hospitality website that converts discovery into direct enquiries. Prefer clarity, photography, trust, local context, SEO, and contact conversion over application-like complexity.

## Architecture

- Astro static site. No server runtime unless a concrete product requirement needs one.
- TypeScript where scripting is required.
- CSS is local and intentional; do not introduce a UI framework by default.
- JavaScript shipped to visitors should stay near zero unless an interaction clearly benefits from it.
- `main` is production. Every push to `main` must remain deployable.
- GitHub Actions builds and publishes the static site to `gh-pages`.

## Autonomous maintenance rules

- Keep dependencies minimal and current.
- Never add a database, CMS, backend, analytics vendor, ad tracker, or booking provider speculatively.
- Never publish prices, availability, promotions, policies, or contact channels that are not verified.
- Existing public business-directory data may be used as provisional factual context, but content that can materially affect a booking must be verified before treating it as authoritative.
- Preserve a clear content/presentation boundary so future campaigns can be changed without architectural work.
- Prefer direct, semantic HTML and progressive enhancement.
- Treat accessibility, performance, structured metadata, responsive behavior, and search discoverability as release requirements.

## Performance budget

- Static HTML/CSS first.
- Avoid client frameworks on marketing pages.
- Optimize and self-host production imagery once authoritative originals are available.
- Avoid render-blocking third-party scripts.
- Aim for Lighthouse scores >= 95 in Performance, Accessibility, Best Practices, and SEO on representative production pages. Scores are a guardrail, not a substitute for user experience.

## Deployment

`npm run check && npm run build` must pass before deployment. The workflow in `.github/workflows/deploy.yml` owns publication. Do not require a developer machine, Mac mini, Dev Agent, SSH session, or manual CLI command for routine deploys.

## Content status

The current preview uses a curated mix of local legacy property photographs, temporary stock imagery, and selected guest/community photography. Provenance and replacement priority live in `src/data/media.ts`; routine business content lives in `src/data/site.ts`. Published derivatives are self-hosted under `public/media/`, while working originals remain outside Git in `media-source/`.

Treat temporary imagery as a deliberate visual scaffold. Replace it slot-by-slot with authoritative La Niña originals without changing page structure, and preserve source/credit metadata while it remains in use.
