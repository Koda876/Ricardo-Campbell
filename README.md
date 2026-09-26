# Ricardo Campbell — portfolio

A personal site of four pages. Page one is entirely about Ricardo — intro,
about, education and current work, ending in a footer of links. The navigation
in the corner opens out to Projects, Resume and Contact. Static HTML and CSS, no
framework and no build step, hosted on Netlify.

The layout is a dark utility bar, a wordmark masthead, then a split hero — an
oversized serif headline on the left against a portrait panel that bleeds to the
right edge — with the rest of the page unrolling beneath it. Below 820px the
navigation collapses into a Menu button and the hero stacks with the portrait on
top.

Two widths do the work. `.wrap` is 1180px and carries the chrome, the hero, the
full-bleed bands and the project drawing. `.wrap.narrow` is 748px (`--measure`)
and carries running text. Alternating the two is what stops the page reading as
one long column.

## Rhythm

Sections alternate their ground so no two neighbours match. On About that runs
light (`About`) → cream (`.sec-cream`, Education) → deep green (`.band`,
Currently) → light (the closer). On Projects it runs cream (the header, carrying
the plan drawing) → light (the drawing and its text) → deep green (the closer).
The tints are full-bleed; the text inside stays on the 748px measure.

The left margin is broken in three places, so the page has no single rigid
vertical line: Currently puts its heading in a sticky 250px column with the
entries in a wider one beside it; both closers are centred; and the project
drawing is wider than the paragraph beneath it.

`--nav-h` is the sticky masthead's height (77px, 65px on small screens). Page
headers pad past it and `scroll-padding-top` is derived from it, so nothing
lands under the bar.

## Phones

Below 820px the navigation collapses to a Menu button, the hero stacks with the
portrait on top, and every button in a `.btn-row` goes full width — three of them
were otherwise stacking into ragged rows of different lengths.

Tap targets are padded to 44px, which is what Apple and Android both ask for.
The utility-bar links, the Menu button and the footer links were 14px to 21px
before; padding does the work, so nothing moves visually. Inline links inside
running text are left alone, since a 44px line in a paragraph would look wrong.

`.wrap` pads with `max(var(--gutter), env(safe-area-inset-*))` so content clears
the notch when a phone is held sideways, and `-webkit-text-size-adjust: 100%`
stops iOS inflating type on rotation. Below 620px the project drawing switches
from 16:9 to 4:3, because a 16:9 image is only about 180px tall on a handset.

Checked at 320, 375 and 1280px: no horizontal overflow on any page.

## Motion

All CSS transitions and transforms; there is no animation library. `site.js`
adds `.in` to anything carrying `.reveal` as it enters the viewport, using an
IntersectionObserver that unobserves each element immediately, so a reveal fires
once and never replays. Put `data-stagger` on a parent and `site.js` numbers its
children into `--i`, which the CSS multiplies by `--step` (70ms) for a delay.

The timings live as custom properties at the top of `styles.css`: `--reveal`
460ms, `--hover` 200ms, `--step` 70ms, `--ease` an ease-out curve. The hero runs
on load instead, sequenced through `nth-child` animation delays.

Two guards matter, and both are structural rather than a switch someone has to
remember:

- Every reveal and load rule sits inside `@media (prefers-reduced-motion:
  no-preference)`. A reader who asks for less motion is never served the hidden
  state at all, so they get the finished page with nothing to disable.
- Those rules are also scoped to `html.js`, a class `site.js` sets on itself. If
  the script fails to load, nothing was ever hidden.

Body text never animates on its own — paragraphs fade with the section that
contains them. Nothing moves while the page is being read.

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
| `index.html`            | Page one: hero, about, education, current work |
| `projects.html`         | Projects — a status panel until there is a write-up |
| `project-template.html` | Copy this per project for the detail page      |
| `resume.html`           | The resume PDF, sized to exactly one screen    |
| `contact.html`          | Contact links and a note for recruiters        |
| `styles.css`            | The design system, shared by every page        |
| `site.js`               | Masthead, mobile menu and the scroll reveals   |
| `assets/`               | Portrait, resume PDF, and `projects/`          |
| `assets/projects/apartment-survey.png` | The drawing, on the site's own paper |
| `assets/projects/plan-line.png`        | Line-only version, the faint ground behind the Projects header |
| `netlify.toml`          | Tells Netlify to publish the folder as it is   |

To add another page, copy `contact.html`, change the `<title>`, the `page-head`
and the body, then add a `<li>` to the nav in **all four** existing pages. The
nav and footer are duplicated per page rather than shared, which is the cost of
having no build step. Mark the current page with `aria-current="page"` — that is
what gives it the gold underline.

`resume.html` carries `class="resume-body"` on its `<body>`, which turns the page
into a full-height flex column so the PDF viewer takes whatever height is left
over and the page never scrolls.

## Adding a project

`projects.html` shows a status panel naming what is in progress. The card grid
is written directly underneath it, commented out, so nothing false is published
while there is nothing finished to link to. When the first write-up is done:

1. Copy `project-template.html` to `project-<name>.html` and fill in the five
   sections: the problem, the field sketch, the finished drawing, the errors and
   how they were resolved, and what you would do differently. Replace each
   `.todo` span and each figure stand-in with the real photograph or drawing
   (put the files in `assets/projects/`).
2. Export the same write-up as a PDF to `assets/projects/<name>.pdf` and point
   the two Download buttons at it.
3. In `projects.html`, delete the status panel and uncomment the grid, pointing
   the card at your new page.

The drawing leads: `.p-feature-shot` runs the full 1180px container at 16:9,
with the title and description on the 748px measure beneath it. Drop a newer
export over `assets/projects/apartment-survey.png` and the layout does not
change.

AutoCAD exports white linework on its dark model-space ground, which does not
belong on this palette. Both images here were made from that export by cropping
to the linework, normalising the ground away and remapping luminance onto
`--paper-3` and an ink close to `--ink-2`. A cleaner route for the next one is
to plot with `monochrome.ctb` and a Window around the plan, which gives black on
white straight out of AutoCAD.

## Filling in the content

Text I guessed at is wrapped in `<span class="todo">`, which renders with a
yellow highlight so it is impossible to miss in the browser. To find every one:

```bash
grep -rn "todo" *.html
```

Replace the text, delete the surrounding `<span class="todo">` and its `</span>`,
and the highlight goes away. Outstanding: what you want next (About), what kind
of civil engineering you are looking for (Contact), and the name and description
of the in-progress project (Projects). `project-template.html` is placeholders
throughout by design — it is a template, not a page to publish as it stands.

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

Every page carries `<meta name="robots" content="noindex">`, which keeps the site
out of search results while still letting anyone with the link open it. Delete
that line from each page when you want to be found.
