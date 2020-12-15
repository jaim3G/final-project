import axios from 'axios'

export default class GymService {
    constructor(){
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/mail',
            withCredentials : true
        })
    }

    sendMail = mailInfo => this.apiHandler.post('/newMail/', mailInfo)
}