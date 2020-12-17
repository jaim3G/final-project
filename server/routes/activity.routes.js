const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Activity = require('../models/activity.models')
const User = require('../models/user.models')

router.post('/joinClass', (req, res) => {
    const userId = req.body.user
    const activityId = req.body.activity
    
    Activity
        .findByIdAndUpdate(activityId, {$push: {'users': userId}})
        .then(res => {
            console.log(res)
            return  User.findByIdAndUpdate(userId, {$push: {'activityList': activityId}})
        })
        .then(() => console.log('Activity registered'))
        .catch(err => console.log(err))
        
})

router.get('/getAllActivities', (req, res) => {
    Activity
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newActivity', (req, res) => {
    Activity
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



router.put('/editActivity', (req, res) => {
   console.log(req.body)
    Activity
        .findByIdAndUpdate(req.body.id, req.body, {new:true})
        .then(response => {
            console.log(response)
            return res.json(response)
        })
        .catch(err => res.status(500).json(err))
})

router.put('/deleteActivity', (req, res) => {
    console.log(req.body)
    Activity
        .findByIdAndDelete(req.body._id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



module.exports = router
