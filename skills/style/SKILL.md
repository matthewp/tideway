---
name: style
description: Write CSS using the Tideway design system — fixed design tokens (colors, spacing, typography, breakpoints) and strict BEM class naming, in plain CSS with no framework. Use whenever writing or editing CSS in a project that uses Tideway, styling a new component or page, choosing colors/spacing/font sizes, or when the user mentions Tideway, design tokens, or BEM.
---

# Tideway: style

Tideway is a design system delivered as a convention: fixed design tokens plus strict BEM, written as plain CSS. There is no build step, library, or runtime — consistency comes entirely from following these rules, so follow them exactly.

## Core rules

1. **Every value comes from a token.** Colors, spacing, font sizes, line heights, radii, shadows, and breakpoints are all defined in `references/tokens.md`. Read it before writing any CSS. Never invent an off-scale value (`margin: 13px`, `color: #4a7fd6`) — if a design calls for something between two tokens, use the nearer token. The constraint is the point: a fixed scale is what makes independently-written pieces of UI look like one system.

2. **Reference tokens as custom properties — don't inline their values.** Declare the tokens you use in the project's `tokens.css` and write `padding: var(--space-4)`, not `padding: 1rem`. An inlined value satisfies the scale today but severs the link to the token, so it can't be found, audited, or re-themed later.

3. **Reference color through semantic roles, not the palette directly.** The palette (`--color-blue-600`) is raw vocabulary — a primitive layer. Components should read color from a small set of semantic role tokens (`--surface`, `--text`, `--border`, `--accent`, …) that map to palette values, never from a `--color-*` token directly. This indirection is the whole game for theming: a project switches to dark mode or rebrands by redefining the role layer alone, without touching a single component — and because the switch lives in the token layer, it never leaks into your selectors. Non-color tokens (spacing, radius, type, breakpoints) don't vary by theme, so use those directly. See `references/theming.md` for the role set and how to wire dark mode.

4. **Every class is strict BEM** — `block__element--modifier`, no exceptions. One block per component, with all of its CSS kept together. Elements stay flat even when the DOM nests (`card__title`, never `card__header__title`). A modifier never appears alone in markup; it accompanies its base class (`class="card card--featured"`) and declares only what differs. Blocks never style other blocks' internals — if a nested component needs contextual adjustment, add an element class of the outer block alongside it, carrying layout only.

5. **Selectors stay flat.** One class per selector, specificity (0,1,0). No IDs, no styling bare element tags (outside a reset), no chaining classes to win specificity, no `!important` — ever. If you feel the need to chain or escalate, you need a modifier instead.

## Workflow

When asked to style something:

1. Read `references/tokens.md` if you haven't in this session.
2. Check whether the project already has Tideway CSS (look for a tokens stylesheet or BEM-named classes). Match existing block names and file organization.
3. If this is the project's first Tideway CSS, create a `tokens.css` declaring the custom properties for the tokens you use, and import it first.
4. Write component styles as one block per component.
5. Media queries use the breakpoint tokens, mobile-first (`min-width`).

## Example

```css
.card {
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}

.card__title {
  font-size: var(--text-lg);
  font-weight: var(--font-semibold);
}

.card--featured {
  box-shadow: var(--shadow-lg);
}
```

```html
<article class="card card--featured">
  <h2 class="card__title">Tideway</h2>
</article>
```

## JavaScript

Tideway is plain CSS and never requires JavaScript to work. Some enhancements — a theme toggle that remembers the user's choice — need a little JS; the skill ships these as optional scripts in `scripts/`. Offer them, but add one only with the user's explicit go-ahead, and never let core styling depend on it. Auto dark mode (following the OS) is pure CSS and needs no script at all.

## Out of scope

Reviewing existing CSS against these conventions is the `review` skill; finding unused classes is the `prune` skill.
