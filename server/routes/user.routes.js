const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Rutas 
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', userController.getUserInfo);

module.exports = router;