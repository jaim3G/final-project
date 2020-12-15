import { Col, Card, Button, ButtonGroup } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const ActivityCard = (props) => {
    return (
        <Col lg={4}>
            <Card className="activity-card">
                <Card.Img variant="top" src={props.avatar} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                        <Link className="btn btn-dark btn-block btn-sm" to={`/activities/${props._id}`}>View details</Link>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ActivityCard