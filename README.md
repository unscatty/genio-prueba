# Prueba técnica para Genio.soy

https://genio-prueba.onrender.com/

## Descripción

Este proyecto es una prueba técnica para Genio.soy. Consiste en una aplicación web tipo blog que utiliza el API de WordPress para mostrar las entradas del blog: [https://fernandafamiliar.soy](https://fernandafamiliar.soy).

## Tecnologías utilizadas

- Next.js
- React
- TypeScript
- Tailwind CSS
- WordPress API
- Render (para el deploy)

## Instalación

Para instalar el proyecto, es necesario clonar el repositorio y ejecutar el siguiente comando:

```bash
npm install
```

Si llegase a aparecer un error al momento de instalar las dependencias, instalar sin ejecutar los scripts de postinstall:

```bash
npm install --ignore-scripts
```

## Ejecución

### Variables de entorno

Para ejecutar el proyecto, es necesario crear un archivo `.env.local` en la raíz del proyecto con las siguientes variables de entorno:

```bash
NEXT_PUBLIC_WORDPRESS_URL="https://fernandafamiliar.soy"
WORDPRESS_HOSTNAME="fernandafamiliar.soy"
```

### Ejectuar el proyecto en modo de desarrollo

Para ejecutar el proyecto en modo de desarrollo, ejecutar el siguiente comando:

```bash
npm run dev
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000).

### Hacer build del proyecto

Para hacer build del proyecto, ejecutar el siguiente comando:

```bash
npm run build
```

### Ejecutar el proyecto en modo de producción

Una vez hecho el build del proyecto, ejecutar el siguiente comando:

```bash
npm run start
```

El proyecto estará disponible en [http://localhost:3000](http://localhost:3000).

## Deploy

El proyecto fue desplegado en Render. Puedes ver el proyecto en el siguiente enlace: [https://genio-prueba.onrender.com/](https://genio-prueba.onrender.com/).

El proyecto es re-desplegado automáticamente cada vez que se hace un push a la rama `main`.

## TODO

- [ ] Mejorar paginación
- [ ] Agregar componente/s para filtrado (los posts pueden ser filtrados mediante el uso de `queryParams` o haciendo click en las *categorías*, *etiquetas* o *autores* de los posts)
- [ ] Agregar componente/s para búsqueda
- [ ] Manejo de caché, para evitar hacer peticiones al API de WordPress cada vez que se recarga la página
- [ ] Optimizar imágenes (usando `sharp`)
- [ ] Mejorar mensajes de error
- [ ] Agregar favicon
- [ ] Agregar metatags
- [ ] Agregar tests
