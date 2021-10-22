# bdrec

## What

A simple PWA(Progressive Web App) to log your body temperature (and eventually other vitals)!

Check out the PWA at [bd.kekvrose.me](https://bd.kekvrose.me)!
## Why

Didn't find a good app that didn't have ads on the Android Play Store.

## How


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It's available at [bd.kekvrose.me](https://bd.kekvrose.me) and uses IndexedDB to store data and localStorage for preferences.

The PWA allows for it to be installed on most mobile devices and not consume insane amounts of storage and network.

Once loaded, the pages are available offline and because it uses client-side storage, no data is shared anywhere and no internet access is required.

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Exporting

The app is deployed onto Github Pages (No APIs needed!) with:
```sh
npm run deploy
``` 

This does a few things
1. Lints the project
2. Builds the project
3. Exports the project as a static HTML5 application
4. Publishes the exported static webpage onto Github Pages.
### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/).
