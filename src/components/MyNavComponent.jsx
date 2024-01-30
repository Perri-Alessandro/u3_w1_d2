import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const MyNav = (props) => (
  <Navbar expand="lg" className="bg-black ">
    <Container className="">
      <Navbar.Brand className="text-white" href="#">
        {props.title} - Restaurant
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link className="text-white" href="#">
            Home
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            About
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            Broswe
          </Nav.Link>

          <NavDropdown
            title="Our Services"
            id="basic-nav-dropdown"
            className="bg-white"
          >
            <NavDropdown.Item className="text-white" href="#action/3.1">
              Home
            </NavDropdown.Item>
            <NavDropdown.Item className="text-white" href="#action/3.2">
              Product
            </NavDropdown.Item>
            <NavDropdown.Item className="text-white" href="#action/3.3">
              Services
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className="text-white" href="#action/3.4">
              Our History
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNav;
