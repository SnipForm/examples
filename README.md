# SnipForm examples

These SnipForm examples have been crafted using Tailwind CSS and Astro.

Don't worry if you are new to Astro, we just use it for the convenience of decluttering the markup and serving a localhost MPA. You basically just need to know HTML.

Before you get started, make sure you have a key for your forms.

You can get one for free at [https://snipform.io](https://snipform.io). There are no usage limits 😎

Then replace key="YOUR_KEY" in the snip-form open tag

## Getting started

```bash
git clone https://github.com/SnipForm/examples.git MY_PROJECT
cd MY_PROJECT
rm -rf .git
npm install
npm run dev

```

## Astro Structure

Inside of your Astro project, you can edit the forms in:

```
/
├── src/
│   ├── forms/
│   │   └── AdvancedValidation.astro
│   │   └── Basics.astro
│   │   └── CustomResult.astro
│   │   └── ErrorValidStates.astro
│   │   └── FullExample.astro
│   │   └── LoadingSubmitState.astro
│   │   └── Shorthand.astro
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |
