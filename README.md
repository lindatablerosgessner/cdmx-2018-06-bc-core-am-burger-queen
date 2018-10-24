# Burger Queen

## Preface

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un
restaurante que nos ha contactado porque quieren que alguien les construya una
interfaz donde puedan tomar pedidos usando una tablet.

<!-- ![burger-queen]() -->

Como punto de partida,
nos comparten el siguiente correo recibido del cliente:

> Somos **Burguer Queen**, una cadena de comida rápida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
> expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
> clientes.
>
> Tenemos 2 menús: uno para el desayuno, que es muy sencillo:
>
> | Item                      |Precio|
> |---------------------------|------|
> | Cafe americano            |    5 |
> | Cafe con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo natural              |    7 |
>
> Y un menú para el resto del dia:
>
> Los clientes pueden escoger entre hamburguesas de res, de pollo, o vegetariana.
> **Y por $1 pueden agregarle queso o huevo.**
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el
> pedido varias veces antes de finalizarlo.

## Introduction

Partiendo de los requerimientos de negocio detallados en el correo del cliente,
nos piden construir **una interfaz que permita a lxs cajerxs tomar los pedidos
en una tablet, y desde ahí se puedan enviar a cocina** a través de un backend del
que nos darán detalles más adelante.

El primer paso de este proyecto debe ser convertir el menú descrito por el
cliente en una estructura que podamos poner en un archivo JSON para después
_pintar_ en la pantalla.

Nuestra interfaz debe mostrar los dos menús (desayuno y resto del día), cada uno
con todos sus _productos_. El usuario debe poder ir eligiendo que _productos_
agregar y la interfaz debe ir mostrando el _resumen del pedido_ con el total.

