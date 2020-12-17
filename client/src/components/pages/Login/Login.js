import React, { Component } from 'react'
import AuthService from '../../../service/auth.service'
import { Link, Navbar, Nav } from 'react-router-dom' 

import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import Alert from '../../shared/Alert/Alert'

class Login extends Component {
    constructor(){
        super()
        this.state= {
            formInfo: {
                username: '',
                 password: ''
            },
            showToast: false,
            toastText: ''
            
        }
        this.AuthService = new AuthService()
    }
    handleInputChange = e => this.setState({ formInfo: {...this.state.formInfo, [e.target.name]: e.target.value}})

    handleSubmit = e => {
        e.preventDefault()

        this.AuthService
        .login(this.state.formInfo)
        .then(res => {
            this.props.storeUser(res.data)
            this.props.history.push('/') 
        })
        .catch(err => this.setState({showToast: true, toastText: err.response.data.message}))
    }

    handleToast= (visible, text) => this.setState({showToast: visible, toastText: text})


    render(){
        return(
            <>

            <Container style={{margin: '50px'}}>
                <Row>
                    <Col md={{span: 6, offset:3}}>
                    <h1>Log in</h1>
                    <hr />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={this.state.username} onChange={this.handleInputChange} name="username"/>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" value={this.state.password} onChange={this.handleInputChange} name="password"/>
                </Form.Group>
                <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit">Log in!</Button>
                <span >Not a member? <Link to="/signup" style={{marginLeft: '12px'}}>Sign up!</Link> </span>
                </div>
                
                </Form>
                    </Col>
                </Row>
            </Container> 

            <Alert show={this.state.showToast} handleToast = {this.handleToast} toastText={this.state.toastText}/>
                
                
</>
        )
    }
}

export default Login
