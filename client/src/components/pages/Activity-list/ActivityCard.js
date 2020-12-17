import { Col, Card, Button} from 'react-bootstrap'
import React, { Component } from 'react'
import './ActivityCard.css'


class ActivityCard extends  Component {
    
    constructor(){
        super()
        this.state={}
    }
    

    
    render(){
    return (
        <>
        <Col lg={4}>
            <Card className="activity-card card text-center">
                <Card.Img variant="top overflow" src={this.props.avatar} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <p className="card-text text-secondary"> {this.props.description}</p>
                       <Button variant="outline-success" onClick={ () => this.props.openDetailsModal(true, this.props)}> Ver detalles</Button>
                       { this.props.user ? this.props.user.role === 'ADMIN' ? <>
                           <Button  variant="outline-success" onClick={ () => this.props.openEditModal(true, this.props)}>Edit</Button> 
                       <Button variant="outline-success" onClick={ () => this.props.deleteButton(this.props)}>Delete</Button>  </> : null : null }
                </Card.Body>
            </Card>
        </Col>
        </>
    )
}
}

export default ActivityCard
