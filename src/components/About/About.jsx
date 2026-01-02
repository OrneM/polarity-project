import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import carousel1 from '../../assets/carrousel 1.png';
import carousel2 from '../../assets/carrousel 2.png';
import carousel3 from '../../assets/carrousel 3.png';
function About() {
    return (
        <section id="about" className="bg-dark text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <Carousel fade interval={3000} controls={false} indicators={true}>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded shadow-lg"
                                    src={carousel1}
                                    alt="Polarity Studio 1"
                                    style={{ height: '450px', objectFit: 'cover' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded shadow-lg"
                                    src={carousel2}
                                    alt="Polarity Studio 2"
                                    style={{ height: '450px', objectFit: 'cover' }}
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100 rounded shadow-lg"
                                    src={carousel3}
                                    alt="Polarity Studio 3"
                                    style={{ height: '450px', objectFit: 'cover', objectPosition: 'top' }}
                                />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={6} className="ps-md-5">
                        <h2 className="display-4 fw-bold mb-4">
                            <span className="text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}>¿POR QUÉ</span> <span className="text-neon-gradient" style={{ fontSize: '1.1em' }}>POLARITY?</span>
                        </h2>
                        <p className="lead text-white-50 mb-4">
                            En Polarity creemos que el pole dance es para todos. No importa tu edad, cuerpo o experiencia previa.
                        </p>
                        <p>
                            Nuestro estudio es un espacio seguro donde podes explorar tu movimiento, ganar fuerza física y mental y conectar con una comunidad apasionada.
                        </p>
                        <h5 className="fw-bold mb-3 text-white">Contamos con:</h5>
                        <ul className="list-unstyled text-white-50 mb-4 ps-2">
                            <li className="mb-2"><span className="text-neon-pink me-2">✦</span> Barras profesionales Maxpole</li>
                            <li className="mb-2"><span className="text-neon-pink me-2">✦</span> Aire acondicionado</li>
                            <li className="mb-2"><span className="text-neon-pink me-2">✦</span> Wi-Fi</li>
                            <li className="mb-2"><span className="text-neon-pink me-2">✦</span> Vestuario</li>
                            <li className="mb-2"><span className="text-neon-pink me-2">✦</span> Ambientación</li>
                        </ul>
                        <p className="fst-italic text-white">
                            En Polarity, cuidamos de vos. Priorizamos tu bienestar integral, acompañándote en cada paso para que te sientas segur@, fuerte y feliz, tanto por dentro como por fuera.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
