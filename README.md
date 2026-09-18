# Ricardo Campbell — portfolio

A personal portfolio site: projects, about, experience, resume, and contact.
Static HTML and CSS, no framework and no build step, hosted on Netlify.

The layout is a fixed left rail — portrait, name, title, navigation, resume
button and social links — against a right column that scrolls through the work.
The rail's navigation highlights itself as you scroll, driven by an
IntersectionObserver at the bottom of `index.html`. Below 960px the rail unsticks
into a page header and its navigation becomes a sticky horizontal bar.

The type pairing follows [olivercrocco.com](https://olivercrocco.com), used with
Dr. Crocco's permission. All content here is original.

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

The three that remain are: what you want next (in About), what kind of civil
engineering you are looking for (in Contact), and your GitHub username.

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
