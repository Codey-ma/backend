const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.registerUser);
router.put('/:id', userController.updateUser);
router.post('/login', userController.loginUser);
router.post('/register', userController.registerUser);

module.exports = router;