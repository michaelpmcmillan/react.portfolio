import React from 'react';
import { Link } from 'react-router-dom';
import { faHome, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

function Header() {
  return (
    <div class="header">
        <Grid fluid>
            <Row>
                <Col xs={1} md={1}>
                    <Link to="/" class="site-title">Mike McMillan</Link>
                </Col>
                <Col xs={1} md={1}>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                </Col>
                <Col xs={1} md={1}>
                    <Link to="/portfolio">
                        <FontAwesomeIcon icon={faBook} /> Portfolio
                    </Link>
                </Col>
            </Row>
        </Grid>
    </div>
  );
}

export default Header;