# Card validation project
###Empowered Woman Clothes

Aplicación web que le permita a un usuario validar el número de una tarjeta de crédito, desarrollado en el contexto de una tienda de ropa para damas.

## 1. Vista de la aplicación

### 1.1.-  Con respecto al usuario
Los principales usuarios del producto:
  * Personas que deseen comprar ropa para dama, cuya modalidad de pago sea tarjeta de crédito.


### 1.2.- Acceso a la validación de la tarjeta

Para tener acceso a la validación de la tarjeta:
* Ingresa al link de la página a través de: [URL](https://yaneth-hernandez.github.io/BOG005-card-validation/src/)
* Menú de navegación, opción **Products**
  ### Navegación y uso
* **Products**  desplagará una barra de navegación con dos opciones **Clothes** o **Shoes**.
* Al dar click a cualquiera de esas opciones, se mostrará una pantalla modal con el catálogo correspondiente.
* Al pulsar click sobre cualquiera de las imágenes que se muestran o sobre el precio correspondiente, el catálogo se oculta y se muestra la ventana modal **Card Validation**
* En la ventana modal **Card Validation** se ingresa entre otros datos el número de tarjeta válido(este dato es obligatorio).
* Al ingresar un número de tarjeta inválido o no ingresar número y dar click en **botón Validar Tarjeta**: la aplicación responderá: "Su tarjeta no es válida".
* Al ingresar un número de tarjeta válido, y dar click en **botón Validar Tarjeta** la aplicación responderá: "Su número de tarjeta ############1234 ha sido validada con éxito", mostrando los 4 últimos dígitos y enmascarando el resto.

####Nota: Todas las pantallas modales, tiene un botón(X) para cerrarlas, la pantalla Card validation tiene un botón Reset, para borra los datos del formulario


## 2. Diseño

### 2.1.- Prototipo inicial

* [Prototipo inicial](https://drive.google.com/file/d/1kvIwsEqnHly4zxdxL6k9HUYjDQBiwAfU/view?usp=sharing)
* No recibí feedback al respecto.

### 2.2.- Prototipo final

* [Prototipo final en Google Slide](https://docs.google.com/presentation/d/1gNHKAw2C_V0kpQQkFTSQAGamwqZnf6y38lYpinMwuu8/edit#slide=id.g13cddd23b80_0_19)
* El feedback recibido: Realizar el prototipo final en figma
* [Prototipo final en Figma](https://www.figma.com/file/x6b9im3OIjX5YojKknrYFC/Woman-shop-Card-validation?node-id=0%3A1)
* No recibí feedback al respecto, realicé cambios en paleta de colores.


## 3. Desarrollo y despliegue
* Lenguajes usados en el proyecto: HTML, CSS, Javascript (todos sin ningún framework)
* Entorno de ejecución: Node.js
* Ejecuta el código con
* ##### `npm init` Esto activará la inicialización de tu proyecto
* ##### `npm install` Para instalar todas las dependencias listadas en el archivo package. json
* ##### `npm start` Para ejecutar el proyecto
* ##### `npm test` Para ejecutar el pruebas unitarias
* El despliegue se ralizó en gitHub page



~~~~
## Autor
##### Yaneth Hernández
~~~~
