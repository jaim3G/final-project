const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Activity = require('../models/activity.models')
const User = require('../models/user.models')

router.get('/allActivities', (req, res) => {
    Activity
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.get('/getOneActivity/:activity_id', (req, res) => {
    Activity
        .findById(req.params.activity_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.post('/newActivity', (req, res) => {
    Activity
        .create(req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

router.put('/editActivity/:activity_id', (req, res) => {
    Activity
        .findByIdAndUpdate(req.params.coaster_id, req.body)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router