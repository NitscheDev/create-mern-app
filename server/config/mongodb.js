const mongoose = require('mongoose')

const connectDB = (mongo_uri) => {
    mongoose.connect(mongo_uri || '').catch(error => {
        console.log(error)
    })
    console.log('MongoDB Connected...')
}

module.exports = { connectDB }