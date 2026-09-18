# Ricardo Campbell — portfolio

A personal site of four pages. Page one is entirely about Ricardo — intro,
about, education and current work, ending in a footer of links. The navigation
in the corner opens out to Projects, Resume and Contact. Static HTML and CSS, no
framework and no build step, hosted on Netlify.

The layout is a dark utility bar, a wordmark masthead, then a split hero — an
oversized serif headline on the left against a portrait panel that bleeds to the
right edge — with the rest of the page unrolling beneath it. The masthead
navigation highlights itself as you scroll, driven by an IntersectionObserver at
the bottom of `index.html`. Below 820px the navigation collapses into a Menu
button and the hero stacks with the portrait on top.

The type pairing follows [olivercrocco.com](https://olivercrocco.com), used with
Dr. Crocco's permission. All content here is original.

The colour is its own: Jamaican green (`--green`) and gold (`--gold`), desert
parchment for the page, and the lapis-teal of Gulf tilework (`--lapis`). A girih
eight-point star tiles both the hero's portrait panel and the dark Approach band.
Every colour is a custom property at the top of `styles.css`, so the whole site
re-skins from those few lines.

## Files

| Path            | What it is                                              |
|-----------------|---------------------------------------------------------|
| `index.html`    | Page one: hero, about, education, current work          |
| `projects.html` | Projects — an empty state until there is something to show |
| `resume.html`   | The resume PDF, sized to exactly one screen             |
| `contact.html`  | Contact links and a note for recruiters                 |
| `styles.css`    | The design system, shared by all four pages             |
| `assets/`       | Portrait and resume PDF                                 |
| `netlify.toml`  | Tells Netlify to publish the folder as it is            |

To add another page, copy `contact.html`, change the `<title>`, the `page-head`
and the body, then add a `<li>` to the nav in **all four** existing pages. The
nav and footer are duplicated per page rather than shared, which is the cost of
having no build step. Mark the current page with `aria-current="page"` — that is
what gives it the gold underline.

`resume.html` carries `class="resume-body"` on its `<body>`, which turns the page
into a full-height flex column so the PDF viewer takes whatever height is left
over and the page never scrolls.

## Adding projects

`projects.html` shows an empty state. When there is something to put there,
replace the `<div class="empty">` block with a grid of cards:

```html
<div class="cards">
  <a class="card" href="https://github.com/Koda876/...">
    <div class="tag">Live · 2027</div>
    <h3>Project name</h3>
    <p>What it does, in a sentence or two.</p>
    <p class="meta">tools · you · used</p>
  </a>
</div>
```

The `.cards`, `.card`, `.tag` and `.meta` styles are already in `styles.css`,
and the first three cards get a green, gold and lapis bar across the top
automatically.

## Filling in the content

Text I guessed at is wrapped in `<span class="todo">`, which renders with a
yellow highlight so it is impossible to miss in the browser. To find every one:

```bash
grep -n "todo" index.html
```

Replace the text, delete the surrounding `<span class="todo">` and its `</span>`,
and the highlight goes away. Two remain: what you want next (in About), and what
kind of civil engineering you are looking for (in Contact).

The headshot (`assets/portrait.jpg`) and the resume
(`assets/ricardo-campbell-resume.pdf`) are in place and wired up.

## Running it locally

From this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`. Use the server rather than double-clicking
`index.html`, since browsers restrict pages opened straight from disk.

## Publishing

One-time setup:

1. Create a repository named `portfolio` under github.com/Koda876. Do not let
   GitHub add a README, a .gitignore or a licence — this folder already has them.
2. From this folder:

   ```bash
   git remote add origin https://github.com/Koda876/portfolio.git
   git push -u origin main
   ```

3. At app.netlify.com, sign in with GitHub, then **Add new site → Import an
   existing project → GitHub → portfolio**. Leave the build command empty;
   `netlify.toml` already sets the publish directory. Deploy.

After that, every `git push` to `main` is live in about a minute.

Both pages carry `<meta name="robots" content="noindex">`, which keeps the site
out of search results while still letting anyone with the link open it. Delete
that line from `index.html` and `projects.html` when you want to be found.
