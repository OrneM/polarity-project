import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Instructors() {
    return (
        <section id="instructors" className="bg-black text-white">
            <Container>
                <h2 className="text-center display-4 fw-bold mb-5">EQUIPO <span className="text-neon-gradient">POLARITY</span></h2>
                <Row className="justify-content-center align-items-center">
                    <Col md={5} className="text-center mb-4 mb-md-0">
                        <div className="mx-auto rounded-4 shadow-lg" style={{
                            padding: '3px',
                            background: 'linear-gradient(45deg, rgba(255, 0, 204, 0.8), rgba(138, 43, 226, 0.8))',
                            boxShadow: '0 0 20px rgba(255, 0, 204, 0.6), 0 0 40px rgba(138, 43, 226, 0.4)',
                            maxWidth: '300px',
                            aspectRatio: '9/16'
                        }}>
                            <video
                                src="https://res.cloudinary.com/du1qwcdcu/video/upload/v1767383523/directora_olmoey.mov"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-100 h-100 rounded-4"
                                style={{ objectFit: 'cover', display: 'block' }}
                            />
                        </div>
                    </Col>
                    <Col md={7} className="text-center text-md-start">
                        <h3 className="display-6 fw-bold text-neon-pink mb-2">Mariel Medina</h3>
                        <h4 className="h5 text-white-50 mb-4">Directora</h4>
                        <p className="lead">
                            Apasionada del pole en constante perfeccionamiento atlético. Ha tomado clases con Romix Bande, Daniela Adaro, Debi Paskwan, entre otros.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Instructors;
