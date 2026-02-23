# Benny Frontend: File Structure + State Management

Single reference that merges the guidance from `docs/FILE_STRUCTURE.md`, `docs/state-management.md`, and `docs/redux-style-guide.md`. Use this as the canonical map when adding routes, components, or Redux state.

## Quick Repo Map

| Path | Purpose |
| --- | --- |
| `package.json` | Scripts and dependencies. |
| `tsconfig*.json` | TypeScript configuration for app variants. |
| `next.config.mjs` | Next.js runtime/build config. |
| `postcss.config.mjs`, `eslint.config.js` | Styling and lint tooling. |
| `public/` | Static assets (favicons, media, mock data, fonts). |
| `app/` | App Router source in *this repo* (routes, layouts, global styles). |
| `docs/` | Internal docs (architecture, style guides, plans). This file is the combined reference. |

## Repo note (important)

This document includes a **target** structure that references `src/` (common in larger Next.js apps). However, **this repo currently uses `app/` at the project root**. When implementing features, follow the actual repo layout unless the user explicitly asks to migrate to `src/`.

## `src/` Layout

| Path | Purpose |
| --- | --- |
| `src/app/` | App Router entry (layouts, route segments, API handlers, global styles). |
| `src/components/` | Reusable UI primitives and brand assets. |
| `src/hooks/` | Custom React hooks (auth state, responsive helpers, pagination). |
| `src/lib/` | Client utilities and domain helpers (auth clients, formatters, RBAC, pagination). |
| `src/models/` | Domain models and DTO typings. |
| `src/redux/` | Redux Toolkit store, providers, slices, middleware, and selectors. |
| `src/schemas/` | Zod schemas and validation contracts. |
| `src/server/` | Server actions and service wrappers. |
| `src/types/` | Cross-cutting TypeScript types. |
| `src/auth.ts`, `src/middleware.ts` | Auth helpers and middleware. |

## Routing, Layouts, and Pages

- Layouts persist; pages swap. Shared chrome (sidebar, nav, global providers) belongs in layouts, not screens.
- Route groups: `(auth)` for public auth flows, `(protected)` for authenticated workspace.
- Keep `page.tsx` thin (5-15 lines). Each page imports one orchestrator component from `_components/{Feature}Screen.tsx`.

## UI Components (shadcn default)

- **We use shadcn UI**: our default UI primitives are shadcn components located in `components/ui`.
- **Default to shadcn components**: use components from `components/ui` (shadcn) for frontend work unless the user explicitly requests a custom component.
- **Prefer composition**: compose/wrap shadcn primitives before creating new bespoke UI.
- **Keep consistency**: reuse variants/tokens/patterns already established in `components/ui`.

```
src/app/
  layout.tsx              // root layout (HTML, providers)
  (auth)/
    layout.tsx            // auth-only chrome
  (protected)/
    layout.tsx            // app chrome (sidebar, nav)
    [feature]/
      page.tsx            // thin entry
      _components/        // orchestrator + building blocks
      _sections/          // vertical slices
      _hooks/             // feature-only hooks
      _lib/               // feature utilities
      _redux/             // feature slice + selectors
```

### Feature Folder Contract

- `_components/` must include the main `{Feature}Screen.tsx` orchestrator.
- `_sections/` holds vertical slices (header, list, sidebar, footer, etc.).
- `_redux/` houses feature-local Redux logic; keep selectors alongside the slice.
- Optional `_hooks/`, `_lib/`, `_sections/_providers/` as the feature demands.
- Rule of thumb: simple pages use `page.tsx` + `{Feature}Screen.tsx`; complex pages add `_sections/` and `_redux/`.

## Redux Architecture (Global + Route-Local)

**Responsibilities**
- `src/redux/` holds shared slices (deals, files, reports, workflows, notifications, ui), store config, typed hooks, middleware, and future RTK Query services.
- Route-local reducers live in each route's `_redux/` folder but are registered in the global store.

**Store Wiring**
- `src/redux/store.ts`: `configureStore`, register reducers (global and route-local), export `AppDispatch`, `RootState`, `AppStore`.
- `src/redux/hooks.ts`: `useAppDispatch`, `useAppSelector`.
- Provide the store at the highest level (`src/app/layout.tsx`) so all contexts and providers can consume Redux.

**Directory Skeleton**
```
src/redux/
  store.ts
  hooks.ts
  middleware/
    logger.ts
    persist.ts         // loadPersistedState, persistState, persistMiddleware
    metrics.ts         // thunk timing and retries
    optimistic.ts      // optimistic register/commit/revert helpers
  services/            // RTK Query or async helpers as backends arrive
    <feature>Api.ts
  features/
    <feature-a>/
      slice.ts
      selectors.ts
      thunks.ts       // optional
      types.ts        // optional
    <feature-b>/
      slice.ts
      selectors.ts
    <feature-ui>/
      slice.ts
      selectors.ts
```

