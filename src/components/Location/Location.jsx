import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function Location() {
    return (
        <section id="location" className="bg-black text-white pb-0">
            <Container fluid className="p-0">
                <Row className="g-0">
                    <Col md={6} className="d-flex align-items-center justify-content-center bg-dark p-5">
                        <div>
                            <h2 className="mb-4 fw-bold"><span style={{ color: '#d63384' }}>VÍSITANOS</span></h2>
                            <div className="d-flex mb-3">
                                <FaMapMarkerAlt className="fs-4 me-3 text-secondary" />
                                <div>
                                    <h5 className="fw-bold">Dirección</h5>
                                    <p className="text-white-50">Av. Corrientes 1234, CABA<br />Buenos Aires, Argentina</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <FaClock className="fs-4 me-3 text-secondary" />
                                <div>
                                    <h5 className="fw-bold">Horarios</h5>
                                    <p className="text-white-50">Lun - Vie: 9:00 - 21:00<br />Sáb: 10:00 - 14:00</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.989045892556!2d-58.38870938477038!3d-34.60443428045934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac6301b1f0b%3A0x57c0418490e663a!2sAv.%20Corrientes%201234%2C%20C1043%20CABA!5e0!3m2!1sen!2sar!4v1703888000000!5m2!1sen!2sar"
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
