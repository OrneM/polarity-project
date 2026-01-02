import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Location() {
    return (
        <section id="location" className="bg-black text-white pb-0 mb-5">
            <Container fluid className="p-0">
                <Row className="g-0">
                    <Col md={6} className="d-flex align-items-center justify-content-center bg-dark p-5">
                        <div>
                            <h2 className="mb-4 fw-bold"><span className="text-neon-gradient">VISITANOS</span></h2>
                            <div className="d-flex mb-3">
                                <FaMapMarkerAlt className="fs-4 me-3 text-secondary" />
                                <div>
                                    <h5 className="fw-bold">Dirección</h5>
                                    <p className="text-white-50">Lobos 2495, Castelar 1704<br />Buenos Aires, Argentina</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <FaClock className="fs-4 me-3 text-secondary" />
                                <div>
                                    <h5 className="fw-bold">Horarios</h5>
                                    <p className="text-white-50">Lun - Vie: 9:00 - 21:00<br />Sáb: 10:00 - 19:00</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <iframe
                            src="https://maps.google.com/maps?q=Lobos+2495,+Castelar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Location;