**Feature-Local `_redux/` Pattern**
- One slice file per feature folder (`_redux/feature-slice.ts`) plus `feature-selectors.ts`.
- Import the reducer into `src/redux/store.ts`; ownership stays with the route folder.
- Add a short README near complex slices to document hydration and public APIs.

**Conventions (from Redux Style Guide)**
- Use Redux Toolkit with Immer; reducers stay pure and immutable.
- Name slices after data, not UI (e.g., `deals`, `files`, `ui`).
- Prefer event-like action names (`deals/bootstrapSucceeded`) generated by `createSlice`.
- Keep state serializable; avoid storing functions, class instances, Maps/Sets in reducers.
- Derive data via memoized selectors; connect components at fine granularity.
- Use typed thunks/services with `AppDispatch` and `RootState`.
- Enable Redux DevTools and middleware checks in non-production builds.

## Async, Persistence, and Integration

- Short term: async thunks can wrap existing mock helpers; long term: move to RTK Query services.
- HTTP should flow through shared clients in `src/lib/api/` (retry, abort support).
- Persistence: `persistMiddleware` hydrates via `loadPersistedState()` and writes whitelisted slices (filters, onboarding, preferences). Keep UI-only toggles ephemeral unless multiple areas read them.
- Optimistic updates: use `optimistic.ts` helpers around create/update/delete flows; document where optimistic actions should live.
- Server components can dispatch during render and pass `initialReduxState` into client components; keep the provider singleton to avoid per-request stores.

## Checklist When Adding Features

- [ ] Follow the `page.tsx` + `{Feature}Screen.tsx` pattern; keep sidebar/nav in layouts.
- [ ] Place feature slices/selectors under the route's `_redux/` folder; register reducers in `src/redux/store.ts`.
- [ ] Expose typed selectors; keep UI lean and declarative.
- [ ] Use shared middleware (`persist`, `metrics`, `optimistic`) where applicable; extend whitelists intentionally.
- [ ] Add or update tests under `src/__tests__/redux/` when changing reducers/middleware.
- [ ] Update this doc if the structure or Redux responsibilities change.

## Embedded Plan Details (keep in sync with docs/plan/*)

### Workspace Redux Implementation
- Scope: treat each protected route group as a feature with its own `_redux/` folder and co-locate slices/selectors beside UI. Core layouts and providers should depend on these co-located slices, not central feature lists.
- Status pattern to mirror: foundations (store + hooks + docs ready), dashboards/landing flows migrated first, communication/task surfaces next, knowledge/automation surfaces next, settings/onboarding last. Track progress with checkboxes + mock vs API notes.

### API Contracts
- Conventions: base `/api` proxy, bearer auth from middleware, responses include cursors and timestamps, errors shaped `{ error: { code, message, details? } }`.
- Feature expectations: each domain (detail views, lists, editors, uploads, async jobs) exposes CRUD + status endpoints; long-running work should stream status (e.g., SSE/log endpoints). Use request params to scope/segment payloads.
- Thunks: every slice exposes `status`/`error`; hydration thunks named `fetch<Feature>`; pagination via cursors; mock loaders should be dev-only.

### Deployment Readiness
- Success criteria: no mock data in production bundles; slices expose `{status, error}`; retries/optimistic/stale detection/persistence in place; observability wired; release rigor (tests, flags, runbooks).
- Workstreams to keep: production data (swap mocks for thunks), resilience/persistence, observability, and release/QA (tests + flags + CI gates + runbooks).

### Resilience & Persistence
- Retry/backoff: shared HTTP client with retries + AbortController; GETs can retry with backoff, mutations are conservative.
- Optimistic updates: helpers + middleware manage register/commit/revert flows for creates/updates/deletes; rollback on reject.
- Persistence: middleware with a whitelist for cross-session state (filters, onboarding/progress, preferences); keep UI-only toggles ephemeral.
- Stale detection: `lastHydratedAt` + `ttlMs` per slice; `scheduleSliceRefresh(key, ttlMs, thunk)` helper; document TTLs in each `_redux/README.md`.
- Failure docs: each slice README should include failure modes, UI messaging, retry/rollback expectations; maintain a central audit if helpful.

### Stale Data + Background Refresh
- Pattern: store `lastHydratedAt`, expose `select<Feature>NeedsRefresh`, call `scheduleSliceRefresh` on mount when stale, and justify TTLs in docs.
- Execution: unique refresh keys per scope (include route/entity identifiers), allow mock hydrators during dev but swap to API thunks for production.

### Code-Split Redux (not yet present)
- If code-splitting reducers is needed, add a plan for lazy-loaded reducers, dynamic injection, and bundle guardrails.

## References

- Source docs: docs/FILE_STRUCTURE.md, docs/state-management.md, docs/redux-style-guide.md.
- Plans: docs/workspace-redux-plan.md, docs/deal-redux-plan.md, docs/deal-state-audit.md for phased rollouts.
