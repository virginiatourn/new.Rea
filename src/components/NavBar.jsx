import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

function navbarra () {
 return <>
  
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">mi Tienda</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Productos</Nav.Link>
    <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
    </Nav>
    </Container>
  </Navbar>

</>



export default navbarra;