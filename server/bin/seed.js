const mongoose = require('mongoose')

const User = require('../models/user.models')
const Activity = require('../models/activity.models')

mongoose.connect('mongodb://localhost/final-project-gym')
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
        avatar:'https://www.soycorredora.com/wp-content/uploads/2020/03/intro-to-spinning-and-indoor-cycling-835x557-1.jpg',
        record:[{
            capacity:{
                current: 6,
                max: 26
            }
        }],
        type: ['AEROBIC', 'ENDURANCE'],
        instructor: 'Mike Wazowski'
    },
    {
        name: 'Pilates',
        description: 'Stretch and strengthen the body at the same time!',
        avatar:'https://tribepilatesstudio.com/wp-content/uploads/2019/09/Right-Pilates-Class.png',
        record:[{
            capacity:{
                current: 4,
                max: 12
            }
        }],
        type: ['AEROBIC', 'STRENGTH', 'ENDURANCE'],
        instructor: 'Jason Garcia'
    },
    {
        name: 'Shadow Boxing',
        description: 'Practice technique while getting a great workout',
        avatar:'https://image.shutterstock.com/image-photo/sportswoman-training-boxing-moves-studio-260nw-1464709766.jpg',
        record:[{
            capacity:{
                current: 10,
                max: 18
            }
        }],
        type: ['AEROBIC', 'ENDURANCE', 'STRENGTH'],
        instructor: 'Mike Wazowski'
    },
    {
        name: 'Zumba',
        description: 'Dance away those extra calories!',
        avatar:'https://images-na.ssl-images-amazon.com/images/S/sgp-catalog-images/region_US/jo3wh-RKXRBZCQ86M-Full-Image_GalleryBackground-en-US-1583439332315._SX1080_.jpg',
        record:[{
            capacity:{
                current: 20,
                max: 24
            }
        }],
        type: ['AEROBIC', 'ENDURANCE'],
        instructor: 'Mike Wazowski'
    },
    {
        name: 'Jump Squad',
        description: 'Join us in this session with all sorts of jumping excercises that will help you improve your leg faster than anything else',
        avatar:'https://www.piedmont.org/media/BlogImages/anaerobic-exercise.jpg',
        record:[{
            capacity:{
                current: 12,
                max: 16
            }
        }],
        type: ['ANAEROBIC', 'ENDURANCE', 'STRENGTH'],
        instructor: 'Ralph Lothbrok'
    },
    {
        name: 'Power Lifting',
        description: 'Power Lifting with the best instructors! Grow yourself in a supervised environment with tips from our instructors',
        avatar:'https://cf.ltkcdn.net/exercise/images/orig/232511-1600x1030-anaerobic-exercise-7-high-intensity-examples.jpg',
        record:[{
            capacity:{
                current: 6,
                max: 8
            }
        }],
        type: ['ANAEROBIC', 'ENDURANCE', 'STRENGTH'],
        instructor: 'Ralph Lothbrok'
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
        console.log(`Created ${allActivitiesCreated.length} activities`)
        mongoose.connection.close()
    })
    .catch(err => next(new Error(err)))