/*
THIS IS A TEMPLATE MODEL AND IS NOT IN USE
*/
const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('users', User)