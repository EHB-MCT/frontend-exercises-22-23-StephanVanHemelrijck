import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <Container fluid style={{ height: '100vh', display: 'flex' }}>
            {/* Sidebar */}
            <Sidebar />
            {/* Content Section */}
            <Col xs={9} style={{ padding: 0 }}>
                <Navigation />
                <Outlet />
            </Col>
        </Container>
    );
};

export default Home;
