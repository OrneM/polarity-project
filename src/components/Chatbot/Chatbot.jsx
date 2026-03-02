import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
import './Chatbot.css';
import { GoogleGenAI } from '@google/genai';

const systemPrompt = `Eres PolarityBot, el asistente de IA oficial de Polarity Studio (una academia de Pole Dance, Zumba y Pilates).
Ubicación: Lobos 2495, Castelar, Zona Oeste.
Horarios: Lun-Vie 9 a 21hs, Sáb 10 a 19hs.
Clases: Pole Sport, Exotic Pole, Pole Inicial, Zumba, Pilates Mat, Entrenamiento Funcional, Danza Jazz, Aro.
Promo Actual: 2x1 en Marzo para nuevos alumnos.
Atendemos dudas y reservas pidiendo al usuario que hable al WhatsApp +5491123885491.
Reglas: Responde súper corto, con emojis, actitud "Tech Kawaii". Habla en español de Argentina ("vos", "tenés"). NUNCA inventes horarios ni precios.`;

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: '¡Hola! Soy PolarityBot 🤖. ¿En qué te puedo ayudar hoy con la academia?', sender: 'bot' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        const newMessages = [...messages, { text: userMsg, sender: 'user' }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            // Intento 1: Llamar al backend de Vercel
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg, history: messages })
            });

            if (res.ok) {
                const data = await res.json();
                setMessages([...newMessages, { text: data.reply, sender: 'bot' }]);
            } else {
                // Fallback para desarrollo local si la API de Vercel no está corriendo
                throw new Error('API Vercel no disponible localmente');
            }
        } catch (error) {
            console.log("Probando fallback local por estar en modo desarrollo con Vite...");
            try {
                // FALLBACK: Usar el SDK directamente en el cliente solo para pruebas locales
                // ESTO REQUIERE QUE LA KEY SEA PUBLICA COMO VITE_GEMINI_API_KEY
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                if (!apiKey) {
                    throw new Error('No hay llave API disponible. Configurala en Vercel.');
                }
                const ai = new GoogleGenAI({ apiKey });

                let conversation = systemPrompt + "\n\n";
                newMessages.forEach(msg => {
                    conversation += `${msg.sender === 'user' ? 'Usuario' : 'PolarityBot'}: ${msg.text}\n`;
                });
                conversation += `\nPolarityBot: `;

                const result = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: conversation
                });

                setMessages([...newMessages, { text: result.text, sender: 'bot' }]);
            } catch (fallbackError) {
                console.error("Error en fallback:", fallbackError);
                setMessages([...newMessages, { text: 'Ay 😅, parece que estoy teniendo problemas de conexión. Por favor escribime por WhatsApp al +54 9 11 2388-5491.', sender: 'bot' }]);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window shadow-lg border-0 fade-in custom-scroll">
                    <div className="chatbot-header d-flex justify-content-between align-items-center p-3 text-white">
                        <div className="d-flex align-items-center">
                            <FaRobot size={24} className="me-2" />
                            <strong style={{ fontFamily: 'Oswald, sans-serif' }}>PolarityBot</strong>
                        </div>
                        <button className="btn btn-sm text-white" onClick={() => setIsOpen(false)}>
                            <FaTimes size={20} />
                        </button>
                    </div>

                    <div className="chatbot-messages p-3">
                        {messages.map((msg, index) => (
                            <div key={index} className={`mb-3 d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                                <div className={`message-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="mb-3 d-flex justify-content-start">
                                <div className="message-bubble bot-bubble typing-indicator">
                                    <span>.</span><span>.</span><span>.</span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input-area p-2 border-top d-flex" onSubmit={handleSend}>
                        <input
                            type="text"
                            className="form-control rounded-pill me-2 border-0"
                            placeholder="Escribe un mensaje..."
                            style={{ backgroundColor: '#2a2a2a', color: 'white' }}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={isLoading}
                        />
                        <button type="submit" className="btn btn-primary rounded-circle send-btn" disabled={isLoading || !input.trim()}>
                            <FaPaperPlane />
                        </button>
                    </form>
                </div >
            )}

            {
                !isOpen && (
                    <button
                        className="chatbot-toggle-btn shadow-lg bounce-animation"
                        onClick={() => setIsOpen(true)}
                        aria-label="Abrir chat con IA"
                    >
                        <FaRobot size={30} />
                    </button>
                )
            }
        </div >
    );
};

export default Chatbot;
