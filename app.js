const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const clientRoute = require('./routes/client');
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'})); 

app.use('/api', clientRoute)

module.exports = app;