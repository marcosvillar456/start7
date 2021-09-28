# Prueba Tecnica

<p align="Left">
 1)_Ejecutar npm install
    <br/>
 2)_Crear .env con la siguente informacion
    <br/>
    DB_USER = 
    <br/>
    DB_PASSWORD =  
      <br/>
    DB_HOST = 
       <br/>
    DB_HOST_PORT = 
       <br/>
    DB_DATABASE = 
       <br/>
    DB_DIALECT = 
       <br/>

3)\_Luego de crear y llenar el .env ejecutar npm start
4)\_Peticiones:
Registro de usuario:
POST http://localhost:3010/users/updateUser

Para este se necesita pasarle la siguente informacion
"name":"Ingrese nombre",
"email":"Ingrese email",
"password":"Ingrese Constraseña"

Login:
GET http://localhost:3010/users/login

Para este se necesita pasarle la siguente informacion
"email":"Ingrese email",
"password":"Ingrese Constraseña"

Ver usuarios Registrados:
GET http://localhost:3010/users/allUsers

Este nos mostrara todos los usuarios que esten registrados

</p>
