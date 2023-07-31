//import required package
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

//import routes
const routes = require('./routes/appRoutes')

//middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use(cors())
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use('/record', routes)
 
//connect to mongodb
mongoose.connect("mongodb+srv://bkumar0823:alh84001@cluster0.0feyyb3.mongodb.net/")
    .then(() => {
        app.listen(8000, () => {
            console.log("server is running on port number ", 8000)
        })
        console.log("MongoDB connected")
    })
    .catch(err => {
        console.log(err)
    })
