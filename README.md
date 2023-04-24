# test-back-insttantt
Proyecto de Node Express y Typescript con mongo compass

# Instalación
Para iniciar el proyecto debe descaregarlo, ejecutar npm install, 
```
npm install
```
luego de instalados los modulos de node, ejecuta en dos ventanas, consola o terminales
```
tsc -w
```
```
npm start
```
la aplicación de node de correrá sobre el puerto 8080 y la conexion a la base de datos será automatica. en el archivo .env se encuentra la cadena de conexión y demas constantes.


# Uso de apis

Login `http://localhost:4200/auth/login` tipo POST
```
{
    "user": "hcramirez2@gmail.com",
    "password": "3128216677"
}
```

Register or Post User `http://localhost:4200/api/user` tipo POST
```
{
"email": "admin@example.com",
"phoneNumber": "1234",
"firstname": "Pepito Armado",
"lastname": "Pérez Pinzon",
"documentType": "CC",
"documentNumber": "10533422567",
"birthdate": "01-01-1992",
"expeditionDate": "01-01-2021"
}
```

Get All Users `http://localhost:4200/api/users` tipo GET

Get User By ID `http://localhost:4200/api/user/${id}` tipo GET

Update or Put User `http://localhost:4200/api/user` tipo PUT
```
{
"email": "admin@example.com",
"phoneNumber": "1234",
"firstname": "Pepito Armado",
"lastname": "Pérez Pinzon",
"documentType": "CC",
"documentNumber": "10533422567",
"birthdate": "01-01-1992",
"expeditionDate": "01-01-2021",
"country": "Colombia",
"city": "Bogotá",
"address": "Calle falsa 123",
"photoProfile": "string"
}
```
