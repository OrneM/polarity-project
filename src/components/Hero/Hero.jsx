import Button from 'react-bootstrap/Button';
import heroImg from '../../assets/hero-2.jpg';
import heroMobileImg from '../../assets/hero mobile.jpg';
import { FaWhatsapp } from 'react-icons/fa';

function Hero() {
    return (
        <section id="home" className="p-0 position-relative">
            <picture>
                <source media="(max-width: 768px)" srcSet={heroMobileImg} />
                <img src={heroImg} alt="Hero" className="w-100 hero-img" />
            </picture>

            <div className="position-absolute start-0 bottom-0 p-4 mb-5 ms-md-5 ps-md-5 d-flex flex-column flex-md-row gap-4" style={{ marginLeft: '5%' }}>
                <a
                    href="https://reservaclase.com/polarityestudio/index.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn rounded-pill px-5 py-3 fw-bold text-white d-flex align-items-center justify-content-center hero-btn-hover"
                    style={{
                        background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) padding-box, linear-gradient(45deg, #ff00cc, #8a2be2) border-box',
                        border: '3px solid transparent',
                        fontSize: '1.25rem',
                        boxShadow: '0 0 15px rgba(255, 0, 204, 0.4)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px'
                    }}
                >
                    Reservá tu clase
                </a>

                <a
                    href="https://wa.me/5491123885491"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn rounded-pill px-4 py-2 fw-bold text-white d-flex align-items-center justify-content-center hero-btn-hover"
                    style={{
                        backgroundColor: '#25D366',
                        border: 'none',
                        fontSize: '1.1rem',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}
                >
                    <FaWhatsapp className="me-2 fs-4" />
                    Hablá con nosotros
                </a>
            </div>
        </section>
    );
}

export default Hero;
