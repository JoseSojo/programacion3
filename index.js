'use strict';

const express = require('express');
const path = require('path');
const ejs = require('ejs');


// Inicialization
const app = express();

// Settings
app.set('name', 'Programacion III - José Sojo')
app.set('port', process.env.PORT || 7070);
app.set('views', path.join(__dirname, '/public'));
app.set('template', path.join(__dirname, '/template'));
app.set('view engine', 'ejs');

// Global Variables
app.use((req, res, next) => {
  app.locals.server = app.get('name');
  // app.locals.success = req.flash('success');
  // app.locals.danger = req.flash('danger');
  // app.locals.user = req.user;
  next();
})

// Routes
app.use(require('./src/router/index.js'));

// Static Files
app.use(express.static(path.join(__dirname, '/assets/')))

// Starting the server
app.listen(app.get('port'), ()=>{
  console.log(`
      WELCOME TO SERVER ${app.get('name')}
      press [Ctrl] + [c] for exit server
      SERVER ON PORT ${app.get('port')}
    `)
})
