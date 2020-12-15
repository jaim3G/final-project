import React, { Component } from 'react'
import GymService from '../../../service/gym.service'
import FilesService from '../../../service/upload.service'
import Spinner from '../../shared/spinner/Loader'
import {  Form, Button} from 'react-bootstrap'

class ActivityForm extends Component {
    constructor(){
        super()
        this.state= {
            activity: {
                name: '',
                description: '',
                instructor: '',
                capacity: '',
                type: '',
                avatar: ''
            },
            uploadingActive: false
        }
        this.GymService = new GymService()
        this.FilesService = new FilesService()
    }
    handleInputChange = e => this.setState({ ...this.state.activity, activity: {[e.target.name]: e.target.value} })

    handleSubmit = e => {
        e.preventDefault()
        this.GymService
            .newActivity(this.state)
            .then(() => {
                this.props.updateList()
                this.props.closeModal()
                this.props.handleToast(true, 'Activity created successfully!')
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
                activity: {...this.state.activity, avatar: res.data.secure_url},
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
                    <Form.Control type="text" placeholder="Enter activity name" value={this.state.activity.name} onChange={this.handleInputChange} name="name"/>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" value={this.state.activity.description} onChange={this.handleInputChange} name="description"/>
                </Form.Group>
                <Form.Group controlId="instructor">
                    <Form.Label>Instructor</Form.Label>
                    <Form.Control type="text" placeholder="Enter instructor" value={this.state.activity.instructor} onChange={this.handleInputChange} name="instructor"/>
                </Form.Group>
                <Form.Group controlId="capacity">
                    <Form.Label>Class capacity</Form.Label>
                    <Form.Control type="number" placeholder="Enter class capacity" value={this.state.activity.capacity} onChange={this.handleInputChange} name="capacity"/>
                </Form.Group>
                <Form.Group controlId="type">
                    <Form.Label>Type</Form.Label>
                    <Form.Control type="text" placeholder="Enter type: [AEROBIC, ANAEROBIC, ENDURANCE, STRENGTH]" value={this.state.activity.type} onChange={this.handleInputChange} name="type"/>
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

export default ActivityForm
