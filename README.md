# Mithril Boilerplate
[![dependencies Status](https://david-dm.org/alexferl/mithril-boilerplate/status.svg)](https://david-dm.org/alexferl/mithril-boilerplate)
[![devDependencies Status](https://david-dm.org/alexferl/mithril-boilerplate/dev-status.svg)](https://david-dm.org/alexferl/mithril-boilerplate?type=dev)

Mithril boilerplate is built using Babel 7, [Construct-ui](https://vrimar.github.io/construct-ui/#/introduction/getting-started), ES6, ESLint, Sass/SCSS and webpack 4 + HMR.

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
