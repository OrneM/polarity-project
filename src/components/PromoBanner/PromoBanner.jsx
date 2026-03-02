import React from 'react';

function PromoBanner() {
    return (
        <div style={{
            background: 'linear-gradient(90deg, #ff00cc, #8a2be2, #ff00cc)',
            backgroundSize: '200% auto',
            color: 'white',
            textAlign: 'center',
            padding: '8px 0',
            fontSize: '0.9rem',
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1050, // above navbar
            animation: 'gradientFlow 5s ease infinite'
        }}>
            <div className="promo-marquee">
                <span className="me-4">✨ EN MARZO APROVECHÁ LA PROMO 2X1 PARA NUEVOS ALUMNOS! ✨ Consultar horarios disponibles</span>
                <span className="me-4">✨ EN MARZO APROVECHÁ LA PROMO 2X1 PARA NUEVOS ALUMNOS! ✨ Consultar horarios disponibles</span>
            </div>

            <style>{`
                @keyframes gradientFlow {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .promo-marquee {
                    display: inline-block;
                    white-space: nowrap;
                    animation: marquee 20s linear infinite;
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @media (max-width: 768px) {
                    .promo-marquee {
                        background: none;
                        font-size: 0.8rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default PromoBanner;
