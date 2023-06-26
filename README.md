# EVENTOS
## Index  
-	### público
	Como usuario al acceder a la aplicación encontraremos un título con una descripción.
	Donde aparecerá una imagen de la aplicación y debajo dos botones una para registrarse que te llevara a la pagina de registro si no estas registrado y si estas registrado tendremos otro botón que nos llevara a la pagina de login
## Login
Tendrá una imagen de la aplicación con dos campos que requiere email y password y nos llevara a Dashboard
Registro

 ## Dashboard
### Privado
saldrá un navbar en la parte superior con los eventos que saldrán en un desplegable  debajo a la izquierda saldrá el nombre del usuario  luego debajo del nombre del usuario saldrán los eventos que haya creado el usuario con toda la información del evento creado, tendremos un botón  que será para crear eventos unirse eventos y botón de salir el de crear eventos nos llevara a crear eventos y unirse a eventos a dicha pagina 

## Crear evento 
Pediremos información al usuario como nombre, fecha, evento teléfono, dirección y descripción del evento con un botón de crear y otro para compartir URL creada esta URL se genera una vez que el usuario le dé al botón de crear que devolvería   por ejemplo (http://localhost:4000/user/tony/gfgpoker)  esta URL se podrá enviar a los usuarios mediante (web share API)
## Unirse a evento
Tendremos una imagen de la aplicación con texto debajo tendremos para pegar la URL que nos allá pasado el usuario creador con un botón para unirse a dicho evento una vez que  le demos nos llevara a detalles de eventos 
## Detalles de evento 
En detalles de evento tendremos la información del anfitrión como nombre, evento, fecha ,lugar y teléfono  tendremos 3 botones uno para hacer bizum conjunto otro individual y otro para ver la lista de todos los usuarios que han sido invitados 
## Lista de invitados
Saldrán todos los usuarios que han sido invitados con un navbar para redirigir a Dashboard

 ## Vista

 ![image](./registro%20.jpg)

 ## backend
 ### tablas
  que necesitaremos son users, eventos, invitados y invitaciones  

 para la ruta de registes  y pedir los datos al usuario como el nombre , email y password necesitaremos tabla users  route post(http://localhost:4000/auth/signup)

 ```
 {
    "name": "Antonio",
    "email": "Antonio@hotmail.com",
    "password": "1234"
 }

 ```
 Tengo que hacer las tablas y routes esto es solo para que lo veas y me digas que te parece la idea.
