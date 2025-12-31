import Button from 'react-bootstrap/Button';
import heroImg from '../../assets/hero-2.jpg';

function Hero() {
    return (
        <section id="home" className="p-0 position-relative">
            <img src={heroImg} alt="Hero" className="w-100" style={{ height: 'auto', display: 'block' }} />
            {/* Optional: Add a subtle overlay if the navbar needs contrast, or keep as is */}
        </section>
    );
}

export default Hero;
