/* 
COMP229-017
File: express.ejs 
Student: Kam Yau Kong
Student ID: 301278310
Date: 23 Sep, 2023
*/
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compress = require('compression')
const methodOverride = require('method-override');

module.exports = function () {
    const app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.use(methodOverride());
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    app.use('/', require('../app/routers/index.server.router'));
    app.use(express.static('./public'));
    app.use(express.static('./node_modules'));

    // Catch 404
    app.use((req, res, next) => {
        res.status(404).render('404');
    });
    
    return app;
}
