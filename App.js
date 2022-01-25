import logo from "./logo.svg";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import "./App.css";
import Formulaire from "./Form";
function App() {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            welcome to our site
                        </Nav>
                    </Container>
                </Navbar>
                <Formulaire />
                <br />
            </>
            
        </div>
    );
}

export default App;
