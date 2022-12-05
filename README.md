README WHEEL OF DOOM
Hola lector! Este es nuestro proyecto llamado Wheel of Doom, creado por Juliana Cristancho, Yeimmy Buenaventura, Jonathan Vanegas, Maria Suescum, Fredy Bernal y Andrea Niño, mediante este proyecto buscamos realizar un juego inspirado en la temática del juego del calamar para ejecutar a las víctimas que se inscriban en la lista del juego de manera aleatoria. Para la realización de este juego utilizamos HTML, CSS y Javascript, también algo de animaciones que serán explicadas más adelante.
En primer lugar realizamos el product backlog con las diferentes especificaciones y sprints a entregar y asignamos un rol para cada uno de los integrantes del grupo siendo definidos de la siguiente manera:
 Scrum Master- Maria Suescum
Product Owner- Juliana Cristancho
Team - Jonathan Vanegas, Yeimmy Buenaventura, Andrea Niño y Fredy Bernal
Como parte inicial de nuestro proyecto realizamos la investigación de diferentes estilos de juegos que nos pueda ayudar al diseño de nuestro juego y con base a ello diseñamos el Sketch del juego (personajes, fondos y demás) para luego transformarlos en los Mockups en la plataforma de Figma tanto para móvil (horizontal, vertical) como tablet (horizontal, vertical) y desktop ,que desarrollamos más adelante.
El resultado de nuestro diseño fue el siguiente:

DISEÑO CELULAR
<img width="431" alt="image" src="https://user-images.githubusercontent.com/114879421/205752832-cc60e355-83f6-45d5-ab11-f1fea86731e6.png">

DISEÑO CELULAR LANDSCAPE

<img width="451" alt="image" src="https://user-images.githubusercontent.com/114879421/205752943-1a721285-5fb9-4e00-9a0e-14af4000ef34.png">

DISEÑO TABLET

<img width="435" alt="image" src="https://user-images.githubusercontent.com/114879421/205753026-34b5a150-f6bd-49cc-b35a-550f2828fc80.png">

DISEÑO TABLET LANDSCAPE

<img width="455" alt="image" src="https://user-images.githubusercontent.com/114879421/205753119-7298c089-f064-4fca-92cd-767afe322586.png">

DISEÑO DESKTOP
<img width="453" alt="image" src="https://user-images.githubusercontent.com/114879421/205753405-3e0a7cfe-a2e7-4eff-a13f-52d619846656.png">

Para la distribución del trabajo creamos diferentes ramas en GitHub y clonamos el repositorio base para trabajar según correspondía la división del trabajo. 
En el repositorio base creamos cuatro html, cuatro css, dos archivos js, una carpeta de imágenes una de sonidos y una para las fuentes.

n el primer html llamado index.html, se estructura el inicio del juego donde va a ir el título principal del juego, los fondos del inicio del juego en celular, tablet y desktop;
también se crea un botón para dar inicio al juego.

<img width="449" alt="image" src="https://user-images.githubusercontent.com/114879421/205753619-2d55991f-8e7e-4a74-abe8-cbfca741693e.png">

En la hoja de estilos index se aplicó el estilo que iba a llevar cada vista del inicio del juego dependiendo si era para celular , tableta o desktop iba a llevar una imagen distinta que se insertó con un background image.

<img width="351" alt="image" src="https://user-images.githubusercontent.com/114879421/205753760-54ac4950-0494-4c7b-b0eb-f3ccaf9e3674.png">


Para el boton de star que iba a llevar la página de inicio , se implemento un hover para que diera un efecto que al estar posicionado encima de dicho boton este cambiara de color , acompañado de propiedades de transition para que quedara funcional.

<img width="419" alt="image" src="https://user-images.githubusercontent.com/114879421/205754400-4a05335d-28ea-499c-888b-cbc027ae654c.png">

Para el título se le asignaron propiedades de text align para posicionarlo en cierta posición de la pantalla.

<img width="162" alt="image" src="https://user-images.githubusercontent.com/114879421/205754641-540e9bbb-7406-4303-92e6-6417ebd789b3.png">

En el segundo html llamado lista.html realizamos la parte donde se introducen los jugadores y se muestra la lista de estos jugadores utilizando un input y un icono de Font Awesome para añadir los jugadores. En la parte de la lista se usó una lista ordenada.
Para el botón se generó un enlace directo a la vista  juego.html.

<img width="335" alt="image" src="https://user-images.githubusercontent.com/114879421/205754749-6ffc94fc-fb2b-47db-9570-8738e605c606.png">

Los estilos fueron aplicados mediante el css llamado estilosLista.css en el cual  se llamaron las siguientes clases y aplicando estilo a cada uno de ellos:
Para el Button de play aplicamos los siguientes estilos, tanto de forma como de tamaño para igualarlo a las otras vistas

<img width="347" alt="image" src="https://user-images.githubusercontent.com/114879421/205754888-8f77fe07-8785-4412-9cef-cbfbd987017e.png">

