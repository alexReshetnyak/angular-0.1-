var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FavoriteFilm = new Schema({
  filmId: {
    type: String,
    default: '',
    trim: true,
    required: 'Film id couldn\'t be empty'
  },
  status: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('FavoriteFilm', FavoriteFilm);


