import React from 'react';
import { faHome, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Header() {
  return (
    <div className="header">
        <Navbar>
            <Navbar.Brand href="/">Mike McMillan</Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                    <Nav.Link href="/portfolio"><FontAwesomeIcon icon={faBook} /> Portfolio</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
  );
}

export default Header;