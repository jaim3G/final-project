import axios from 'axios'

export default class GymService {
    constructor(){
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api',
            withCredentials : true
        })
    }

    getActivities = () => this.apiHandler.get('/getAllActivities')
    getActivity = activityId => this.apiHandler.get(`/getOneActivity/${activityId}`)
    newActivity = activityInfo => this.apiHandler.post('/newActivity/', activityInfo)
    editActivity = activityInfo => {
        console.log({activityInfo})
        return this.apiHandler.put('/editActivity', activityInfo)}
    deleteActivity = activityInfo =>this.apiHandler.put('deleteActivity', activityInfo)
    joinClass = (user, activity) => this.apiHandler.post('/joinClass', {user, activity})
}