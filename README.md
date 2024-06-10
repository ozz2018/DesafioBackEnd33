# API Backend Desafío
## Tutorial:
1ro necesitas tu archivo **.env** con las variables del archivo **example.env**.
Hecho lo anterior instalar dependencias con:
~~~
npm i
~~~
Para probar la API con tu **Postman** corriendo primero el servidor el comando en tu terminal:
~~~
npm run dev
~~~
### REGISTRO DE USUARIOS
En el método **POST** con el parametro **/user** podrás registrar nuevos usuarios.
~~~
http://localhost:PORT/user
~~~
El modelo para registrar usuarios en el **Body** es el siguiente:
~~~
{
    "name":"NOMBRE DE USUARIO",
    "ProfilePic":"DIRECCION URL DE UNA IMÁGEN",
    "email":"CORREO ELECTRÓNICO",
    "password":"CONTRASEÑA"
}
~~~
### CONSULTA UN USUARIO POR ID
Mediante el método **GET** mandando el **id** como parametro obtendrás toda la información del usuario
~~~
http://localhost:PORT/user/ID
~~~
### INICIAR SESIÓN
Con el parámetro **/auth/login** mediante el métdo **POST** podremos obtener un token.
~~~
http://localhost:PORT/auth/login
~~~
El modelo para iniciar sesión es el siguiente:
~~~
{
    "email":"CORREO ELECTRÓNICO",
    "password":"CONTRASEÑA"
}
~~~
¡IMPORTANTE!
Copiar el **token** y pegarlo en la sección de **Headers** la opción de **Authorization** verifica que la casilla esté palomeada.
### New POST
- Hay que tener sesión iniciada para poder crear un nuevo **post**.

Haciendo uso del método **POST** con el parámetro **/posts** podremos realizar las entradas.
~~~
http://localhost:PORT/posts
~~~
El modelo para ingresar un post es el siguiente:
~~~
{
    "title": "TITULO",
    "image": "URL DE LA IMÁGEN",
    "body": "TODO EL CUERPO DEL POST"
}
~~~
La API automáticamente va a enlazar el post al usuario que lo está creando.
### List POSTS
- No es necesario iniciar sesión para listar **post**.

Tenemos dos formas de listar los posts:
1. **LISTAR TODOS LOS POSTS:** Para ésto sólo se emplea el método **GET** con el parámetro de **posts**
~~~
http://localhost:PORT/posts
~~~
2. **LISTAR POTS POR TÍTULO:** Podemos filtrar los posts deacuerdo al título.
En la sección **QUERY** vamos a nombrar el parámetro **search** y en éste parámetro podemos escribir las coincidencias que nos interesan y sólo se listarán los posts cuyos títulos coincidan con nuestra búsqueda.
### Update POSTS
- Hay que tener sesión iniciada para actualizar un **post**.

Haciendo uso del método **POST** con el parámetro **/posts** seguido del **ID** que nos interesa editar:
~~~
http://localhost:PORT/posts/ID
~~~ 
El modelo es el mísmo que cuando se crea:
~~~
{
    "title": "TITULO",
    "image": "URL DE LA IMÁGEN",
    "body": "TODO EL CUERPO DEL POST"
}
~~~
No se puede cambiar al usuario que creó el post, ése dato si se agrega simplemente se ignora, al ejecutar ésto nos devolverá el post editado junto con la última fecha de actualización.
### Delete POST
- Debes tener sesión iniciada para eliminar un **post**.
Con el método **delete** usando el **ID** del post que querémos eliminar podremos realizar la acción.
~~~
http://localhost:PORT/posts/ID
~~~
¡AVISO!
Sólo el usuario que creó el post tiene el permiso de eliminarlo.
