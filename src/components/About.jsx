import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css'
const About = () => {
    return (
        <section id="about" className="py-5">
            <Container>
                <h2 className="display-4">About Me</h2>
                <span>
                    <p>
                        Hello, I'm Ratan Singh, a dedicated MERN Stack Developer and WordPress Developer with a total of two years of experience in the tech industry. Over the past year, I've been actively working with React and WordPress, gaining valuable skills in building dynamic web applications and customizing websites to meet diverse needs.
                    </p>

                    <p>Currently, I am expanding my expertise with advanced training at Ducat India, focusing on the MERN Stack. This training is enhancing my capabilities in developing sophisticated applications using MongoDB, Express.js, React, and Node.js. Additionally, my experience with WordPress allows me to create and tailor themes and plugins for a wide range of clients.</p>

                    <p>My goal is to combine my development skills with a passion for innovative design to create exceptional digital experiences. I am always eager to embrace new challenges and stay updated with the latest industry trends to continuously improve and adapt.</p>
                    <p>Alongside my development work, I am also involved in SAP B1, and Angular, which adds a unique dimension to my skill set. My aim is to continuously grow and evolve in my career, leveraging my skills and experiences to become a specialist in my field. I am passionate about embracing new challenges and staying abreast of the latest industry trends to deliver exceptional solutions.</p>
                    <p>When I'm not coding, you can find me exploring new technologies, working on personal projects. I look forward to connecting with like-minded professionals and taking on exciting projects that push the boundaries of what's possible.
                    </p>
                </span>
            </Container>
        </section>
    );
}

export default About;
