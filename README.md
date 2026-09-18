# Ricardo Campbell — portfolio

A personal portfolio site: projects, about, resume, and contact. Static HTML and
CSS, no framework and no build step, hosted on Netlify.

The design follows [olivercrocco.com](https://olivercrocco.com), used with Dr.
Crocco's permission — the layout language and type pairing, not his words or
images. All content here is original.

## Layout

| Path          | What it is                                        |
|---------------|---------------------------------------------------|
| `index.html`  | The homepage: hero, featured project, grid, about, contact |
| `styles.css`  | The whole design system. Every page shares it     |
| `assets/`     | Photos, the resume PDF, project screenshots       |
| `netlify.toml`| Tells Netlify to publish the folder as it is      |

## Filling in the content

Text I guessed at is wrapped in `<span class="todo">`, which renders with a
yellow highlight so it is impossible to miss in the browser. To find every one:

```bash
grep -n "todo" index.html
```

Replace the text, delete the surrounding `<span class="todo">` and its `</span>`,
and the highlight goes away.

Two things worth doing early:

- **Portrait.** Save a photo as `assets/portrait.jpg`, then in `index.html`
  replace the `<div class="portrait portrait-ph">` placeholder with the `<img>`
  tag in the comment directly above it.
- **Resume.** Save it as `assets/resume.pdf` and point the `/resume` links at it.

## Running it locally

From this folder:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`. Use the server rather than double-clicking
`index.html`, since browsers restrict pages opened straight from disk.

## Publishing

The site is currently `<meta name="robots" content="noindex">`, which keeps it
out of search engines while still letting anyone with the link open it. Remove
that line from `index.html` when you want to be found.
