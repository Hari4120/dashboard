import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Paper } from '@mui/material';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className='user-page'>
    <Container className="user-profile">
      <Row className="justify-content-center">
        <Col md={8} className="profile-container">
          <Paper className="profile-box" elevation={3}
          style={{ background: 'rgba(255, 255, 255, 0.2)' , borderRadius: '8px', }}>
            <Row>
              <Col md={4} className="profile-pic-container">
                <img src="/path/to/profile-pic.jpg" alt="Profile" className="profile-pic" />
              </Col>
              <Col md={8}>
                <Form>
                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" />
                  </Form.Group>
                  <Button variant="primary" type="submit">Update Profile</Button>
                </Form>
              </Col>
            </Row>
          </Paper>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default UserProfile;
