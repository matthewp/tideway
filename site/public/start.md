# Set up Tideway

You're helping set up **Tideway** in this project. Tideway is a CSS design system delivered as an agent skill: it gives you a fixed set of design tokens (colors, spacing, typography, breakpoints) and a strict BEM naming convention, and you write plain CSS that follows them. There is no library, build step, or runtime — the consistency comes from following the rules.

Work through the steps below, then confirm with the user before styling anything real.

## 1. Add the skill

Install Tideway so the `style` skill is available in this project. Use whichever fits the agent you're running in.

Any coding agent — the generic skills CLI:

```
npx skills add matthewp/tideway
```

Claude Code — the plugin marketplace:

```
/plugin marketplace add matthewp/tideway
/plugin install tideway@tideway
```

To develop against a local checkout instead, start Claude Code with `--plugin-dir /path/to/tideway`.

Once installed, the `style` skill loads automatically whenever you write or edit CSS. Its full rules and the complete token tables live in the skill — read them before writing styles.

## 2. Create the token stylesheet

Add a `tokens.css` that declares the Tideway custom properties this project uses, and import it before any other stylesheet. Start with only the tokens you need; add more as the design grows. Every color, spacing, font size, radius, and shadow in the project comes from these variables.

## 3. Style the Tideway way

From now on, whenever you write CSS in this project:

- **Use tokens for every value**, referenced as `var(--…)` — never inline the raw value, and never use an off-scale number.
- **Name every class in strict BEM**: `block__element--modifier`, one block per component, elements flat even when the DOM nests.
- **Keep selectors flat**: one class per selector, no IDs, no bare element selectors outside the reset, no `!important`.

## Next

Tell the user Tideway is ready, and ask what they'd like to build first. Style it following the rules above.
