# Growth & Giggles website

React + Vite site hosted on Netlify, with a built-in editor that lets the site owner change the site
by describing changes in plain English. Claude Code makes the edits.

```
owner types a request ──▶ /api/edit ──▶ GitHub Action "Site edit" ──▶ Claude edits, build verified
                                                                       ──▶ commit to `preview`
                                         Netlify deploys `preview` ──▶ preview--growthandgiggles.netlify.app
owner clicks Publish  ──▶ /api/publish ──▶ `main` updated ──▶ Netlify deploys the live site
```

## Branches

- `main` is the live site. Only the CMS writes to it (Publish / Undo), or a developer (see below).
- `preview` holds edits waiting to be published. Each Claude edit is one commit.

## Pieces

| Path | What it is |
|---|---|
| `src/` | The website |
| `CLAUDE.md` | Instructions and guardrails Claude follows on every edit |
| `.github/workflows/site-edit.yml` | Runs Claude on `preview`, checks protected files, verifies the build, commits |
| `netlify/functions/` | CMS backend: `login`, `logout`, `session`, `edit`, `status`, `changes`, `publish`, `discard`, `undo` (served at `/api/<name>`) |
| `netlify/lib/` | Shared auth (signed session cookie), GitHub API and HTTP helpers |

## Configuration

GitHub repo secret:

- `CLAUDE_CODE_OAUTH_TOKEN`: from `claude setup-token`, run by the site owner with their Claude account.

Netlify environment variables:

| Name | Value |
|---|---|
| `ADMIN_PASSWORD` | The owner's CMS password |
| `SESSION_SECRET` | Random string, at least 32 characters (`openssl rand -base64 48`) |
| `CMS_GITHUB_TOKEN` | Fine-grained GitHub token for this repo only: Actions, Contents (read/write), Checks (read) |
| `GITHUB_REPO` | `nonsoTS/growthandgiggles` |
| `PREVIEW_URL` | `https://preview--growthandgiggles.netlify.app` |

## Developer changes

Commit to `main`, then bring `preview` up to date so the owner's next Publish includes your change:

```sh
git push origin main
git checkout preview && git pull && git merge main && git push origin preview
```

If `preview` falls behind `main`, Publish refuses to run rather than overwrite your work.

## Local development

```sh
npm install
npm run dev     # site only, on http://localhost:3000
npm run build
```
