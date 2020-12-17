import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'

import { Container, Row, Col, Form, Button} from 'react-bootstrap'

class Signup extends Component {
    constructor(){
        super()
        this.state= {
            username: '',
            name: '',
            lastName: '',
            avatar: '',
            email: '',
            password: ''
        }
        this.AuthService = new AuthService()
    }
    handleInputChange = e => this.setState({ [e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()

        this.AuthService
        .signup(this.state.username,this.state.name,this.state.lastName,this.state.avatar,this.state.email,this.state.password)
        .then(res => {
            this.props.storeUser(res.data)
            this.props.history.push('/') 
        })
        .catch(err => console.log(err))
    }


    render(){
        return(
            <>

            <Container style={{margin: '50px'}}>
                <Row>
                    <Col md={{span: 6, offset:3}}>
                    <h1>New member sign up form</h1>
                    <hr />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.handleInputChange} name="username"/>
                </Form.Group>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" value={this.state.name} onChange={this.handleInputChange} name="name"/>
                </Form.Group>
                <Form.Group controlId="lastName">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" value={this.state.lastName} onChange={this.handleInputChange} name="lastName"/>
                </Form.Group>
                <Form.Group controlId="avatar">
                    <Form.Label>Upload a picture for your profile</Form.Label>
                    <Form.Control type="text" placeholder="upload picture" value={this.state.avatar} onChange={this.handleInputChange} name="avatar"/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter your email" value={this.state.email} onChange={this.handleInputChange} name="email"/>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange} name="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">Sign in!</Button>
                </Form>
                    </Col>
                </Row>
            </Container>
                
                
</>
        )
    }
}

export default Signup
