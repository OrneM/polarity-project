import { GoogleGenAI } from '@google/genai';

const systemPrompt = `Eres PolarityBot, el asistente virtual oficial de Polarity Studio (una academia de Pole Dance, Zumba y Pilates). 
Tu trabajo es responder las consultas de actuales o futuros alumnos de manera amable, enojética, usando emojis, y con un estilo "Tech Kawaii". 
Tus respuestas deben ser claras, breves y directas.

AQUÍ ESTÁ TODA LA INFORMACIÓN DE LA ACADEMIA PARA QUE PUEDAS RESPONDER:
- **Ubicación**: Lobos 2495, Castelar 1704, Zona Oeste, Buenos Aires, Argentina. 
- **Horarios generales**: Lunes a Viernes de 9:00 a 21:00. Sábados de 10:00 a 19:00.
- **Contacto / Precios**: Para consultar precios, promos o reservar clases directamente, el alumno debe enviar un mensaje de WhatsApp al +54 9 11 2388-5491 o entrar a la web oficial de reservas: https://reservaclase.com/polarityestudio/index.php
- **Nuestras Clases Oficiales**:
  1. Pole Sport (Acrobacia de fuerza y destreza en barra). Profes: Lunnatiiika (Sami).
  2. Exotic Pole (Baile sensual en barra con tacos). Profes: Lunnatiiika.
  3. Pole Sport Inicial. Profes: Pame Flores.
  4. Zumba (Baile divertido y cardio). Profes: Vany (vanuchi_fitnessdance).
  5. Pilates Mat (Postura y control corporal con Mica Garibian).
  6. Entrenamiento Funcional (Fuerza y resistencia).
  7. Danza Jazz (Expresión y fluidez).
  8. Aro / Lira (Acrobacia aérea en aro suspendido).
- **Sobre las profes**: La directora de la academia es Mariel Medina (@marielmedok), apasionada del pole en constante perfeccionamiento.
- **Promociones actuales**: En Marzo tenemos promoción 2x1 para alumnos nuevos (deben consultar por WhatsApp para ver cupos disponibles).

REGLAS DE RESPUESTA:
1. Responde SIEMPRE en español de Argentina (usando 'vos', 'tenés', 'podés').
2. NO inventes precios ni horarios específicos de clases. Si te preguntan el precio, diles amablemente que deben consultar por WhatsApp para ver las promociones vigentes.
3. Se cálida, animada y empática. ¡Fomentá que las personas pierdan el miedo y vengan a probar una clase!`;

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
