var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserItem = new Schema({
  first_name: {
    type: String,
    default: '',
    trim: true,
    required: true
  },
  last_name: {
    type: String,
    default: '',
    trim: true
  },
  avatar: {
    type: String,
    default: '',
    trim: true
  }
});

module.exports = mongoose.model('UserItem', UserItem);


