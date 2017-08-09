const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    require: [true, 'Nama tidak boleh kosong']
  },
  username: {
    type: String,
    require: [true, 'Username tidak boleh kosong']
  },
  password: {
    type: String,
    require: [true, 'password tidak boleh kosong']
  },
  email: {
    type: String,
    require: [true, 'Email tidak boleh kosong']
  },
  userIdFb: {
    type: String
  },
  salt: {
    type: String,
    require: [true, 'Salt tidak boleh kosong']
  }
}, {
  timestamps: true
})

const User = mongoose.model('User', userSchema);

module.exports = User;
