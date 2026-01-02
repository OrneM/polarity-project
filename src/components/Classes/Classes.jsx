import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import sportImg from '../../assets/sport.jpg';
import exoticImg from '../../assets/exotic.jpg';
import giratorioImg from '../../assets/giratorio.jpg';

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
    }
];

function Classes() {
    return (
        <section id="classes" style={{ backgroundColor: '#121212' }}>
            <Container>
                <h2 className="text-center display-4 fw-bold mb-5 text-white">NUESTRAS <span className="text-neon-gradient">CLASES</span></h2>
                <Row>
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
            </Container>
        </section>
    );
}

export default Classes;
