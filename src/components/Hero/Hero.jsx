import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import heroOriginImg from '../../assets/hero origin.jpg';
import { FaWhatsapp } from 'react-icons/fa';

function Hero() {
    const HeroButtons = () => (
        <div className="d-flex flex-column flex-md-row gap-3 justify-content-center justify-content-lg-start">
            <a
                href="https://reservaclase.com/polarityestudio/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill px-4 py-2 fw-bold text-white d-flex align-items-center justify-content-center hero-btn-hover"
                style={{
                    background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) padding-box, linear-gradient(45deg, #ff00cc, #8a2be2) border-box',
                    border: '2px solid transparent',
                    fontSize: '1rem',
                    boxShadow: '0 0 15px rgba(255, 0, 204, 0.4)',
                    textTransform: 'uppercase',
                    letterSpacing: '2px'
                }}
            >
                Reservá tu clase
            </a>

            <a
                href="https://wa.me/5491123885491"
                target="_blank"
                rel="noopener noreferrer"
                className="btn rounded-pill px-4 py-2 fw-bold text-white d-flex align-items-center justify-content-center hero-btn-hover"
                style={{
                    backgroundColor: '#25D366',
                    border: 'none',
                    fontSize: '1rem',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}
            >
                <FaWhatsapp className="me-2 fs-4" />
                Hablá con nosotros
            </a>
        </div>
    );

    return (
        <section id="home" className="d-flex align-items-center position-relative overflow-hidden" style={{ minHeight: '90vh', paddingTop: '80px', backgroundColor: 'black' }}>
            <Container fluid>
                <Row className="align-items-center">
                    {/* Left Side (Desktop) / Top (Mobile): Text & Buttons for Desktop */}
                    <Col lg={6} className="p-4 p-md-5 order-1 order-lg-1">
                        <div className="text-start ps-lg-5 ms-lg-5 text-content-mobile-spacing">
                            <h1 className="hero-title fw-bold">
                                Descubrí tu fuerza.<br />
                                Encontrá tu forma de brillar.
                            </h1>
                            <div className="hero-subtitle mb-4">
                                <p className="m-0">
                                    Un espacio climatizado diseñado para que conectes con tu cuerpo. <br className="d-none d-md-block" />
                                    Desde Polesport y Exotic hasta Bachata y Pilates. <br className="d-none d-md-block" />
                                    Unite a una comunidad real que celebra cada uno de tus logros.
                                </p>
                            </div>

                            {/* Desktop Buttons (Hidden on Mobile) */}
                            <div className="d-none d-lg-block">
                                <HeroButtons />
                            </div>
                        </div>
                    </Col>

                    {/* Right Side (Desktop) / Middle (Mobile): Image */}
                    <Col lg={6} className="p-0 order-2 order-lg-2">
                        <div className="mobile-hero-img-container">
                            <img
                                src={heroOriginImg}
                                alt="Hero"
                                className="w-100 h-100"
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                    maskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%)',
                                    borderRadius: '50px 0 0 50px'
                                }}
                            />
                            {/* Gradient Overlay for aesthetic blending */}
                            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(90deg, #000000 0%, transparent 50%)' }}></div>
                        </div>
                    </Col>

                    {/* Mobile Buttons (Bottom - visible only on mobile) */}
                    <Col xs={12} className="order-3 d-lg-none pb-5 text-center">
                        <div className="d-flex justify-content-center mt-3 mb-5">
                            <HeroButtons />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Hero;
