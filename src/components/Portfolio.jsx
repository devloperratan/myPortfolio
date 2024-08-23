import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import PortFolio1 from '../../public/portfolio/brocode.png'
import PortFolio2 from '../../public/portfolio/Charter.png'
import PortFolio3 from '../../public/portfolio/dappledh.png'
import PortFolio4 from '../../public/portfolio/sacdez.png'
import '../App.css'
const Portfolio = () => {

    const projects = [
        { title: 'BroCode & Design', description: 'Description of Project 1', imgSrc: './public/portfolio/brocode.png' },
        { title: 'Dappled History', description: 'Description of Project 2', imgSrc: './public/portfolio/dappledh.png' },
        { title: 'SACDEZ', description: 'Description of Project 3', imgSrc: './public/portfolio/sacdez.png' },
        { title: 'Petals Drop', description: 'Description of Project 3', imgSrc: './public/portfolio/sacdez.png' },
        { title: 'Radha Marbles', description: 'Description of Project 3', imgSrc: './public/portfolio/radha.png' },
        { title: 'Charter Plants', description: 'Description of Project 3', imgSrc: './public/portfolio/charter.png' },
    ];

    return (
        <section id="portfolio" className="py-5">
            <Container>
                <h1 className="display-4 text-center mb-4">Portfolio</h1>
                <Row>
                    {projects.map((project, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={project.imgSrc} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <Button variant="primary">View Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Portfolio;
