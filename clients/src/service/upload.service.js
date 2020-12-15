import axios from 'axios'

export default class FilesService {
    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/files',
            withCredentials: true
        })
    }

    uploadImage = imageForm => {
        console.log('En el servicio upload: ')
       return this.apiHandler.post('/upload', imageForm)

}
}