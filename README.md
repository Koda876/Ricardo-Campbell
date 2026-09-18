# Ricardo Campbell — portfolio

A personal site: about, approach, experience and contact. Static HTML and CSS,
no framework and no build step, hosted on Netlify.

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

| Path          | What it is                                   |
|---------------|----------------------------------------------|
| `index.html`  | The whole page, plus the small scripts at the bottom |
| `styles.css`  | The design system. Any future page shares it |
| `assets/`     | Portrait and resume PDF                      |
| `netlify.toml`| Tells Netlify to publish the folder as it is |

## Adding projects

There is deliberately no projects section yet. When there is something of your
own to show, add a section between Approach and Experience:

```html
<section id="projects">
  <div class="wrap">
    <p class="sec-label">Projects</p>
    <h2>Things I've built</h2>
    <div class="cards">
      <a class="card" href="...">
        <div class="tag">Live · 2027</div>
        <h3>Project name</h3>
        <p>What it does, in a sentence or two.</p>
        <p class="meta">tools · you · used</p>
      </a>
    </div>
  </div>
</section>
```

Then add `<li><a href="#projects">Projects</a></li>` to the masthead nav — the
scroll highlighting picks it up automatically, with no script change. The
`.cards` and `.card` styles came out of `styles.css` along with the section; they
can come back from git history with `git show eae01cc:styles.css`.

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

The site is currently `<meta name="robots" content="noindex">`, which keeps it
out of search engines while still letting anyone with the link open it. Remove
that line from `index.html` when you want to be found.
