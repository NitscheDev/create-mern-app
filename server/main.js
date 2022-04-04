require('dotenv').config()
const express = require('express')
const { connectDB } = require('./config/mongodb')
const app = express()
const path = require('path')

//Middlewere
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//MongoDB
connectDB(process.env.MONGODB)

//Routes
app.use('/api', require('./routes/api.route'))

//Production Setup
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
    //catch all(*) routes after the api routes and serve the client index.html
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'))
    })
}

//Start Server
const port = process.env.PORT
app.listen(port, () => console.log(`Server running on http://localhost:${port}`))