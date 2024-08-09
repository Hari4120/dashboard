import React from 'react';
import { Container, Row, Col, Card, Button,Nav } from 'react-bootstrap';
import './Dashboard.css'; // Specific CSS for Dashboard

const Dashboard = () => {
  return (
    <div className='div'>
    <header className='header'>
      <h1 className='header1'> <Nav.Link href="/">Dashboard</Nav.Link></h1>
    </header>
    <Container fluid className="dashboard-container">
      <Row className="vh-100">
        <Col xs={12} className="ml-auto">
          <div className="d-flex justify-content-center align-items-center h-100">
            <Row>
              <Col md={4}>
                <Card className="mb-3 animate__animated animate__fadeInUp colorful-card">
                  <Card.Body>
                    <Card.Title>Welcome to the Dashboard</Card.Title>
                    <Card.Text>
                      Here you can manage your account, view notifications, and more.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 animate__animated animate__fadeInUp colorful-card">
                  <Card.Body>
                    <Card.Title>Recent Activity</Card.Title>
                    <Card.Text>
                      Check your recent activity and interactions here.
                    </Card.Text>
                    <Button variant="secondary">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="mb-3 animate__animated animate__fadeInUp colorful-card">
                  <Card.Body>
                    <Card.Title>Upgrade Your Plan</Card.Title>
                    <Card.Text>
                      Explore additional features by upgrading your plan.
                    </Card.Text>
                    <Button variant="success">Upgrade Now</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Dashboard;