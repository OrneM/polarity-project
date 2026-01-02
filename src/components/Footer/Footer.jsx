import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-black text-white py-5">
            <Container>
                <Row className="text-md-start">
                    <Col md={4} className="mb-4 mb-md-0">
                        <h2 className="fw-bold mb-3" style={{
                            fontSize: '3.5rem',
                            backgroundImage: 'linear-gradient(45deg, #ff00cc, #3333ff, #ff85c1)',
                            backgroundSize: '200% auto',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block',
                            filter: 'drop-shadow(0 0 8px rgba(255, 0, 204, 0.5))',
                            fontFamily: "'Oswald', sans-serif",
                            letterSpacing: '2px'
                        }}>
                            POLARITY
                        </h2>
                        <p className="fs-5" style={{ color: '#e0e0e0' }}>Elevando tu fuerza,<br />flexibilidad y confianza.</p>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0">
                        <h5 className="mb-4 fw-bold" style={{
                            textTransform: 'uppercase',
                            color: '#fff',
                            textShadow: '0 0 10px rgba(0, 247, 255, 0.6)',
                            letterSpacing: '1px'
                        }}>
                            ENLACES RÁPIDOS
                        </h5>
                        <ul className="list-unstyled d-flex flex-column gap-2">
                            <li><a href="#home" className="text-decoration-none fs-5" style={{ color: '#00f7ff', textShadow: '0 0 5px rgba(0, 247, 255, 0.7)' }}>Inicio</a></li>
                            <li><a href="#classes" className="text-decoration-none fs-5" style={{ color: '#00f7ff', textShadow: '0 0 5px rgba(0, 247, 255, 0.7)' }}>Clases</a></li>
                            <li><a href="#instructors" className="text-decoration-none fs-5" style={{ color: '#00f7ff', textShadow: '0 0 5px rgba(0, 247, 255, 0.7)' }}>Staff</a></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h5 className="mb-4 fw-bold" style={{
                            textTransform: 'uppercase',
                            color: '#fff',
                            textShadow: '0 0 10px rgba(0, 247, 255, 0.6)',
                            letterSpacing: '1px'
                        }}>
                            SEGUINOS
                        </h5>
                        <div className="d-flex gap-3">
                            <a href="https://www.instagram.com/polarity.pole/" target="_blank" rel="noopener noreferrer" className="fs-2" style={{ color: '#ff00ff', filter: 'drop-shadow(0 0 5px rgba(255, 0, 255, 0.7))' }}><FaInstagram /></a>
                            <a href="https://wa.me/5491123885491" target="_blank" rel="noopener noreferrer" className="fs-2" style={{ color: '#ff00ff', filter: 'drop-shadow(0 0 5px rgba(255, 0, 255, 0.7))' }}><FaWhatsapp /></a>
                        </div>
                    </Col>
                </Row>
                <hr className="mt-5 mb-3" style={{
                    border: 'none',
                    height: '1px',
                    background: 'linear-gradient(90deg, #00f7ff, #d600ff)',
                    opacity: 1,
                    boxShadow: '0 0 10px rgba(0, 247, 255, 0.4)'
                }} />
                <Row>
                    <Col className="text-center text-secondary">
                        <small style={{ fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} · Polarity pole&fit. <span style={{ fontStyle: 'italic', color: '#6c757d', opacity: 0.8 }}>Web by Ornela Mansilla.</span></small>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
