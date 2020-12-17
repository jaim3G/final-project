import React, { Component } from 'react'
import GymService from '../../../service/gym.service'

import ActivityCard from './ActivityCard'
import Loader from '../../shared/spinner/Loader'
import { Container, Row, Button} from 'react-bootstrap'
import ActivityForm from './../Activity-form/Activity-form'
import './activity-list.css'
import Alert from '../../shared/Alert/Alert'
import Popup from '../../shared/Popup/Popup'
import ActivityDetails from '../Activity-details/Activity-details-popup'
import ActivityEditForm from '../Activity-form/Activity-edit'

class ActivityList extends Component {
    constructor(){
        super()
        this.state= {
            activities: undefined,
            showCreateModal: false,
            showDetailsModal: false,
            showEditModal: false,
            detailsModalInfo: undefined,
            editModalInfo: undefined,
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

    handleCreateModal = (visible) => this.setState({ showCreateModal: visible})

    handleDetailsModal = (visible, info) => {
        this.setState({ showDetailsModal: visible, detailsModalInfo: info})
    }
    handleEditModal = (visible, info) => {
        
        this.setState({ showEditModal: visible, editModalInfo: info})
        
        
    }

    handleDelete = (info) => {
        this.GymService 
        .deleteActivity(info)
        .then(() => this.refreshActivities())
        .catch(err => console.log('deletion error: ', err))
    }
    
    handleToast= (visible, text) => this.setState({showToast: visible, toastText: text})

    render(){
        return(
            <>
            <div className="activity-list">
            <Container className="activity-list">
            <h1>Listado de actividades</h1>
                <Row>
                {this.state.activities ? this.state.activities.map(elm => <ActivityCard key={elm._id} {...elm} user={this.props.user} openDetailsModal={this.handleDetailsModal} openEditModal={this.handleEditModal} deleteButton = {this.handleDelete} />) : <Loader/>}
            
                </Row>
                
                <Row>
                    {this.props.user ? this.props.user.role === "ADMIN" ? <Button variant="dark" size="sm" onClick={() => this.handleCreateModal(true)}>Add a new activity</Button> : null : null }
                </Row>

            </Container>

                <Popup show={this.state.showDetailsModal} handleModal={this.handleDetailsModal} title='Activity Details'>
                <ActivityDetails activityDetailsInfo={this.state.detailsModalInfo} handleToast={this.handleToast} closeModal={() => this.handleDetailsModal(false, undefined)} updateList={this.refreshActivities} user={this.props.user}/>
                </Popup>

                <Popup show={this.state.showEditModal} handleModal={this.handleEditModal} title='Edit Activity'>
                <ActivityEditForm activityEditInfo={this.state.editModalInfo} handleToast={this.handleToast} closeModal={() => this.handleEditModal(false, undefined)} updateList={this.refreshActivities} user={this.props.user}/>
                </Popup>

                <Popup show={this.state.showCreateModal} handleModal={this.handleCreateModal} title='New Activity Form'>
                <ActivityForm handleToast={this.handleToast} closeModal={() => this.handleCreateModal(false)} updateList={this.refreshActivities}/>
                </Popup>

            <Alert show={this.state.showToast} handleToast = {this.handleToast} toastText={this.state.toastText}/>
            
</div>
      </>
        )
    }
}

export default ActivityList
