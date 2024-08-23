import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Portfolio.css'
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const portfolio = [
    { title: 'BroCode & Design', description: 'Description of Project 1', imgSrc: './public/portfolio/brocode.png' },
    { title: 'Dappled History', description: 'Description of Project 2', imgSrc: './public/portfolio/dappledh.png' },
    { title: 'SACDEZ', description: 'Description of Project 3', imgSrc: './public/portfolio/sacdez.png' },
    { title: 'Petals Drop', description: 'Description of Project 4', imgSrc: './public/portfolio/sacdez.png' },
    { title: 'Radha Marbles', description: 'Description of Project 5', imgSrc: './public/portfolio/radha.png' },
    { title: 'Charter Plants', description: 'Description of Project 6', imgSrc: './public/portfolio/charter.png' },
];

function PortfolioSlider() {
    return (
        <Carousel responsive={responsive}>
            {portfolio.map(port => (
                <div className="portfo-card" key={port.index}>
                    <div className="portfo-image-wrapper">
                        <img className="portfo-image" src={port.imgSrc}
                            onClick={() => navigate(`/portfo/${port.id}`)} />
                    </div>
                    <h3>{port.title}</h3>
                    <p>{port.description}</p>
                </div>

            ))}
        </Carousel>
    );
}

export default PortfolioSlider;
