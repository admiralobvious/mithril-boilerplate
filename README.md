# Mithril Boilerplate
[![dependencies Status](https://david-dm.org/admiralobvious/mithril-boilerplate/status.svg)](https://david-dm.org/admiralobvious/mithril-boilerplate)
[![devDependencies Status](https://david-dm.org/admiralobvious/mithril-boilerplate/dev-status.svg)](https://david-dm.org/admiralobvious/mithril-boilerplate?type=dev)

Mithril boilerplate is built using Babel 7, [Construct-ui](https://vrimar.github.io/construct-ui/#/introduction/getting-started), ES6, ESLint, Sass/SCSS and webpack 4 + HMR.

If you are looking for a boilerplate without a UI library check out [mithril-simple-app](https://github.com/admiralobvious/mithril-simple-app).

### Using

Initialize:
```shell script
npm install
```

Start development server (port 3000):
```shell script
npm run dev
```

Build for production:
```shell script
npm run build
```

Analyze bundle:
```shell script
npm run build:analyze
```

Build docker image:
```shell script
docker build --build-arg ENV_NAME=production -t mithril-boilerplate .
```
