import React, { Component } from 'react'
import {Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from './logo.jpg'
import AuthService from './../../../service/auth.service'



class Navigation  extends Component {

    constructor(){
        super()
        this.state ={

        }
        this.AuthService = new AuthService()
    }

    logOut = () => {
        this.AuthService
        .logout()
        .then(() => this.props.storeUser(undefined))
        .catch(err => console.log(err))
    }

    render(){

    return(
     <Navbar className="bg-light justify-content-between" expand="sm" >
     <Link to="/">
        <Navbar.Brand>
        <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />{' '}Iron Gym_</Navbar.Brand>
            </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Link to="/">
            <Nav.Link as="div">Home</Nav.Link>
            </Link>
            <Link to="/activities">
            <Nav.Link as="div">Activities</Nav.Link>
            </Link>
            <Link to="/team">
            <Nav.Link as="div">Team</Nav.Link>
            </Link>
            {this.props.loggedUser ?
                <Nav.Link onClick={this.logOut}>Log out</Nav.Link>
                :
                <>
            <Link to="/login">
            <Nav.Link as="div">Log in</Nav.Link>
            </Link>
            </>
            }
            <Link to="#">
            <Nav.Link as="div">{this.props.loggedUser ? `Welcome, ${this.props.loggedUser.name}` : 'Welcome, Guest'}</Nav.Link>
            </Link>
            <Link to="/contact">
            <Nav.Link as="div">Contact Us</Nav.Link>
            </Link>
            </Nav>
        </Navbar.Collapse>
</Navbar>
)
}
}

export default Navigation