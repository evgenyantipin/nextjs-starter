This is a fully working example of Next.js >= 15 running on Preact instead of React.

This reduces the base JavaScript weight of pages to ~22kB.

### 🚀Blazing fast Next.js starter app with the following:

![Screenshot](pagespeed-insights1.png)

## [You can see a live demo](https://nextjs-starter-gamma.vercel.app/)
- [x] Next.js >= 15.2.4 + Preact >= 10.26.4 = 21kB
- [x] Fastify server dev/prod
- [x] [Preact optimization enabled](https://github.com/developit/nextjs-preact-demo) reduces the base JavaScript weight of pages to 21kB
- [x] State management with [redux](https://github.com/reactjs/redux)
- [x] [wretch](https://github.com/elbywan/wretch) A tiny wrapper built around fetch with an intuitive syntax
- [x] Prettier task on pre-commit with husky
## Getting started
```
git clone git@github.com:evgenyantipin/nextjs-starter.git my-project
cd my-project
yarn
yarn start
```
