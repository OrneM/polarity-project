import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import sportImg from '../../assets/sport.jpg';
import exoticImg from '../../assets/exotic.jpg';
import giratorioImg from '../../assets/giratorio.jpg';
import pilatesImg from '../../assets/pilates.jpg';

const classesData = [
    {
        title: "Pole Giratorio",
        description: "Descubrí la magia del giratorio. Fluidez, inercia y control en una barra giratoria.",
        img: giratorioImg
    },
    {
        title: "Pole Sport",
        description: "Enfocado en la fuerza y acrobacia. Niveles principiantes, intermedios y avanzados.",
        img: sportImg
    },
    {
        title: "Exotic Pole",
        description: "Explora tu lado sensual. Coreografías con zapatos y mucho estilo.",
        img: exoticImg
    },
    {
        title: "Flexibilidad",
        description: "Mejora tu rango de movimiento para trucos más avanzados y prevención de lesiones.",
        img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop"
    },
    {
        title: "Pilates Mat",
        description: "Fortalece tu centro, mejora tu postura y trabaja el control corporal. Ideal para complementar tu entrenamiento.",
        img: pilatesImg
    }
];

function Classes() {
    return (
        <section id="classes" style={{ backgroundColor: '#121212' }}>
            <Container>
                <h2 className="text-center display-4 fw-bold mb-5 text-white">NUESTRAS <span className="text-neon-gradient">CLASES</span></h2>
                <Row className="justify-content-center">
                    {classesData.map((cls, idx) => (
                        <Col md={6} lg={3} className="mb-4" key={idx}>
                            <Card className="h-100 bg-black border-secondary text-white shadow-sm hover-effect">
                                <Card.Img variant="top" src={cls.img} style={{ aspectRatio: '1 / 1', objectFit: 'cover', opacity: 0.8 }} />
                                <Card.Body>
                                    <Card.Title className="fw-bold text-neon-pink">{cls.title}</Card.Title>
                                    <Card.Text className="text-white-50">
                                        {cls.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="mt-5 pt-4">
                    <h3 className="text-center text-white-50 mb-4" style={{ letterSpacing: '2px', fontSize: '1.5rem' }}>PRÓXIMAMENTE</h3>
                    <Row className="justify-content-center">

                        <Col md={5} lg={4} className="mb-3">
                            <div className="p-4 border border-secondary rounded text-center" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                                <h4 className="fw-bold text-white mb-2">Zumba</h4>
                                <p className="text-white-50 m-0">Ritmo, diversión y cardio. ¡Baila y entrena!</p>
                            </div>
                        </Col>
                        <Col md={5} lg={4} className="mb-3">
                            <div className="p-4 border border-secondary rounded text-center" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                                <h4 className="fw-bold text-white mb-2">Entrenamiento Funcional</h4>
                                <p className="text-white-50 m-0">Mejora tu resistencia y fuerza para el día a día.</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default Classes;
