import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const instructors = [
    { name: "Ana P.", role: "Fundadora & Head Coach", img: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Sofia M.", role: "Instructor Exotic", img: "https://randomuser.me/api/portraits/women/68.jpg" },
    { name: "Carla R.", role: "Instructor Flexibilidad", img: "https://randomuser.me/api/portraits/women/33.jpg" },
];

function Instructors() {
    return (
        <section id="instructors" className="bg-black text-white">
            <Container>
                <h2 className="text-center display-4 fw-bold mb-5">EQUIPO <span className="text-neon-gradient">POLARITY</span></h2>
                <Row className="justify-content-center">
                    {instructors.map((inst, idx) => (
                        <Col md={4} className="text-center mb-4" key={idx}>
                            <div className="mb-3">
                                <img src={inst.img} alt={inst.name} className="rounded-circle border border-2 border-danger p-1" style={{ width: '150px', height: '150px', objectFit: 'cover', borderColor: '#d63384 !important' }} />
                            </div>
                            <h4 className="fw-bold text-neon-pink">{inst.name}</h4>
                            <p className="text-white-50">{inst.role}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Instructors;
