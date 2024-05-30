import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div> <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src="/src/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header