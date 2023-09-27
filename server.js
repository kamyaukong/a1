/*
COMP229-017
File: server.js 
Student: Kam Yau Kong
Student ID: 301278310
Date: 23 Sep, 2023
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('./config/express');

const app = express();
app.listen(8080);

module.exports = app;
console.log('Server is running ...');