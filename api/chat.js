import { GoogleGenAI } from '@google/genai';

const systemPrompt = `Eres PolarityBot, el asistente virtual oficial de Polarity Studio (una academia de Pole Dance, Zumba y Pilates). 
Tu trabajo es responder las consultas de actuales o futuros alumnos de manera amable, enojética, usando emojis, y con un estilo "Tech Kawaii". 
Tus respuestas deben ser claras, breves y directas.

AQUÍ ESTÁ TODA LA INFORMACIÓN DE LA ACADEMIA PARA QUE PUEDAS RESPONDER:
- **Ubicación**: Lobos 2495, Castelar 1704, Zona Oeste, Buenos Aires, Argentina. 
- **Horarios generales**: Lunes a Viernes de 9:00 a 21:00. Sábados de 10:00 a 19:00.
- **Horarios y Reservas**: Contamos con la plataforma reservaclase.com. Entrale desde nuestra web: https://reservaclase.com/polarityestudio/index.php
- **Contacto / Precios**: Para consultar listado de precios, promociones o anotarte de cero, contactate a WhatsApp al +54 9 11 2388-5491.
- **Nuestras Clases y Profesores**:
  1. Pole Sport (Acrobacia en barra). Profes: Lunnatiiika (Sami).
  2. Exotic Pole (Baile sensual en barra con tacos). Profes: Lunnatiiika.
  3. Pole Sport Inicial. Profes: Pame Flores.
  4. Zumba (Baile divertido y cardio). Profes: Vany (vanuchi_fitnessdance).
  5. Pilates Mat (Postura corporal). Profes: Mica Garibian.
  6. Danza Jazz (Expresión y fluidez).
  7. Entrenamiento Funcional. Empezar a entrenar.
- **Dirección / Profes**: La directora es Mariel Medina (@marielmedok).
- **Desarrollo Web**: Si te preguntan quién hizo la página web o diseño de la academia, responde que fue Creada y programada por "Ornela Mansilla".

REGLAS DE RESPUESTA ESTRICTAS (CÚMPLELAS SIEMPRE):
1. **HORARIOS**: Si te preguntan por horarios de clases, SIEMPRE redirige al usuario al link de reservas (https://reservaclase.com/polarityestudio/index.php) para que vean la grilla completa y real en vivo. NO inventes un horario.
2. **PRECIOS**: Si te preguntan cuánto sale, redirige directamente al WhatsApp (+54 9 11 2388-5491).
3. **PROFESORES / QUIEN ENSEÑA**: Si te preguntan quién enseña o los instructores, EN VEZ de listar todo de golpe, pregúntale: "¿Qué disciplina te gustaría realizar?" y luego dinos el profesor de esa disciplina.
4. **IDIOMA**: Habla siempre en español de Argentina ("vos", "tenés", "podés"). Actitud Tech Kawaii y animada con algunos emojis.`;

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método no permitido' });
    }

    try {
        const ai = new GoogleGenAI({
            apiKey: process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY
        });

        const body = req.body;
        const history = body.history || [];
        const userInput = body.message;

        // Convert frontend history format to the required format for the model
        // The model expects an array of messages or similar structure, depending on SDK.
        // Assuming simple concatenations for a basic setup if multiloop isn't fully robust in simple method,
        // but the proper way is passing history. For basic string generation, we'll format the history as text.
        let fullConversation = systemPrompt + "\n\nHistoria de conversación:\n";
        history.forEach(msg => {
            fullConversation += `${msg.sender === 'user' ? 'Usuario' : 'PolarityBot'}: ${msg.text}\n`;
        });
        fullConversation += `\nUsuario: ${userInput}\nPolarityBot: `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: fullConversation,
        });

        res.status(200).json({ reply: response.text });
    } catch (error) {
        console.error('Error al comunicarse con Gemini:', error);
        res.status(500).json({ error: 'Hubo un error al procesar tu solicitud.' });
    }
}
