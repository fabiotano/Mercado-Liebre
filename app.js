// npm init creo => package.json
// npm install exress => instalo modulo express

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // para que se vean las imagenes

const port = process.env.PORT || 3000; // es un OR condition 

app.listen(port, console.log("Servidor escuchando en el puerto" , port)); // instalo servidor

app.get('/', (req, res) => res.sendFile(path.join(__dirname, "/views/home.html")) ); 

app.get('/registro', (req, res) => res.sendFile(path.join(__dirname, "/views/registro.html")) ); 

app.get('/login', (req, res) => res.sendFile(path.join(__dirname, "/views/login.html")) ); 