En terminos generales se aplicaron los siguientes estilos para todas los puntos de quiebre en responsive que nos solicitan.

<img width="329" alt="image" src="https://user-images.githubusercontent.com/114879421/205755040-1118d1c6-b4af-47dc-bf86-00bd1724af09.png">


Creamos unos keyframes con porcentajes para realizar las animaciones de movimiento de la imagen  al fondo de la lista de jugadores.

<img width="347" alt="image" src="https://user-images.githubusercontent.com/114879421/205755130-2f64ae32-bdd5-4780-8042-a2a3121067cc.png">

le aplicamos al input para ingresar los jugadores estilos tanto al botón como a la caja  para el ingreso al array, donde le aplicamos color, 
posiciones relativas y absolutas para cuadrar el boton + para ir agregando a lista los jugadores ingresados en el input  y dimensiones que se adaptarán
al tamaño de la pantalla.

<img width="274" alt="image" src="https://user-images.githubusercontent.com/114879421/205755297-58d709f2-a797-436b-a10a-5900a748bba2.png">
para la lista de jugadores utilizamos un div donde van agregando cada uno los jugadores ingresados en el input ubicándose de manera de lista y desde 
una librería ajustando un botón de delete en caso de que se quiera eliminar el jugador ingresado.

<img width="157" alt="image" src="https://user-images.githubusercontent.com/114879421/205755447-acafe29c-5570-484c-8aea-42bee864b715.png">

Por último se adaptó los estilos a cada uno de los cortes solicitados con el uso de media query, para un máximo con las siguientes medidas : 
La de celular vertical: 320x480
La de celular horizontal: 480x320
Tablet vertical: 481x768
Tablet horizontal: 768x481
Escritorio:1024x538

Las funcionalidades fueron aplicadas mediante el documento funcionalidad.js en él cual se usó el DOM para llamar a los id del html y darles funcionalidad.
También, se creó un array vacío  donde se guardarán los jugadores que se introduzcan.

<img width="155" alt="image" src="https://user-images.githubusercontent.com/114879421/205755771-464c2a80-48b3-428a-92b6-3fbab8921def.png">

Se llamó el audio del juego guardado en la carpeta sonidos creando un elemento llamado audio y se aplicaron los métodos para editarlo y se ajustará sus propiedades.

<img width="139" alt="image" src="https://user-images.githubusercontent.com/114879421/205755901-fb75106f-a4ba-4ca3-b8de-cd01e7550999.png">

Se creó un evento de escucha en una función para que se pudieran agregar los jugadores a la lista con la tecla enter llamando el id del input

<img width="200" alt="image" src="https://user-images.githubusercontent.com/114879421/205756089-9a2707e0-ac60-441f-801b-8479896d0d16.png">

Se creó la función para agregar los jugadores en la lista cada vez que se introdujera uno nuevo. Además, se añadió una alerta para advertir al jugador que debe ingresar un nombre si intenta introducir un elemento vacío.

<img width="202" alt="image" src="https://user-images.githubusercontent.com/114879421/205756183-0c80dc54-826e-4c51-9385-e1d57e241006.png">

Se llama el evento de escucha para que al darle click en el icono “+” se agreguen los jugadores a la lista

<img width="131" alt="image" src="https://user-images.githubusercontent.com/114879421/205756310-e8404825-04e7-41f8-8f3e-cf4b96f158ca.png">

Se crea una clase para que aparezcan los jugadores que se van introduciendo a la lista y además se puedan eliminar uno por uno, llamando al icono de eliminar, utilizando el método de crear nuevos objetos en el html desde el javascript. 

<img width="186" alt="image" src="https://user-images.githubusercontent.com/114879421/205757093-d1682f6e-00c2-48e4-ab5c-d049d6278155.png">


Se crean dos constantes en donde se especifica la funcionalidad que va a tener el icono eliminar y se llama la constante donde se crean los nuevos elementos de la lista.
<img width="164" alt="image" src="https://user-images.githubusercontent.com/114879421/205757184-2b6696cd-446a-4e76-be3c-7d5eba0865d6.png">

Se crea una función para utilizar el método que especifica qué pasa con la información guardada si se actualiza la página web.

<img width="164" alt="image" src="https://user-images.githubusercontent.com/114879421/205757307-f97c1644-fa64-407b-b00a-8fc743f141e2.png">

En el tercer html llamado juego.html utilizamos un h2 para que apareciera el nombre del jugador que sería ejecutado el cual se actualizaría de conformidad con el funcionamiento del método .random, así mismo creamos 3 canvas, el primero de ellos anidaría la animación del muñequito, en el segundo la animación del killer en modo celular y el tercer canva la animación del killer para todas las vistas exceptuando el celular en modo vertical. 
Para las animaciones utilizamos la ilustración en sprites, es decir diferentes movimientos que haría nuestro muñeco. Para la creación de las imágenes las ilustramos mediante la aplicación de autodesk sketchbook, luego aplicamos color y exportamos en formato png.

