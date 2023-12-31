import React from 'react'
import {CardGroup, Card , Nav, Navbar,Form, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
    <div className='App' style = {{backgroundImage: 'linear-gradient(to bottom, #efefef, brown, #ffffff)' }}>
      {/* The navbar container */}
        <div className="navs">
        <Navbar bg="dark" data-bs-theme="dark">
          <Navbar.Brand href="#home" style = {{paddingLeft: '40px', fontSize: '50px'}}>Egonic</Navbar.Brand>
          <Nav className="me-auto" style = {{paddingLeft: '40px'}}>
            <Nav.Link href="#home" style = {{color: '#fff'}}>Home</Nav.Link>
            <Nav.Link href="#features" style = {{color: '#fff'}}>About</Nav.Link>
            <Nav.Link href="#pricing"  style = {{color: '#fff'}}>Features</Nav.Link>
          </Nav>
      </Navbar>
      </div>
      {/* The header container */}
      <div className="Header" style ={{textAlign: 'center'}}>
      <Navbar.Brand href="#home" style = {{fontSize: '40px', fontWeight: '600'}}>React-Bootstrap</Navbar.Brand>
      </div>
      {/* The card container */}
    <Container >
     <div className="card-container" style= {{margin: '60px'}}>
     <CardGroup>
      <Card style = {{marginRight: "30px", borderRadius: '20px',  border: 'none'}}>
        <Card.Img variant="top" src="image/rect.png" />
        <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text>
            Js library
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Declarative UI development using components</small>
        </Card.Footer>
      </Card>
      <Card style = {{marginRight: "30px", borderRadius: '20px',  border: 'none'}}>
        <Card.Img variant="top" src="image/react2.png" />
        <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text>
          Js library
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Declarative UI development using components</small>
        </Card.Footer>
      </Card>
      <Card style = {{borderRadius: '30px',  border: 'none'}}>
        <Card.Img variant="top" src="image/react1.png" />
        <Card.Body>
          <Card.Title>React</Card.Title>
          <Card.Text>
          Js library
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Declarative UI development using components</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    </Container>
    {/* Toggle switches using React Bootstrap Form.Check component*/}
    <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Check this switch"
      />
      <Form.Check 
        disabled
        type="switch"
        label="disabled switch"
        id="disabled-custom-switch"
      />
    </Form>


    </div>
    </>
  )
}

export default App