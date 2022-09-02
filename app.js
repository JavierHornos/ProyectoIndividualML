const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve(__dirname, './public');
app.use( express.static(publicFolderPath) );

app.use( express.static(path.join(__dirname, '/views')));
app.use( express.static(path.join(__dirname, '/public')));



app.listen(process.env.PORT || 3000, function() {
        console.log("Servidor corriendo");
    })

app.get('/index.html', (req,res) => {
        res.sendFile(path.resolve(__dirname + '/views/home.html'));
});

app.get('/register.html', (req,res) => {
        res.sendFile(path.resolve(__dirname + '/views/register.html'));
});

app.get('/login.html', (req,res) => {
        res.sendFile(path.resolve(__dirname + '/views/login.html'));
});

app.get('*', (req,res) => {
    res.send("Error, Pagina mal ingresada");
});

