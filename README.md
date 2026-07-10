# Tideway

A CSS design system delivered as **conventions, not a library**.

Tideway is a set of [agent skills](https://agentskills.io) that teach your coding agent to write plain, consistent CSS:

- **Design tokens** — a fixed palette of colors, spacing steps, type sizes, and breakpoints. No magic numbers.
- **Strict BEM** — every class follows `block__element--modifier`, so styles never clash and never need `!important`.
- **Plain CSS output** — no build step, no runtime, no dependency. What ships is just a stylesheet.

## Skills

| Skill | Purpose |
| :---- | :------ |
| `style` | Write CSS following the Tideway tokens and BEM conventions |
| `review` | Check CSS against the tokens, semantic roles, and BEM conventions |
| `prune` | Find and remove unused CSS classes |
| `migrate` | Convert an existing project (Tailwind, plain CSS, …) onto Tideway |

Theming (dark mode) is built in — see the `style` skill's `references/theming.md`.

## Installation

Install the skills into any coding agent with the [`skills`](https://github.com/vercel-labs/skills) CLI:

```bash
npx skills add matthewp/tideway
```

Or add them as a Claude Code plugin:

```bash
/plugin marketplace add matthewp/tideway
/plugin install tideway@tideway
```

To develop against a local checkout, start Claude Code with `--plugin-dir /path/to/tideway`.

Then invoke with `/tideway:style`, or just ask your agent to style something — the skill triggers on its own when you're writing CSS.
