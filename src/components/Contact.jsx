import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
    return (
        <section id="contact" className="py-5">
            <Container>
                <h2 className="display-4 text-center mb-4">Contact</h2>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" required />
                    </Form.Group>
                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={4} placeholder="Your message" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100">Send</Button>
                </Form>
            </Container>
        </section>
    );
}

export default Contact;
