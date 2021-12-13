import { Avatar } from '@mui/material';
import React, { Component } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';

export class MemoryCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { memory, children } = this.props;
        return (
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={memory.image} />
                <Card.Body>
                    <Card.Title>{memory.title}</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col xs={3}>
                                <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
                            </Col>
                            <Col xs={9}>
                                <Row className="font-weight-bold">{memory.author.toUpperCase()}</Row>
                                <Row className="font-weight-100">SOFTWARE ENGINEER</Row>
                                
                            </Col>
                        </Row>
                    </Card.Text>
                    <Card.Subtitle>{children}</Card.Subtitle>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default MemoryCard
