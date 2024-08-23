import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'
const toolsData = [
    { src: "./skills/vscode.png", alt: "VS Code" },
    { src: "./skills/ChatGPT.png", alt: "ChatGPT" },
    { src: "./skills/chrome.png", alt: "Chrome" },
    { src: "./skills/mongodbCompass.png", alt: "MongoDB Compass" },
    { src: "./skills/postman.png", alt: "Postman" },
];

function ToolsSoftware() {
    return (
        <Container className="toolsSoftware">
            <h3 className="text-white font-blackpy-5 mb-4">Tools and Software</h3>
            <Row>
                {toolsData.map((tool, index) => (
                    <Col xs={6} md={4} lg={2} key={index} className="mb-4">
                        <div className="tool-item">
                            <img src={tool.src} alt={tool.alt} className="img-fluid tool-image" />
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ToolsSoftware;
