import React, { Component } from 'react'
import gymService from '../../../service/gym.service'
import Spinner from '../../shared/spinner/Loader'
import FilesService from '../../../service/upload.service'
import { Container, Form, Button, Col, Row} from 'react-bootstrap'
import Alert from '../../shared/Alert/Alert'

class ActivityEditForm extends Component {
    constructor(){
        super()
        this.state= {
                
            showToast: false,
            toastText: '',
            name: '',
            description: '',
            instructor: '',
            capacity: '',
            type: '',
            avatar: ''
            
        }
        this.gymService= new gymService()
        this.FilesService = new FilesService()
    }



    handleInputChange = e => this.setState({ ...this.state,[e.target.name]: e.target.value} )

    handleSubmit = e => {
        e.preventDefault()
        
        let data= {
            name:this.state.name,
            details: this.state.description,
            instructor: this.state.instructor,
            avatar: this.state.avatar,
            capacity: this.state.capacity,
            type: this.state.type

        }

        this.gymService 
            .editActivity(data)
            .then(res => {
                this.setState({
                    toastText:"Activity editted successfully!",
                    showToast: true
                },this.resetForm())
            })
            .catch(() => {
                this.setState({
                    toastText:"Error while editing the activity, please try agian ",
                    showToast: true
                })
            })
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

    resetForm = () => {
        this.setState({   
            showToast: false,
            toastText: '',
            name: '',
            description: '',
            instructor: '',
            capacity: '',
            type: '',
            avatar: ''
        })
    }

    handleToast= (visible, text) => this.setState({showToast: visible, toastText: text})


    render(){
        return (
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

                <Alert show={this.state.showToast} handleToast = {this.handleToast} toastText={this.state.toastText}/>
            </>
        )
    }
    
}

export default ActivityEditForm