# xkcd-challenge

# Preview Frontend

![image](https://user-images.githubusercontent.com/57992471/158006345-e3b06b36-a970-40fd-92a3-e3b149e2f253.png)

![image](https://user-images.githubusercontent.com/57992471/158006633-ad7fb77c-4c30-4767-8243-6962e23c6f23.png)
![image](https://user-images.githubusercontent.com/57992471/158006644-c35c80e6-a2e7-4523-89a3-833caa97b094.png)

## Recomendations

Extension for Chrome CORS block, it's necessary to avoid problems with new chrome updates

[Extension for block Chrome cors](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino/related?hl=es)

### Tecnologías usadas

`Vue js`, `Vuetify`, `Jest`, `SonarQube`, `Axios`, `Vuex`, `Api xkcd`

Link de la [Api xkcd](https://xkcd.com/)

Para la instalación de SonarQube se puede realizar desde la imagen de docker
[SonarQube](https://hub.docker.com/_/sonarqube?tab=tags)
y seguir los pasos del siguiente [link](https://docs.sonarqube.org/latest/setup/get-started-2-minutes/)

para la configuración sólo se debe crear un archivo .env con una variable de entorno llamada

```js
TOKEN_SONAR_QUBE = TokenGeneradoPorSonar
```

dónde se debe editar "TokenGeneradoPorSonar"

```js
    serverUrl: 'http://localhost:9000/',
    token: 'tokenGeneradoPorSonar',

```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# run test of project
$ npm run test

#SonarQube
$ npm run sonar

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
