import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../Styles/About.css'; // Stil dosyası ekleyebilirsiniz.

const About = () => {
  return (
    <section id="about-us" className="py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <div className="text-center mb-4">
              <h2 className="section-title">About Us</h2>
              <div className="section-title-underline"></div>
            </div>
            <p className="about-us-text">
              Welcome to our online store! We are passionate about delivering high-quality products to your
              doorstep and providing you with the best shopping experience.
            </p>
            <p className="about-us-text">
              At our E-commerce site, we offer a diverse range of products, from the latest fashion trends to
              electronic gadgets and home essentials.
            </p>
            <p className="about-us-text">
              Our dedicated team is committed to customer satisfaction. We believe in building long-lasting
              relationships with our customers, and your trust is our top priority.
            </p>
            <p className="about-us-text">
              As we grow, we strive to stay ahead in technology and trends. Our website is designed to provide a
              seamless and secure shopping experience, making it easy for you to find and purchase your favorite
              products.
            </p>
            <p className="about-us-text">
              Thank you for choosing us for your online shopping needs. For any questions or feedback, please
              feel free to contact our customer support team. We look forward to serving you and making your
              shopping experience exceptional.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
