const express = require('express');
const bp = require('body-parser');

const app = express();

app.use(bp.json({limit: '10mb'}));
app.use(bp.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static('public'));

const cliente_route = require('../src/routes/cliente');
const funcionario_route = require('../src/routes/funcionario');

app.use('/cliente', cliente_route);
app.use('/funcionario', funcionario_route);

app.use('/', (req, res) => {
   return res.send('renderizou legal'); // return res.render('login');
});


module.exports = app;