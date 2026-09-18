# Ricardo Campbell — portfolio

A personal portfolio site: projects, about, resume, and contact. Static HTML and
CSS, no framework and no build step, hosted on Netlify.

The layout and type pairing follow [olivercrocco.com](https://olivercrocco.com),
used with Dr. Crocco's permission — the structure, not his words or images. All
content here is original.

The colour is its own: Jamaican green (`--green`) and gold (`--gold`), desert
parchment for the page, and the lapis-teal of Gulf tilework (`--lapis`), for
someone from Manchester by way of the Middle East. The dark band is tiled with a
girih eight-point star. Every colour is a custom property at the top of
`styles.css`, so the whole site re-skins from those few lines.

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

The five that remain are: what the Jamaica job taught you, which country you
were raised in and what those years gave you, what kind of civil engineering you
want, and your GitHub username.

The headshot (`assets/portrait.jpg`) and the resume
(`assets/ricardo-campbell-resume.pdf`) are already in place and wired up.

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
