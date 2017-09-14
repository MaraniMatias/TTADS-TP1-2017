# Trabajo Practico para TTADS 2017

__Frontend con nuevas tecnología para [The Movie DB](www.themoviedb.org)__

``` javascript
var tp = {
  anio: 2017,
  integrantes : [{
    nombre : "Andrés de la Grana",
    legajo : 41034
  }, {
    nombre : "Arian Valles",
    legajo : 41556
  }, {
    nombre : "Marani Matias Ezequiel",
    legajo : 39710
  }]
}
console.log(tp.integrantes);
```

## Introducción.

bla bla bla :D

## Planificación.

Acordamos dedicar un mínimo de 5 hs semanales.

Planeamos tener la aplicación andado para 27 de Septiembre 2017.

### Reuniones de avance

|Fecha|Tareas completadas desde la última reunión| Blockers |Tareas a realizar hasta la próxima reunión|
|-----|------------------------------------------|----------|------------------------------------------|
|09-08| leer documentación sobre las tecnologías, base del proyecto, repositorio git || unir vuex con la base| listado de las ultimas películas con css mínimos |
|17-08|Todo los integrantes del grupo conocen la base y como trabajar en el proyecto||realizar componentes en movie para mostrar la info de la película.|

## Documentación.

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080 for dev
npm start

# build for production with minification
npm run build
```

### Tests

``` bash
# global
npm isntall -g karma

# run unit tests with code coverage
npm run unit

# run e2e tests
npm start & npm test

# or en two terminal
npm start
npm test
```

### Entregables Online

Documentación Online por medio de este readme en github.io

[App Online](https://maranimatias.github.io/tp-2017/online-app/)

``` bash
# run build app in online-app and using on github page.
npm run build
```

## Material adicional.

Generales.
* [garkdown](https://guides.github.com/features/mastering-markdown/)
* [server tmdb](https://github.com/utnfrrottads/tmdb-server) [API](https://www.themoviedb.org/documentation/api/discover) **API Key** _Cuenta -> configuracion -> api -> crear -> developer -> aceptar -> llenar from -> copiar la key_ [api doc](https://developers.themoviedb.org/3/getting-started)
* [awesome-vue](https://github.com/vuejs/awesome-vue)

Librerías que usamos.
* [vue](https://vuejs.org/)
  * [vue-router](https://github.com/vuejs/vue-router) [Doc ES](https://router.vuejs.org/es/)
  * [vuex](https://github.com/vuejs/vuex)
  * [axios](https://github.com/mzabriskie/axios) _Promise based HTTP client_
* [webpack](https://webpack.js.org/)
  * [templates](https://github.com/vuejs-templates/webpack-simple)
* [semantic-ui](https://semantic-ui.com/)
* [Less](lesscss.org)
* [pugjs](pugjs.org) es para HTML como less para los CSS [HTML2PUG](https://www.beautifyconverter.com/html-to-jade-converter.php)

Herramientas de Código.
* [jshint](https://github.com/jshint/jshint)

Test unit
* [Karma](https://github.com/karma-runner/karma)
* [Mocha](https://mochajs.org/)
* [phantomjs](http://phantomjs.org/)
* [vue-test-utils](https://github.com/vuejs/vue-test-utils/)
* [Avoriaz](https://github.com/eddyerburgh/avoriaz)

Test e2e
* [Nightwatch](http://nightwatchjs.org/) [Browser Drivers Setup](http://nightwatchjs.org/gettingstarted#selenium-server-setup) [Xpath cheatsheet](http://ricostacruz.com/cheatsheets/xpath.html)
* [selenium](http://docs.seleniumhq.org/download/)

* Descargar Drivers automaticamente.
  * [selenium-server-standalone-jar](https://github.com/adamhooper/selenium-server-standalone-jar)
  * [node-geckodriver](https://github.com/vladikoff/node-geckodriver)
  * [node-chromedriver](https://github.com/giggio/node-chromedriver)
  Pero para tener una mejor idea de como trabaja, dejamos los binarios en test/e2e/bin, git no deberia seguir los binarios.

Otras librerías.
* [vue-resource](https://github.com/pagekit/vue-resource) _Promise base HTTP for VueJS object_
* [vue-search-select](https://github.com/moreta/vue-search-select)
* [vue-simple-boilerplate](https://github.com/vuejs-templates/simple)
* [vee-validate](https://github.com/baianat/vee-validate)
* [vue-axios](https://github.com/imcvampire/vue-axios)
* [http-server](https://www.npmjs.com/package/http-server)

Ejemplos.
* https://github.com/coligo-io/notes-app-vuejs-vuex
* https://github.com/iamshaunjp/vuejs-playlist _(ver ramas)_
* https://github.com/iamshaunjp/vuex-playlist _(ver ramas)_
* https://medium.com/wdstack/vue-vuex-getting-started-f78c03d9f65

Herramientas.
* [vue-cli](https://github.com/vuejs/vue-cli)
* [generator-fountain-webapp](https://github.com/fountainjs/generator-fountain-webapp)
