import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
    return (
        <section id="about" className="bg-dark text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="mb-4 mb-md-0">
                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" alt="Studio" className="img-fluid rounded shadow-lg" />
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
                            Contamos con barras profesionales, colchonetas de seguridad, climatización y el mejor equipo de instructores.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default About;
