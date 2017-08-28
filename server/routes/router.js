var express = require('express'),
    router  = express.Router(),
    userController  = require("../../server/controllers/userController");

router.get('/api/api', userController.testApi);
router.get('/api/users', userController.getUsersList);
router.get('/api/users/:db_id', userController.getUserById);
router.get('/api/users/name', userController.getUserByName);
router.post('/api/users', userController.createUser);
router.put('/api/users/:db_id', userController.updateUserById);
router.delete('/api/users/:db_id', userController.deleteUser);


module.exports = router;