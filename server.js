const express = require('express');
const path = require('path');
const app = express();

const swig = require('swig');
swig.setDefaults({ cache: false });

app.set('view engine', 'html');
app.engine('html', swig.renderFile);


app.use('/vendor', express.static(path.join(__dirname, 'node_modules')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next)=> res.render('index', { API_KEY: process.env.API_KEY}));

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on ${port}`));
