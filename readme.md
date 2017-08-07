# Trabajo Practico

Trabajo online y documentación [github.io](https://maranimatias.github.io/tp-2017/)

## Material adicional.
* [garkdown](https://guides.github.com/features/mastering-markdown/)
* [server tmdb](https://github.com/utnfrrottads/tmdb-server) [API](https://www.themoviedb.org/documentation/api/discover) **API Key** _Cuenta -> configuracion -> api -> crear -> developer -> aceptar -> llenar from -> copiar la key_ [api doc](https://developers.themoviedb.org/3/getting-started)
* [awesome-vue](https://github.com/vuejs/awesome-vue)

Quiero usar
* [vue](https://vuejs.org/)
  * [vue-router](https://github.com/vuejs/vue-router) [Doc ES](https://router.vuejs.org/es/)
  * [vux](https://github.com/vuejs/vuex)
  * [vue-resource](https://github.com/pagekit/vue-resource)
* [webpack](https://webpack.js.org/)
  * [templates](https://github.com/vuejs-templates/webpack-simple)
* [semantic-ui](https://semantic-ui.com/)
* [Less](lesscss.org)
* [pugjs](pugjs.org) es para HTML como less para los CSS

Ejemplos
* http://todomvc.com/examples/vue/
* https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template/tree/master/Vue_Starter
* https://github.com/sejr/vuefire-quickstart
* https://github.com/jeneser/douban
* https://github.com/coligo-io/notes-app-vuejs-vuex
* https://github.com/iamshaunjp/vuejs-playlist

Herramientas
* [TypeScript](http://www.typescriptlang.org/index.html)_Prefiero escribir JavaScript puro, pero acepto usarlo_
* [generator-fountain-webapp](https://github.com/fountainjs/generator-fountain-webapp)
* [vue-cli](https://github.com/vuejs/vue-cli)
* [vue-search-select](https://github.com/moreta/vue-search-select)
* [vue-simple-boilerplate](https://github.com/vuejs-templates/simple)
* [vee-validate](https://github.com/baianat/vee-validate)
* [http-server](https://www.npmjs.com/package/http-server)

# TP 1
## 1 - Enunciado
### 1.1 - Desarrollo
Crear un nuevo frontend para [TMDB](www.themoviedb.org) (The Movie DB) utilizando:
* Un framework de frontend. Se propone Angular pero se admitirán otros. Quienes quieran utilizar otro deberán consultar con los profesores antes de hacerlo.
* Utilizar html 5.
* Crear los css usando un framework (bootstrap, foundation, etc) o un preprocesador (less, sass, stylus).
* El backend a utilizar puede ser la API de TMDB ([api oficial](https://www.themoviedb.org/documentation/api?language=es)) o el backend provisto por la cátedra en este [repositorio](https://github.com/utnfrrottads/tmdb-server)

### 1.2 - Funcionalidad
* Página principal que permita buscar películas en tmdb. Al seleccionar una película debe redirigir a la página de dicha película.
* La página de cada película debe al menos mostrar:
  * Imagen principal de la película
  * Overview
  * User score
  * Reviews
* Debe permitir al usuario
  * Loguearse (no es necesario incluir el registro de usuarios)
  * Puntuar la pelicula

### 1.3 - Planificación y documentación

#### 1.3.1 - Entregas
El equipo deberá planificar y patuar entregas del trabajo práctico con el equipo docente. Indicando las fechas de entrega el alcance y los criterios de aceptación.

Las mismas podrán volverse a pactar con los profesores enviando las correcciones a la misma indicando, causas, acciones correctivas que se tomarán y nuevo cronograma.

#### 1.3.2 - Reuniones de avance
A su vez deberán hacer reuniones periódicas para planificar las acciones a realizar y los responsables entre una reunión y otra. La periodicidad la definirán los miembros del equipo pero no podrá ser menor a 1 por semana.

En la misma deberán indicar: fecha de la reunión, asistentes y por cada asistente:
* Tareas completadas desde la última reunión
* Blockers
* Tareas a realizar hasta la próxima reunión
* A su vez si no se alcanzó lo planificado en la reunión anterior las acciones correctivas que se tomarán.

## 2 - Criterio de correccion
### 2.1 - Sitio
* Usabilidad del sitio: debe ser fácil de usar, elegante y no tener contenido oculto o difícil de acceder
* Diseño adecuado de la interfaz: uso apropiado de los tags html y de los estilos, ya sea utilizando un FW CSS o un preprocesador.
* Calidad del código: uso adecuado de las características del FW y de la API. Para Angular usar la guia de estilos oficial [Angular.io Styleguide](https://angular.io/guide/styleguide) [HTML CSS StyleGuide de google](https://google.github.io/styleguide/htmlcssguide.html)
* Completitud de los requerimientos.

### 2.2 - Planificación
* Progreso en las capacidades para planificar adecuadamente y tomar acciones correctivas.
* Adecuación de las entregas con tiempos y acciones.

### 2.3 - Repositorio
* El desarrollo deberá realizarse en una plataforma de git gratuita. Se recomienda GitHub o GitLab.
* Se evaluará el uso de git: Frecuencia y responsables de los commits, uso de branches y merge.

## 3 - Entrega final
La entrega final deberá hacerse enviando por email a los profesores la URL del repositorio de git.

En el archivo readme.md deberá indicarse, el trabajo, año de cursado e integrantes (legajo, nombre y apellido)

Fecha de entrega final: TBD
