## Descripción

Este código implementa un juego de memoria en el que se deben encontrar parejas de palabras en inglés y español. Al completar el juego se muestra un mensaje de felicitación. También se lleva un conteo de los errores que se cometen al seleccionar parejas incorrectas.

## Dependencias

Este código requiere de las siguientes dependencias:

- `react`: utilizado para crear componentes de interfaz de usuario
- `react-hooks`: utilizado para manejar el estado y otras características de los componentes de React

## Variables de estado

Este código utiliza las siguientes variables de estado:

- `matchedWords`: almacena las parejas de palabras correctamente seleccionadas.
- `unmatchedWords`: almacena las palabras que todavía no han formado parte de una pareja correcta.
- `selectedWords`: almacena las palabras seleccionadas en el juego actual.
- `showErrorMessage`: determina si se muestra un mensaje de error al seleccionar una pareja incorrecta.
- `errorCounter`: almacena el número de errores cometidos en el juego actual.
- `englishWords`: almacena las palabras en inglés disponibles para jugar.
- `spanishWords`: almacena las palabras en español disponibles para jugar.

## Funciones

Este código utiliza las siguientes funciones:

- `resetMatchedWords`: establece todas las variables de estado a sus valores iniciales.
- `handleClick`: selecciona una palabra y la agrega a la lista de palabras seleccionadas.
- `updateUnmatchedWords`: elimina las palabras seleccionadas de las listas de palabras disponibles para jugar.
- `useEffect`: actualiza el estado de la aplicación en función de los cambios en las variables de estado.

## Componentes

Este código utiliza los siguientes componentes:

- `Navbar`: muestra información sobre el progreso del juego y el número de errores cometidos.
- `CardGrid`: muestra las tarjetas con las palabras disponibles para seleccionar.
- `Card`: representa una tarjeta individual con una palabra.
- `Panel`: muestra el juego en sí y controla la lógica del juego.
- `Message`: muestra mensajes al usuario.

## Iniciando el proyecto

Para iniciar el proyecto en tu entorno de desarrollo, sigue estos pasos:

1.  Clona el repositorio en tu equipo: `git clone https://github.com/luishron/wordmatch-game/`
2.  Accede al directorio del proyecto: `cd nombre-del-repositorio`
3.  Instala las dependencias necesarias: `npm install` o `yarn install`
4.  Inicia el servidor de desarrollo: `npm start` o `yarn start`

La aplicación se abrirá automáticamente en tu navegador en la dirección `http://localhost:3000`.

## Colaborando

Si quieres colaborar en el proyecto, sigue estos pasos:

1.  Crea un [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) del repositorio.
2.  Clona el repositorio en tu equipo: `git clone https://github.com/luishron/wordmatch-game/`
3.  Accede al directorio del proyecto: `cd nombre-del-repositorio`
4.  Crea una rama para tu contribución: `git checkout -b nombre-de-la-rama`
5.  Realiza tus cambios en el código y asegúrate de probarlos y documentarlos adecuadamente.
6.  Commitea tus cambios: `git commit -am "Mensaje de commit describiendo los cambios"`
7.  Sube tus cambios a tu repositorio remoto: `git push origin nombre-de-la-rama`
8.  Crea una [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) desde tu repositorio hacia el repositorio principal.

Asegúrate de seguir las guías de estilo y de contribución del proyecto para que tu pull request tenga más posibilidades de ser aceptada.
