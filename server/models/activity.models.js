const mongoose = require('mongoose')
const Schema = mongoose.Schema

const activitySchema = new Schema({
    name: {
        type: String,
        required: true,
        default: 'Desconocido',
        set: text => text.charAt(0).toUpperCase()+ text.substring(1)
    },
    description: {
        type: String
    },
    avatar: {        
        imageName: String,
        path: String,
        originalName: String,      
    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    record:[
        {
        capacity:{
            min: Number,
            max: Number
        },
        users:
            {
            type:[ Schema.Types.ObjectId ],
            ref: 'User', 
        }
    }],
    type:{
        name:[String],
        enum: ['ENDURANCE', 'STRENGTH', 'ANAEROBIC', 'AEROBIC']

    }
}, {
    timestamps: true
});

activitySchema.index({ location: '2dsphere' }) 
const Activity = mongoose.model('Activity', activitySchema)
module.exports = Activity