require('dotenv').config();

const express = require('express'); // express package installed
const workoutRoutes = require('./routes/workout')
const mongoose = require('mongoose')

const app = express() // function which we envoke that starts my app

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes [server responds]
app.use('/api/workouts', workoutRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT , () => {
        console.log('connected to db & listening on port', process.env.PORT)
    })

    })
    .catch((error) => {
        console.log(error)
    })


