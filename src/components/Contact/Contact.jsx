import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        // Map controlId to state keys if necessary, or just use simple logic if I change ids
        // Actually, easiest is to just update state based on specific handlers or mapped IDs.
        // Let's use specific handlers to match the existing controlIds 'formName', 'formEmail', 'formMessage'
        if (id === 'formName') setFormData({ ...formData, name: value });
        if (id === 'formEmail') setFormData({ ...formData, email: value });
        if (id === 'formMessage') setFormData({ ...formData, message: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, message } = formData;
        const text = `Hola Polarity! Soy ${name}. ${message}`;
        const encodedText = encodeURIComponent(text);
        const url = `https://wa.me/5491123885491?text=${encodedText}`;
        window.open(url, '_blank');
    };

    return (
        <section id="contact" className="bg-dark text-white">
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <h2 className="text-center display-4 fw-bold mb-4 text-neon-gradient">CONTACTO</h2>
                        <p className="text-center text-white-50 mb-5">
                            ¿Tienes dudas o quieres inscribirte? Envíanos un mensaje.
                        </p>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formName">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="bg-black text-white border-secondary"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMessage">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Tu mensaje..."
                                    className="bg-black text-white border-secondary"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <div className="text-center">
                                <Button type="submit" variant="primary" size="lg" className="px-5 rounded-pill" style={{ backgroundColor: '#d63384', border: 'none' }}>
                                    Enviar
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
