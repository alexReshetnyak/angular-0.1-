var express = require('express'),
    router  = express.Router(),
    favoritesController  = require("../../server/controllers/favoritesController");

router.get('/getFilmsFromMdb', favoritesController.getFilmsFromMdb);
router.post('/saveFilm', favoritesController.saveFilm);
router.post('/deleteFilm', favoritesController.deleteFilm);


module.exports = router;