# Innovamat prueba técnica

Proyecto creado con [Create React App](https://github.com/facebook/create-react-app).

## Comandos para arrancar el proyecto:

Estando en la raíz del proyecto:

### `npm install`

Instala todas las dependencias necesarias para poder arrancar el proyecto.

### `npm start`

Lanza la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para visualizarlo en el navegador.

### `npm run build`

Crea una carpeta build con el proyecto en modo producción con optimizaciones para poder deployar la aplicación.

Consulte la sección sobre [deployment](https://facebook.github.io/create-react-app/docs/deployment) para más información.

---

## Librerías utilizadas:

- `react-router-dom`\
  Utilizada para la gestión del routing.
- `react-icons`\
  Utilizada tener acceso a iconos de diferentes librerías.
- `react-pdf`\
  Utilizada para el renderizado de PDF dentro de la aplicación

---

## Errores API

> La llamada a Rutinas da un `405 Method Not Allowed`

El método GET debe estar bajo autenticación y desde el frontend que tenemos actualmente no la tenemos implementada.

> La llamada de Ambientes da un `404 Not Found`

El método GET no esta implementado o la ruta a la que nos ha pasado el equipo de backend no es la correcta.

> Como mejorar la gestión de errores?

Cambiaría el objeto de la response y añadiria tanto el status como un "friendly message" para tener mejor controlado el error a la hora de desarrollar.

---

## Estructura del proyecto

A la hora de estructurar el proyecto, me he basado principalmente en las diferentes pantallas que tenemos.\
Por un lado, el listado agrupado por secciones donde se consumen las llamadas de /talleres, /rutinas, etc. Por otro lado la pantalla del propio Recurso, y por otro lado la pantalla donde se muestran los resultados de la búsqueda.\
`app:` Índice de la aplicación, donde se crea la estructura del layout y se hace el routing.\
`components:` Lista de componentes que uso en las diferentes pantallas y/o otros componentes.

- `_layout:` componentes como el topbar, sidebar, no reutilizables que usamos para la construcción del layout
- `_shared:` componentes considreados como “tags de html” tales botones, un título, inputs, etc.

`hooks: `
Para el grosor y complejidad de esta aplicación he optado en usar un Context para tener una gestión del estado, y tener hook para acceder al estado y otro para modiificarlo tal y como nos comenta `Kent C. Dodds` [en este post](https://kentcdodds.com/blog/how-to-use-react-context-effectively).
También he creado diferentes custom hooks que me permiten tener funcionalidades separadas del componente que puedo reutilizar.\

`services:` donde tengo la gestión de llamadas a la api con los diferentes métodos GET, POST
