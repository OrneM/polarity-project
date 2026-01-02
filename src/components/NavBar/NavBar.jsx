import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo-4.png';

function NavBar() {
    return (
        <Navbar expand="lg" className="navbar-dark bg-transparent fixed-top" style={{ backdropFilter: 'blur(10px)' }}>
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img src={logo} alt="Polarity Logo" height="110" className="d-inline-block align-top navbar-brand-logo" style={{ borderRadius: '15px', opacity: '0.9', filter: 'saturate(1.3)' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="px-3 text-white">Inicio</Nav.Link>
                        <Nav.Link href="#about" className="px-3 text-white">El Estudio</Nav.Link>
                        <Nav.Link href="#classes" className="px-3 text-white">Clases</Nav.Link>
                        <Nav.Link href="#instructors" className="px-3 text-white">Staff</Nav.Link>
                        <Nav.Link href="#contact" className="px-3 text-white">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
