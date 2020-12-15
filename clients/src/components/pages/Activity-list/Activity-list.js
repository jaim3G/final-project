import React, { Component } from 'react'
import GymService from '../../../service/gym.service'

import ActivityCard from './ActivityCard'
import Loader from '../../shared/spinner/Loader'
import { Container, Row, Button} from 'react-bootstrap'
import ActivityForm from './../Activity-form/Activity-form'
import './activity-list.css'
import Alert from '../../shared/Alert/Alert'
import Popup from '../../shared/Popup/Popup'

class ActivityList extends Component {
    constructor(){
        super()
        this.state= {
            activities: undefined,
            showModal: false,
            showToast: false,
            toastText: ''

        }
        this.GymService = new GymService()
    }

    componentDidMount = () => this.refreshActivities()

    refreshActivities = () => {
        this.GymService
        .getActivities()
        .then(res => this.setState({activities: res.data}))
        .catch(err => console.log(err))
    }

    handleModal = visible => this.setState({showModal: visible})
    handleToast= (visible, text) => this.setState({showToast: visible, toastText: text})
    render(){
        return(
            <>
            <Container>
            <h1>Listado de actividades</h1>
                <Row>
                {this.state.activities ? this.state.activities.map(elm => <ActivityCard key={elm._id} {...elm} user={this.props.user}/>) : <Loader/>}
                <Popup show={this.state.showModal} handleModal={this.handleModal} title='New Activity Form'>
                <ActivityForm handleToast={this.handleToast} closeModal={() => this.handleModal(false)} updateList={this.refreshActivities}/>
                </Popup>
                </Row>
                
                <Row>
                    {this.props.user ? this.props.user.role === "ADMIN" ? <Button variant="dark" size="sm" onClick={() => this.handleModal(true)}>Add a new activity</Button> : null : null }
                </Row>

            </Container>
                
                <Popup show={this.state.showModal} handleModal={this.handleModal} title='New Activity Form'>
                <ActivityForm handleToast={this.handleToast} closeModal={() => this.handleModal(false)} updateList={this.refreshActivities}/>
                </Popup>
                

            <Alert show={this.state.showToast} handleToast = {this.handleToast} toastText={this.state.toastText}/>
            

      </>
        )
    }
}

export default ActivityList