<img width="220" alt="image" src="https://user-images.githubusercontent.com/114879421/205757432-35aff00a-913c-4dd7-9f85-d76aa7c5517b.png">

<img width="244" alt="image" src="https://user-images.githubusercontent.com/114879421/205757507-ea68cb56-038c-4403-9ccb-922e8b5d388a.png">

Los estilos del juego.html  fueron aplicados mediante el css llamado estilosJuego.css asignando los colores, tipografías espaciados entre otros que eran necesarios, de igual manera,una vez teníamos las ilustraciones realizadas creamos unos keyframes con porcentajes para realizar las animaciones del muñeco víctima y el killer, para el killer se dio utilización a 2 keyframes, debido a que se manejan dos vistas, una de perfil y otra recta destinada para celular.

<img width="196" alt="image" src="https://user-images.githubusercontent.com/114879421/205757610-5cd7115a-1c4e-4f18-ab5f-e279a1312f28.png">

En lo que respecta al html y css de la vista del juego obtuvimos como resultado lo siguiente:

<img width="215" alt="image" src="https://user-images.githubusercontent.com/114879421/205758030-379aa9f2-680b-46dd-b58e-6db3b3140fe2.png">

Frente a la aplicación de javascript lo que realizamos fue aplicar un addEventListener de tipo click sobre el botón de disparar para ello lo realizamos en el documento juego.js y le indicamos que a los nodos del html declarados por medio de variables en el js que se les hicieran cambios en el contenido del canvas, para ejecutar la acción de disparar del killer y la vista del muñeco muerto de la víctima, así mismo para que se ejecutara el sonido del disparo.

<img width="133" alt="image" src="https://user-images.githubusercontent.com/114879421/205758210-f189068f-f6a4-471f-85a6-a80a2824a998.png">

En el segundo html llamado gameOver.html 
Creamos una estructura básica para la sección de Game Over

<img width="202" alt="image" src="https://user-images.githubusercontent.com/114879421/205758536-4bd693cc-632c-483f-8a2a-05ac1011a123.png">

Haciendo uso de la etiqueta HTML agregamos fondo a la página asignándole una imagen, le quitamos el scroll e indicamos que ocupe el 100vw y vh.

<img width="185" alt="image" src="https://user-images.githubusercontent.com/114879421/205758972-c06b10b1-0126-4595-8839-549aebebc57d.png">

<img width="187" alt="image" src="https://user-images.githubusercontent.com/114879421/205759025-56137020-7f1a-4c0d-89cc-623530c90953.png">


Aplicamos display grid al body para ubicar cada uno de los elementos propios de esta sección en un área determinada de la hoja, a su vez gracias a la propiedad autofit y autofill nos permite que la grilla se adapte a las diferentes pantallas.

<img width="188" alt="image" src="https://user-images.githubusercontent.com/114879421/205759131-2266b624-2cd0-41e3-bc29-6d3cd843d1fd.png">

Asignando secciones cada uno de los elementos haciendo llamado de las clases adjudicadas en el HTML.
La propiedad grid-area nos permite indicarle al elemento la sección de la grilla que ocupará, siendo el primer el valor la fila en la que empezará, el segundo la primera columna, seguido de la fila y columna hasta la cual se expandirá. Aplicamos otras propiedades que nos brinda la ubicación del mismo dentro del área seleccionada, el color y el tamaño del mismo.

<img width="134" alt="image" src="https://user-images.githubusercontent.com/114879421/205759241-549f9dec-c7d1-47e7-950a-1f0641d89458.png">

<img width="338" alt="image" src="https://user-images.githubusercontent.com/114879421/205759298-2ced8a5b-0766-4642-acfc-58eee921003d.png">

A la clase cook le asignamos un background-image para aplicar un estilo único al botón de reset, le brindamos un tamaño específico al background,
posición en el área asignada y tamaño; a su vez se le aplica la pseudo-clase hover que nos permite darle un estilo diferente al momento de que el cursor
esté sobre el elemento al que se le aplique, en este caso aplicamos scale, para la imagen aumente y un cursor pointer el cual genera que el cursor cambia
al pasar sobre el elemento.

<img width="202" alt="image" src="https://user-images.githubusercontent.com/114879421/205759400-d313cd86-a0ae-4fb5-9372-c569c5af6afb.png">

Para el cambio de dispositivo acorde a su tamaño se generan modificaciones en la grilla y por ende a los valores asignados en el grid-area de cada elemento.Para el cambio de dispositivo acorde a su tamaño se generan modificaciones en la grilla y
por ende a los valores asignados en el grid-area de cada elemento

<img width="208" alt="image" src="https://user-images.githubusercontent.com/114879421/205759570-4a65ed71-4cc8-4e74-9ed9-fdffa2fb4b93.png">

En este caso se modifica la cantidad de columnas y filas para aplicar responsive celular, posteriormente los elementos que se adjudicaron a la segunda columna pasarán a ser parte de una fila.


































