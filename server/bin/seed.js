const mongoose = require('mongoose')

const User = require('../models/user.models')
const Activity = require('../models/activity.models')

mongoose.connect(DB_LOCAL)
User.collection.drop()

const users = [
    {
        username: 'Jaime',
        name: 'Jaime',
        lastName: 'Rodriguez',
        email: 'jaime@msn.es',
        password: 'jaime',
        role:'ADMIN'
    },
]

const activities = [
    {
        name: 'Indoor Spinning',
        description: 'Indoor Spinning with static bycicles and very loud music',
        type: ['AEROBIC', 'ENDURANCE']
    },
]

User
    .create(users)
    .then(allUsersCreated => {
        console.log(`Created ${allUsersCreated.length} users`)
        mongoose.connection.close()
    })
    .catch(err => next(new Error(err)))

Activity
    .create(activities)
    .then(allActivitiesCreated => {
        console.log(`Created ${allActivitiesCreated.length} games`)
        mongoose.connection.close()
    })
    .catch(err => next(new Error(err)))