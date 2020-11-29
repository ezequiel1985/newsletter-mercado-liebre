const express = require('express');
const app = express();


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/registro', function (req, res) {
    res.sendFile(__dirname + '/views/registro.html');
});

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public' + req.url);
});



app.listen(3002, ()=> console.log('Estamos corriendo en el puerto 3002'));