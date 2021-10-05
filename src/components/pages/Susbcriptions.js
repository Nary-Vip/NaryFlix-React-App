import React from 'react';
import "./Subscriptions.css";
import { Card} from 'react-bootstrap';
import mob from './mobile.jpg';
import desk from './desktop.jpg';

const Susbcriptions = () => {
    return (
        <div className="container cont">
            <Card className="movie-card" style={{ width: '18rem' }}>
                <h3 className="container">Mobile</h3>
                <Card.Img variant="top" src={mob} style={{width: "max-width", height: "150px"}}/>
                <Card.Body>
                    <Card.Text style={{ height: "6vw" }}>
                        Videos can be streamed in mobile.
                    </Card.Text>
                    <Card.Text>
                        price : 100
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="movie-card" style={{ width: '18rem' }}>
                <Card.Title style={{ height: "4vw" }}>Desktop</Card.Title>
                <Card.Img variant="top" src={desk} style={{width: "max-width", height: "150px"}}/>
                <Card.Body>
                    <Card.Text style={{ height: "6vw" }}>
                        Videos can be streamed accross any deice.
                    </Card.Text>
                    <Card.Text>
                        price : 1000
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Susbcriptions
