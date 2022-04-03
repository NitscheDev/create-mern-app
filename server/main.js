require('dotenv').config()
const express = require('express')
const { connectDB } = require('./config/mongodb')
const app = express()

//Middlewere
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//MongoDB
connectDB(process.env.MONGODB)

//Routes
app.use('/api', require('./routes/api.route'))

//Start Server
const port = process.env.PORT
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))