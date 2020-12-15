import React, { Component } from 'react'
import GymService from '../../../service/gym.service'

import ActivityCard from '../Activity-list/ActivityCard'
import Loader from '../../shared/spinner/Loader'
import { Container, Row, Button, Col} from 'react-bootstrap'
import ActivityForm from '../Activity-form/Activity-form'
import Alert from '../../shared/Alert/Alert'
import Popup from '../../shared/Popup/Popup'


class Profile extends Component {
    constructor(props){
        super(props)
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
       // this.GymService
       // .getActivities()
        //.then(res => this.setState({activities: res.data}))
        //.catch(err => console.log(err))
    }

    handleModal = visible => this.setState({showModal: visible})
    handleToast= (visible, text) => this.setState({showToast: visible, toastText: text})
    
    render(){
        return(
            <>
            
            <Container>
            <Row>
            <Col md={8}>
                <h1>Welcome, {this.props.user.name}! </h1>
                <h3>You are currently enrolled in these activities</h3>
                    {console.log(this.props)}
                {this.props.user.activityList ?
                this.props.user.activityList.map(elm => <ActivityCard key={elm._id} {...elm} />) 
                : <Loader /> }
            </Col>
            </Row>
            </Container>

            </>
        )
    }
    
}

export default Profile