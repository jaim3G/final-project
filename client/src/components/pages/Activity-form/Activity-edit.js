import React, { Component } from 'react'
import GymService from '../../../service/gym.service'
import FilesService from '../../../service/upload.service'
import Spinner from '../../shared/spinner/Loader'
import {  Form, Button} from 'react-bootstrap'

class ActivityEditForm extends Component {
    constructor(props){
        super(props)
        this.state= {
                id: props.activityEditInfo._id,
                name: '',
                description: '',
                instructor: '',
                capacity: '',
                type: '',
                avatar: '',
             uploadingActive: false
        }
        this.gymService = new GymService()
        this.FilesService = new FilesService()
    }
    handleInputChange = e => this.setState({[e.target.name]: e.target.value} )

    componentDidMount = () => {
        const { name, description, instructor, capacity, type, avatar } = this.props.activityEditInfo
        this.setState({name, description, instructor, capacity, type, avatar})
    }

    handleSubmit = e => {
        console.log(this.state)
        e.preventDefault()
        this.gymService
            .editActivity(this.state)
            .then(() => {
                this.props.updateList()
                this.props.closeModal()
                this.props.handleToast(true, 'Activity edited successfully!')
            })
            .catch(err => console.log(err))
    }

    handleImageUpload = e => {

        const uploadData = new FormData()
        uploadData.append('avatar', e.target.files[0])

        this.setState({uploadingActive: true})

        this.FilesService  
            .uploadImage(uploadData)
            .then(res => this.setState({
             avatar: res.data.secure_url,
                uploadingActive: false
            }))
            .catch(err => console.log(err))
    }



    render(){
        return(
            <>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                    <Form.Label>Activity name</Form.Label>
                    <Form.Control type="text" placeholder="Enter activity name" value={this.state.name} onChange={this.handleInputChange} name="name"/>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" value={this.state.description} onChange={this.handleInputChange} name="description"/>
                </Form.Group>
                <Form.Group controlId="instructor">
                    <Form.Label>Instructor</Form.Label>
                    <Form.Control type="text" placeholder="Enter instructor" value={this.state.instructor} onChange={this.handleInputChange} name="instructor"/>
                </Form.Group>
                <Form.Group controlId="capacity">
                    <Form.Label>Class capacity</Form.Label>
                    <Form.Control type="number" placeholder="Enter class capacity" value={this.state.capacity} onChange={this.handleInputChange} name="capacity"/>
                </Form.Group>
                <Form.Group controlId="type">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter type: [AEROBIC, ANAEROBIC, ENDURANCE, STRENGTH]" value={this.state.type} onChange={this.handleInputChange} name="type"/>
                </Form.Group>
                <Form.Group controlId="avatar">
                    <Form.Label>Image {this.state.uploadingActive && <Spinner />}</Form.Label>
                    <Form.Control type="file" placeholder="Upload image" onChange={this.handleImageUpload} name="avatar"/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={this.state.uploadingActive}>{this.state.uploadingActive ? 'Uploading image...': 'Submit'}</Button>
                </Form>
</>
        )
    }
}

export default ActivityEditForm
