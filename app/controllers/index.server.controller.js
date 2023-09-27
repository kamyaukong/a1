/* 
COMP229-017
File: index.server.controller.js 
Student: Kam Yau Kong
Student ID: 301278310
Date: 23 Sep, 2023
*/
const fs = require('fs');
const path = require('path');

exports.renderHome = (req, rep, next) => {
    rep.render('index', {
        title: 'Home'
    });
}

exports.renderAboutMe = (req, rep) => {
    rep.render('about', {
        title: 'About ME'
    });
}

exports.renderProjects = (req, rep) => {
    rep.render('projects', {
        title: 'Projects'
    });
}

exports.renderServices = (req, rep) => {
    rep.render('services', {
        title: 'Services Offer'
    });
}

exports.renderContactMe = (req, rep) => {
    rep.render('contactme', {
        title: 'Contact Me'
    });
}

exports.handleSubmitForm = (req, res) => {
    const { firstName, lastName, contactNumber, email, message } = req.body;
    
    // Log the information to a file
    const logMessage = 'Received contact form data: ${firstName}, ${lastName}, ${contactNumber}, ${email}, ${message}\n';
    fs.appendFile(path.join(__dirname, '../logs/contactLogs.txt'), logMessage, (err) => {
        if(err) {
            console.log('Error writing to file', err);
        }
    });

    res.render('thankyou');
};