![out](https://user-images.githubusercontent.com/110297/45984241-b8b51c00-c025-11e8-8fa4-a390016bee9d.gif)

## Objetive

El objetivo principal de aprendizaje de este proyecto es construir una
_interfaz web_ usando el _framework_ elegido (React, Vue o Angular). Todos estos
frameworks de front-end atacan el mismo problema: **cómo mantener la interfaz y
el estado sincronizados**. Así que esta experiencia espera familiarizarse con
el concepto de _estado de pantalla_, y cómo cada cambio sobre el estado se va a
ir reflejando en la interfaz (por ejemplo, cada vez que agregamos un _producto_
a un _pedido_, la interfaz debe actualizar la lista del pedido y el total).

Como objetivo secundario, la implementación debe además seguir las
recomendaciones para PWAs (_Progressive Web Apps_), lo cual incluye conceptos
como **offline**. Para guiarte con respecto a este tema te recomendamos usar
[Lighthouse](https://developers.google.com/web/tools/lighthouse/?hl=es), que es
una herramienta de Google que nos ayuda a asegurar que nuestras web apps sigan
buenas prácticas. De hecho, usaremos Lighthouse a la hora de evaluar el
proyecto.

Finalmente, la interfaz debe estar diseñada específicamente para correr en
**tablets**.

JavaScript
(ES6+), HTML y CSS y empaquetada de manera automatizada.
[Vue](https://vuejs.org/)

La aplicación debe ser un _Single Page App_. Los pedidos los tomaremos desde una
_tablet_, pero **no queremos una app nativa**, sino una web app que sea
**responsive** y pueda funcionar **offline**. También necesitamos botones
grandes para escoger los productos, y el estado actual del pedido siempre
visible para poder confirmar con el cliente.

## Parte obligatoria

### Definición del producto

En el `README.md` cuéntanos qué decisiones de diseño tomaste, incluye bocetos
tipo _story board_, info de despliegue e instrucciones para developers
(dependencias, instalación, tests, ...).

### UI

#### Hito 1: Tomar pedidos

* Ingresar nombre del cliente.
* Filtrar _menú_ por _desayuno_ y _resto del día_.
* Agregar ítem al pedido.
* Eliminar ítem del pedido.
* Mostrar _resumen_ de pedido con todos los items y el total.
* Enviar a cocina (esto debe guardar el pedido).

#### Hito 2: Ver/atender pedidos

* Vista de pedidos pendientes
* Marcar pedido como listo
* Ver historial de pedidos

#### Hito 3: Autenticación

* Inicio de sesión
* Restaurar contraseña

## Evaluación

### Tech

| Habilidad | Nivel esperado |
|-----------|----------------|
| **JavaScript** | |
| Estilo | 4
| Nomenclatura/semántica | 3
| Funciones/modularidad | 3
| Estructuras de datos | 3
| Tests | 3
| **HTML** | |
| Validación | 3
| Estilo | 3
| Semántica | 3
| SEO | n/a
| **CSS** | |
| DRY | 3
| Responsive | 3
| **SCM** | |
| Git | 3
| GitHub | 3
| **CS** | |
| Lógica | 3
| Arquitectura | 2
| Patrones/paradigmas | n/a

### UX

| Habilidad | Nivel esperado |
|-----------|----------------|
| User Centricity | 3
| Entrevistas | n/a |
| Testing | 3
| User Flow | 3
| Jerarquía | 3
| Alineación | 3
| Contraste | 3
| Color | 3
| Tipografía | 3

* Debe **verse bien y funcionar bien en tablets**.
* **No queremos una app nativa**, sino una web app que se pueda _agregar a la
  pantalla de inicio_ como PWA.
* Queremos botones grandes para fácil uso en pantallas táctiles (touch screens).
* Queremos el estado actual del pedido siempre visible mientras tomamos un
  pedido.
* Queremos que sea accesible y que funcione bien en tablets iOS y Android.

## Entregables

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting que
puedas haber encontrado en el camino.

## Primeros pasos

1. Haz un _fork_ de este repo (en GitHub).

2. Clona tu _fork_ en tu computadora:

   ```sh
   git clone git@github.com:<tu-usuario-de-github>/<cohortid>-burger-queen.git
   cd <cohortid>-burger-queen
   ```

3. Crea una rama a partir de `master` para empezar a trabajar. Por ejemplo:

   ```sh
   git checkout -b develop
   ```

### Frameworks / libraries

* [Vue](https://vuejs.org/)

### Herramientas

### Serverless

* [Qué es eso de serverless? - @PamRucinque en Medium](https://medium.com/@PamRucinque/qu%C3%A9-es-eso-de-serverless-f4f6c8949b87)
* [Qué es Serverless? | FooBar - YouTube](https://www.youtube.com/watch?v=_SYHUpLi-2U)
* [Firebase](https://firebase.google.com/)
* [Serverless Architectures - Martin Fowler](https://www.martinfowler.com/articles/serverless.html)

## Mockups

![mockup 1](src/assets/mockup1.png)
![mockup 2](src/assets/mockup2.jpeg)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Tech/framework used

Built with:

* JS
* HTML
* CSS
* Node.js
* Vue.js
* Visual Code Studio

## Table of Contents

```text
./
├── .babelrc
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── build
│   └── *
├── config
│   └── *
├── dist
│   ├── static
│   │   └── *
│   └── index.html
├── node_modules
│   └── *
├── src
│   ├── assets
│   │   └── logo.jpg
│   ├── components
│   │   ├── Login.vue
│   │   ├── *
│   │   └── *
│   ├── router
│   │   └── index.js
│   ├── App.vue
│   └── main.js
├── static
│   └── .gitkeep
└── test
    ├── e2e
    │   └── *
    └── unit
        └── *

```

## Tests

* Jest

## Build status

Under construction.

## Contribute

Please send a pull request if you would like to contribute.

## Checklist

### General

* [ ] Producto final sigue los lineamientos del diseño.

### `README.md`

* [ ] Documenta proceso de diseño.
* [ ] Incluye info para developers (deps, instalación, uso, despliegue, testing,
  ...).

### Lighthouse

* [ ] 80% o más en sección _Performance_.
* [ ] 80% o más en sección _Progressive Web App_.
* [ ] 80% o más en sección _Accessibility_.
* [ ] 80% o más en sección _Best Practices_.

### Tests

* [ ] 70% o más en cobertura de _statements_.
* [ ] 70% o más en cobertura de _functions_.
* [ ] 70% o más en cobertura de _lines_.
* [ ] 70% o más en cobertura de _branches_.

### UI

#### Hito 1: Tomar pedidos

* [ ] Ingresar nombre del cliente.
* [ ] Filtrar _menú_ por _desayuno_ y _resto del día_.
* [ ] Agregar ítem al pedido.
* [ ] Eliminar ítem del pedido.
* [ ] Mostrar _resumen_ de pedido con todos los items y el total.
* [ ] Enviar a cocina (esto debe guardar el pedido).

#### Hito 2: Ver/atender pedidos

* [ ] Vista de pedidos pendientes.
* [ ] Marcar pedido como listo.
* [ ] Ver historial de pedidos.

#### Hito 3: Autenticación

* [ ] Inicio de sesión.
* [ ] Restaurar contraseña.

### UX

* [ ] Se _ve_ bien y _funciona_ bien en tablets.
* [ ] Se puede _agregar a la pantalla de inicio_ como web app (tiene manifest,
  íconos, ...) en iOS y Android.
* [ ] Uso fácil en pantallas táctiles (touch screens).
* [ ] Estado actual del pedido siempre visible mientras tomamos un pedido.
