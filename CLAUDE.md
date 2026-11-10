# Growth & Giggles website

Marketing site for Growth & Giggles (growthandgiggles.io), an AI-marketing accelerator based in Lagos.
The site owner is non-technical. They request changes in plain English, usually while looking at a
specific page, and review the result on a preview site before publishing. Treat each request as
coming from a business owner, not a developer.

## Stack

React 18 single-page app built with Vite, styled with Tailwind CSS, routed with React Router,
deployed on Netlify. No backend in this repo; there is no TypeScript.

## Where things live

| What the owner sees | File |
|---|---|
| Top navigation bar / logo | `src/components/Header.jsx` |
| Footer | `src/components/Footer.jsx` |
| `/` Home | `src/pages/HomePage.jsx` |
| `/programs` | `src/pages/ProgramsPage.jsx` |
| `/ai-for-marketers` | `src/pages/AIForMarketersPage.jsx` |
| `/incubator` | `src/pages/IncubatorPage.jsx` |
| `/community` | `src/pages/CommunityPage.jsx` |
| `/for-organisations` | `src/pages/ForOrganisationsPage.jsx` |
| `/about` | `src/pages/AboutPage.jsx` |
| `/resources` | `src/pages/ResourcesPage.jsx` |
| `/contact` (contact form) | `src/pages/ContactPage.jsx` |
| Routes (adding/removing pages) | `src/App.jsx` |
| Shared building blocks (`SectionHeading`, `FeatureCard`, `CTAButton`, `ProgramCard`, `StatsSection`, ...) | `src/components/SharedComponents.jsx` |
| Generic UI primitives (button, card, accordion, dialog, ...) | `src/components/ui/` |
| Colours and fonts | `src/index.css` (CSS variables), `tailwind.config.js` |
| Page title / SEO tags | `<Helmet>` at the top of each page, plus `index.html` for site-wide defaults |
| Images and other static files | `public/` (referenced as `/filename.png`) |

Most text lives directly in the page files as JSX. Change the text in place.

## Design rules

- The site is always in dark mode. Primary/accent colour is amber (`--primary`, #FBBF24).
- Use the theme classes (`bg-background`, `text-foreground`, `text-muted-foreground`, `bg-primary`,
  `border-border`, ...) instead of hard-coded colours, unless the owner asks for a specific colour.
- Reuse the components in `SharedComponents.jsx` and `components/ui/` before writing new ones, so
  new sections match the rest of the site.
- Every change must look right on mobile as well as desktop (use Tailwind responsive prefixes).
- A new page needs a route in `src/App.jsx`, a `<Helmet><title>…| Growth & Giggles</title></Helmet>`,
  and, if the owner wants it in the menu, a link in `Header.jsx`.

## How to handle a request

1. Make the smallest change that does what was asked. Do not restyle, reword or "improve" anything
   the owner did not mention.
2. If the request names a page or element, change that one. Do not apply it site-wide unless asked.
3. If the request is too vague to act on safely (e.g. "make it better"), or would mean deleting a
   large part of the site, make no changes and ask a short clarifying question instead.
4. Never invent facts about the business: prices, dates, statistics, testimonials, client names,
   contact details. If the owner asks for new copy, write it from what is already on the site, and
   leave clearly marked placeholders such as `[ADD PRICE]` for anything you cannot know.
5. Run `npm run build` after editing. If it fails, fix the error. Never finish with a failing build.
6. Describe what you changed in plain, non-technical language (no file names or code terms), as if
   telling the owner what to look for on the preview site.

## Off limits

Do not edit, unless a developer (not the site owner) explicitly asks:

- `.github/`, `netlify/` (the editing system's backend), `netlify.toml`, `vite.config.js`, `package.json`, `package-lock.json`, `eslint*`
- `CLAUDE.md`
- The form submission logic in `ContactPage.jsx` (the endpoint URL, Turnstile verification, and
  request code). Changing the form's labels, text and styling is fine.
- The Google Analytics snippet in `index.html`.

Do not install packages. If a request truly needs a new package, say so and stop.
