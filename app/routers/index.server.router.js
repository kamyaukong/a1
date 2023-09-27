/* 
COMP229-017
File: index.server.router.js 
Student: Kam Yau Kong
Student ID: 301278310
Date: 23 Sep, 2023
*/
const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.server.controller');

router.get('/', controller.renderHome);
router.get('/about', controller.renderAboutMe);
router.get('/projects', controller.renderProjects);
router.get('/services',controller.renderServices);
router.get('/contactme',controller.renderContactMe);
router.post('/submit_contact', controller.handleSubmitForm);

module.exports = router;