// express(frame work para servidor) ejs setup
// importando librerías
const express = require('express');
const path = require('path');

// creando la aplicación de express
const app = express();
// const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'views/sistemasolar'))); //esto crea una carpeta dentro del proyecto para archivos estáticos

// configurando ejs como motor de plantillas
app.set('view engine', 'ejs');


// ruta para la página principal
app.get('/', (req, res) => {
//localhost:4000

    res.render('sistemasolar/sistema-solar'); // renderiza la vista index.ejs
    console.log('corriendo proyecto');
});

app.get('/jupiter.html', (req, res) => {
//localhost:4000

    res.render('sistemasolar/jupiter'); // renderiza la vista index.ejs
    console.log('corriendo proyecto');
});
app.get('/marte.html', (req, res) => {
//localhost:4000

    res.render('sistemasolar/marte'); // renderiza la vista index.ejs
    console.log('corriendo proyecto');
});

app.get('/mercurio.html', (req, res) => {
//localhost:4000

    res.render('sistemasolar/mercurio'); // renderiza la vista index.ejs
    console.log('corriendo proyecto');
});

app.get('/neptuno.html', (req, res) => {
//localhost:4000

    res.render('sistemasolar/neptuno'); // renderiza la vista index.ejs
    console.log('corriendo proyecto');
});
app.get('/saturno.html', (req, res) => {
//localhost:4000

    res.render('sistemasolar/saturno'); // renderiza la vista index.ejs
    console.log('corriendo proyecto');
});
app.get('/tierra.html', (req, res) => {
//localhost:4000

    res.render('sistemasolar/tierra'); // renderiza la vista index.ejs
    console.log('corriendo proyecto');
});
app.get('/urano.html', (req, res) => {
//localhost:4000

    res.render('sistemasolar/urano'); // renderiza la vista index.ejs
    console.log('corriendo proyecto');
});

app.get( '/venus.html', (req, res) => {
//localhost:4000 

    res.render('sistemasolar/venus'); // renderiza la vista index.ejs
    console.log('corriendo proyecto');
});
app.get('/sistema%20solar.html', (req, res) => {
    res.render('sistemasolar/sistema-solar'); // renderiza la vista index.ejs
    console.log('corriendo proyecto');
});

const server = app.listen(4000, function () {
    console.log('Servidor escuchando en el puerto 4000');
    console.log('hola mundo');
});