const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteworkout,
    updateworkout
} = require('../controllers/workoutController')
const router = express.Router() // creates instance of the router so that we can use in other files

//Get all workouts
router.get('/',getWorkouts)

//get a single workout
router.get('/:id',getWorkout)

// POST a new workout
router.post('/', createWorkout)

//delete a workout
router.delete('/:id', deleteworkout)
// UPDATE a workout
router.patch('/:id', updateworkout)



module.exports = router