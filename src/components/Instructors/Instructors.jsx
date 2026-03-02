import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pilatesInstructorImg from '../../assets/pilatesInstructor.jpg';
import samiImg from '../../assets/sami.jpg';
import pameImg from '../../assets/pame.jpg';
import vanyImg from '../../assets/vany.jpg';
import { FaInstagram } from 'react-icons/fa';

function Instructors() {
    return (
        <section id="instructors" className="bg-black text-white">
            <Container>
                <h2 className="text-center display-4 fw-bold mb-5"> SOMOS <span className="text-neon-gradient">POLARITY</span></h2>
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
                            Apasionada del pole en constante perfeccionamiento atlético y artístico. Ha tomado clases con Romix Bande, Daniela Adaro, Debi Paskvan, Ileana Di Giorgio entre otros.
                        </p>
                        <div className="mt-3">
                            <a
                                href="https://www.instagram.com/marielmedok/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white-50 text-decoration-none hover-effect d-inline-flex align-items-center"
                                style={{ transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.classList.replace('text-white-50', 'text-neon-pink')}
                                onMouseLeave={(e) => e.currentTarget.classList.replace('text-neon-pink', 'text-white-50')}
                            >
                                <FaInstagram size={28} className="me-2" /> @marielmedok
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Other Instructors Row */}
                <Row className="justify-content-center align-items-center mt-5 pt-4">
                    <Col md={5} className="text-center mb-4 mb-md-0 d-flex justify-content-center">
                        <div className="mx-auto rounded-circle shadow-lg" style={{
                            padding: '3px',
                            background: 'linear-gradient(45deg, rgba(255, 0, 204, 0.8), rgba(138, 43, 226, 0.8))',
                            boxShadow: '0 0 20px rgba(255, 0, 204, 0.6), 0 0 40px rgba(138, 43, 226, 0.4)',
                            width: 'fit-content'
                        }}>
                            <div style={{ width: '180px', height: '180px' }}> {/* Slightly larger for better detail */}
                                <img
                                    src={pilatesInstructorImg}
                                    alt="Mica Garibian"
                                    className="w-100 h-100 rounded-circle"
                                    style={{
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="text-center text-md-start">
                        <h3 className="display-6 fw-bold text-neon-pink mb-2">Mica</h3>
                        <h4 className="h5 text-white-50 mb-4">Instructora de Pilates</h4>
                        <p className="lead text-white">
                            Especialista en movimiento consciente, fuerza y flexibilidad. Sus clases son el complemento perfecto para potenciar tu rendimiento en el pole.
                        </p>
                        <div className="mt-3">
                            <a
                                href="https://www.instagram.com/mica.garibian"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white-50 text-decoration-none hover-effect d-inline-flex align-items-center"
                                style={{ transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.classList.replace('text-white-50', 'text-neon-pink')}
                                onMouseLeave={(e) => e.currentTarget.classList.replace('text-neon-pink', 'text-white-50')}
                            >
                                <FaInstagram size={28} className="me-2" /> @mica.garibian
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Sami Row */}
                <Row className="justify-content-center align-items-center mt-5 pt-4">
                    <Col md={5} className="text-center mb-4 mb-md-0 d-flex justify-content-center">
                        <div className="mx-auto rounded-circle shadow-lg" style={{
                            padding: '3px',
                            background: 'linear-gradient(45deg, rgba(255, 0, 204, 0.8), rgba(138, 43, 226, 0.8))',
                            boxShadow: '0 0 20px rgba(255, 0, 204, 0.6), 0 0 40px rgba(138, 43, 226, 0.4)',
                            width: 'fit-content'
                        }}>
                            <div style={{ width: '180px', height: '180px' }}>
                                <img
                                    src={samiImg}
                                    alt="Sami"
                                    className="w-100 h-100 rounded-circle"
                                    style={{ objectFit: 'cover', display: 'block' }}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="text-center text-md-start">
                        <h3 className="display-6 fw-bold text-neon-pink mb-2">Sami</h3>
                        <h4 className="h5 text-white-50 mb-4">Instructora de Pole Sport</h4>
                        <p className="lead text-white">
                            Guiando a los alumnos en su progreso de Pole Sport con técnica, dedicación y mucha energía.
                        </p>
                        <div className="mt-3">
                            <a
                                href="https://www.instagram.com/lunnatiiika"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white-50 text-decoration-none hover-effect d-inline-flex align-items-center"
                                style={{ transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.classList.replace('text-white-50', 'text-neon-pink')}
                                onMouseLeave={(e) => e.currentTarget.classList.replace('text-neon-pink', 'text-white-50')}
                            >
                                <FaInstagram size={28} className="me-2" /> @lunnatiiika
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Pame Flores Row */}
                <Row className="justify-content-center align-items-center mt-5 pt-4">
                    <Col md={5} className="text-center mb-4 mb-md-0 d-flex justify-content-center">
                        <div className="mx-auto rounded-circle shadow-lg" style={{
                            padding: '3px',
                            background: 'linear-gradient(45deg, rgba(255, 0, 204, 0.8), rgba(138, 43, 226, 0.8))',
                            boxShadow: '0 0 20px rgba(255, 0, 204, 0.6), 0 0 40px rgba(138, 43, 226, 0.4)',
                            width: 'fit-content'
                        }}>
                            <div style={{ width: '180px', height: '180px' }}>
                                <img
                                    src={pameImg}
                                    alt="Pame Flores"
                                    className="w-100 h-100 rounded-circle"
                                    style={{ objectFit: 'cover', display: 'block' }}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="text-center text-md-start">
                        <h3 className="display-6 fw-bold text-neon-pink mb-2">Pame</h3>
                        <h4 className="h5 text-white-50 mb-4">Instructora de Pole Sport Inicial</h4>
                        <p className="lead text-white">
                            Especialista en los primeros pasos del Pole Sport. Aprenderás las bases de manera segura, divertida y a tu propio ritmo.
                        </p>
                        <div className="mt-3">
                            <a
                                href="https://www.instagram.com/pame.r.f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white-50 text-decoration-none hover-effect d-inline-flex align-items-center"
                                style={{ transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.classList.replace('text-white-50', 'text-neon-pink')}
                                onMouseLeave={(e) => e.currentTarget.classList.replace('text-neon-pink', 'text-white-50')}
                            >
                                <FaInstagram size={28} className="me-2" /> @pame.r.f
                            </a>
                        </div>
                    </Col>
                </Row>

                {/* Profe Vany Row */}
                <Row className="justify-content-center align-items-center mt-5 pt-4">
                    <Col md={5} className="text-center mb-4 mb-md-0 d-flex justify-content-center">
                        <div className="mx-auto rounded-circle shadow-lg" style={{
                            padding: '3px',
                            background: 'linear-gradient(45deg, rgba(255, 0, 204, 0.8), rgba(138, 43, 226, 0.8))',
                            boxShadow: '0 0 20px rgba(255, 0, 204, 0.6), 0 0 40px rgba(138, 43, 226, 0.4)',
                            width: 'fit-content'
                        }}>
                            <div style={{ width: '180px', height: '180px' }}>
                                <img
                                    src={vanyImg}
                                    alt="Profe Vany"
                                    className="w-100 h-100 rounded-circle"
                                    style={{ objectFit: 'cover', display: 'block' }}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col md={7} className="text-center text-md-start">
                        <h3 className="display-6 fw-bold text-neon-pink mb-2">Vany</h3>
                        <h4 className="h5 text-white-50 mb-4">Instructora de Zumba</h4>
                        <p className="lead text-white">
                            Ritmo, fitness y diversión en cada clase. Vení a bailar, sudar y llenarte de la mejor energía.
                        </p>
                        <div className="mt-3">
                            <a
                                href="https://www.instagram.com/vanuchi_fitnessdance"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white-50 text-decoration-none hover-effect d-inline-flex align-items-center"
                                style={{ transition: 'color 0.3s ease' }}
                                onMouseEnter={(e) => e.currentTarget.classList.replace('text-white-50', 'text-neon-pink')}
                                onMouseLeave={(e) => e.currentTarget.classList.replace('text-neon-pink', 'text-white-50')}
                            >
                                <FaInstagram size={28} className="me-2" /> @vanuchi_fitnessdance
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Instructors;
