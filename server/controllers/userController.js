const User = require('../models/user')
const genSalt = require('../helpers/generateSalt')

function getAllUser(req, res) {
  User.find({})
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

function getSpecifiedUser(req, res) {
  User.find({
    _id: req.params.id
  })
  .then(result => {
    res.status(200).send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getAllUser,
  getSpecifiedUser
}
