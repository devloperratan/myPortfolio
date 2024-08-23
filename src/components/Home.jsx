import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Portfolio from './Portfolio';
import PortfolioSlider from './PortfolioSlider';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Skills from './Skills';
import OverView from './OverView';
import '../App.css'
import ToolsSoftware from './ToolsSoftware';

const Home = () => {
    return (
        <div className='portfolio-main'>
            <Container className='hero'>
                <Col>
                    <h1 className="lead"><span>Hello , I'm</span> Ratan
                    </h1>
                    <span>
                        <h4>I am a MERN Stack Developer and WordPress Developer.</h4>
                    </span>
                </Col>
            </Container>


            <OverView />

            <Skills />
            <ToolsSoftware />
            <div className="portfolio">
                <h1>Portfolio</h1>
                <PortfolioSlider />
                <Link to='/portfolio'>More</Link>
            </div>
        </div>
    );
}

export default Home;
