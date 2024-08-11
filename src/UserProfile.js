import React,{useRef} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Paper } from '@mui/material';
import R from './R.png';
import './UserProfile.css';

const UserProfile = () => {
  const fileInputRef = useRef(null);

  const handleProfilePicClick = () => {
    fileInputRef.current.click();
  };
  const handleEditPicClick = () => {
    fileInputRef.current.click();
  };


  return (
    <div className='user-page'>
      <h3 classname="heading">Manage Profile</h3>
    <Container className="user-profile">
      <Row className="justify-content-center">
        <Col md={8} className="profile-container">
          <Paper className="profile-box" elevation={3}
          style={{ background: 'rgba(255, 255, 255, 0.2)' , borderRadius: '8px', }}>
            <Row>
              <Col md={4} className="profile-pic-container">
                <img src={R} alt="Profile" className="profile-pic" onClick={handleProfilePicClick}/>
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={(e) => console.log(e.target.files[0])}
                  />
                  <Button
                    className="edit-pic-button"
                    variant="secondary"
                    onClick={handleEditPicClick}
                  >
                  Edit ✎
                  </Button>
              </Col>
              <Col md={8}>
                <Form>
                <Row>
                    <Col md={6}>
                      <Form.Group controlId="formBasicFirstName">
                        <Form.Label className="form-label">First Name</Form.Label>
                        <Form.Control className="form-control" type="text" placeholder="Enter your first name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formBasicLastName">
                         <Form.Label className="form-label">Last Name</Form.Label>
                         <Form.Control className="form-control" type="text" placeholder="Enter your last name" />
                      </Form.Group>
                    </Col>
                </Row>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="user_name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="e.g. +1-444-666-8834" />
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
