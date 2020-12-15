import React, { Component } from 'react'
import GymService from '../../../service/gym.service'
import './Activity-details.css'
import Loader from '../../shared/spinner/Loader'

import { Container, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

class ActivityDetails extends Component {
    constructor(){
        super()
        this.state= {
            activity: undefined
        }
        this.GymService = new GymService()
    }

    componentDidMount = () => {

        const activity_id = this.props.match.params.activity_id
        this.GymService
        .getActivity(activity_id)
        .then(res => this.setState({activity: res.data}))
        .catch(err => console.log(err))
    }

    signClass = () => {
        console.log('Activity ID: ',this.state.activity._id)
        console.log('User ID: ', this.props.user._id)
        this.GymService
        .joinClass(this.props.user._id, this.state.activity._id)
        .then(() => console.log('sign up complete!'))
        .catch(err => console.log(err))
    }

    render(){
        
        return(
            <Container className="activity-details">

            {this.state.activity 
            ? 
            <>
            <h1>{this.state.activity.name}</h1> 
            <Row>
                <Col md={{span: 6, offset: 1}}>
                    <img src={this.state.activity.avatar} alt={this.state.activity.name}/>
                </Col>
                <Col md={3}>
                    <h3>Instructor: {this.state.activity.instructor}</h3>
                    <p>{this.state.activity.description}</p>
                    <Button className="btn btn-dark" onClick={this.signClass}>Join</Button>
                </Col>
            </Row>
            </>


            :
            <Loader/>
            }
            
            
            </Container>
        )
    }
}

export default ActivityDetails
