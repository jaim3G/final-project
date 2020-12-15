import axios from 'axios'

export default class AuthService {
    constructor(){
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/auth',
            withCredentials : true
        })
    }

    signup = (username, name, lastName, avatar, password, email) => this.apiHandler.post('/signup', {username, name, lastName, avatar, password, email})
    login = (credentials) => this.apiHandler.post('/login', credentials)
    logout = () => this.apiHandler.post('/logout')
    isLoggedIn = () => this.apiHandler.get('/loggedin')
    
}