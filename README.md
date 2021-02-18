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
