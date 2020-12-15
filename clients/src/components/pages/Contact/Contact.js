import React, { Component } from 'react'
import MailService from '../../../service/email.service'
import FilesService from '../../../service/upload.service'
import Spinner from '../../shared/spinner/Loader'
import { Container, Form, Button, Col, Row} from 'react-bootstrap'
import Alert from '../../shared/Alert/Alert'

class ContactForm extends Component {
    constructor(){
        super()
        this.state= {
                
            showToast: false,
            toastText: '',
            name: '',
            email:'',
            subject:'',
            message:'',
            sent: false
            
        }
        this.MailService= new MailService()
    }



    handleInputChange = e => this.setState({ ...this.state,[e.target.name]: e.target.value} )

    handleSubmit = e => {
        e.preventDefault()
        
        let data= {
            name:this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        }

        this.MailService  
            .sendMail(data)
            .then(res => {
                this.setState({
                    sent:true,
                    toastText:"Email sent successfully!",
                    showToast: true
                },this.resetForm())
            })
            .catch(() => {
                this.setState({
                    toastText:"Error while sending the email, please try agian ",
                    showToast: true
                })
            })
    }

    resetForm = () => {
        this.setState({
            name: '',
            email:'',
            subject:'',
            message:'',
            sent: false
        })
    }

    handleToast= (visible, text) => this.setState({showToast: visible, toastText: text})


    render(){
        return (
            <>
            <Container style={{margin: '60px'}}>
            <Row>
                <Col md={{ span: 6, offset: 3 }} >
                <h2 style={{display:'flex', justifyContent: 'center' }}>Contact Us</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" onChange={this.handleInputChange} name="name" value={this.state.name}/>
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="text" placeholder="Enter your email" onChange={this.handleInputChange} name="email" value={this.state.email} />
                </Form.Group>
                <Form.Group controlId="instructor">
                    <Form.Label>Subject:</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" onChange={this.handleInputChange} name="subject" value={this.state.subject} />
                </Form.Group>
                <Form.Group controlId="capacity">
                    <Form.Label>Message:</Form.Label>
                     <Form.Control as="textarea" rows={3} type="text" value={this.state.message} onChange={this.handleInputChange}  name="message"/>
                </Form.Group>
                <Button variant="primary" type="submit"> Submit</Button>
                </Form>
                </Col>
            </Row>
                </Container>

                <Alert show={this.state.showToast} handleToast = {this.handleToast} toastText={this.state.toastText}/>
            </>
        )
    }
    
}

export default ContactForm