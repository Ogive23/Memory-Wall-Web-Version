import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

export class MemoryCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { memory , children} = this.props;
        return (
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={memory.image} />
                <Card.Body>
                    <Card.Title>{memory.title}</Card.Title>
                    <Card.Text>
                        {memory.author.toUpperCase()}
                    </Card.Text>
                    <Card.Subtitle>{children}</Card.Subtitle>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default MemoryCard
