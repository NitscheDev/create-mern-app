const mongoose = require('mongoose')
const mongo_uri = process.env.MONGODB || ''

const connectDB = (mongo_uri) => {
    if (mongo_uri === '') return console.log(
        `No MongoDB credentials was found in .env file! -> MongoDB NOT Connected`
        )
    mongoose.connect(mongo_uri || '').catch(error => {
        console.log(error)
    })
    console.log('MongoDB Connected...')
}

module.exports = { connectDB }