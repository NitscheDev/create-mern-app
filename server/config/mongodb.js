const mongoose = require('mongoose')

const connectDB = (mongo_uri) => {
    if (mongo_uri === '') return console.log(
        `No MongoDB credentials was found in .env file! -> MongoDB NOT Connected`
        )
    mongoose.connect(mongo_uri || '')
        .then(() => console.log('MongoDB Connected...'))
        .catch(error => console.log(error))
}

module.exports = { connectDB }