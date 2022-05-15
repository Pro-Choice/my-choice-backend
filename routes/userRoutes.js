const express = require("express");
const UsersContoller = require('../controllers/usersController');
const router = express.Router();

router.get('/users', UsersContoller.getUsers)

router.get('/users/:id', UsersContoller.getSingleUser)

router.post('/users', UsersContoller.createUser)

// router.put('/:id', UsersContoller.updateUser)

// router.delete('/:id', UsersContoller.deleteUser)

module.exports = router;