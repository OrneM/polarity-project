import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-black text-white py-5">
            <Container>
                <Row className="text-center text-md-start">
                    <Col md={4} className="mb-4 mb-md-0">
                        <h4 className="fw-bold mb-3"><span style={{ color: '#d63384' }}>POLARITY</span></h4>
                        <p>Elevando tu fuerza, flexibilidad y confianza.</p>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="mb-3">Enlaces Rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-decoration-none text-white-50">Inicio</a></li>
                            <li><a href="#classes" className="text-decoration-none text-white-50">Clases</a></li>
                            <li><a href="#instructors" className="text-decoration-none text-white-50">Instructoras</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="mb-3">Síguenos</h5>
                        <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                            <a href="#" className="text-white fs-4"><FaInstagram /></a>
                            <a href="#" className="text-white fs-4"><FaFacebook /></a>
                            <a href="#" className="text-white fs-4"><FaWhatsapp /></a>
                        </div>
                    </Col>
                </Row>
                <hr className="my-4 border-secondary" />
                <Row>
                    <Col className="text-center text-white-50">
                        <small>&copy; {new Date().getFullYear()} Polarity Web. Todos los derechos reservados.</small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
