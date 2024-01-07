import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../Styles/Contact.css'; // Stil dosyası ekleyebilirsiniz.

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="text-center mb-4">
              <h2 className="section-title">Contact Us</h2>
              <div className="section-title-underline"></div>
            </div>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Your Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
