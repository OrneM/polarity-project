# Polarity Studio ✨

Bienvenido al repositorio oficial de **Polarity Studio**, una academia especializada en Pole Dance (Pole Sport, Exotic Pole, Giratorio), Pilates Mat, Flexibilidad, Zumba y más. 

Nuestro objetivo fue diseñar una plataforma web que refleje nuestra esencia: un espacio climatizado y de contención donde se entrena con energía, pasión y una estética **"Tech-Kawaii"** (colores oscuros con acentos neón en fucsia y violeta).

🌍 **Sitio Web en Vivo:** [https://polarity-studio.vercel.app](https://polarity-studio.vercel.app)

---

## 🚀 Tecnologías Utilizadas

Este proyecto es una Single Page Application (SPA) moderna desarrollada con:

- **[React 19](https://react.dev/):** Librería principal para la construcción de interfaces de usuario.
- **[Vite 7](https://vitejs.dev/):** Entorno de desarrollo ultrarrápido y empaquetador para producción.
- **[React Bootstrap](https://react-bootstrap.netlify.app/) & Vainilla CSS:** Sistema de grillas, componentes listos para usar y estilos personalizados para nuestra estética neón.
- **[React Icons](https://react-icons.github.io/react-icons/):** Iconografía integrada y moderna.

---

## 🛠️ Instalación y Uso Local

Sigue estos pasos para correr el proyecto en tu entorno local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/OrneM/polarity-project.git
   cd Polarity-web
   ```

2. **Instalar dependencias:**
   Asegúrate de tener Node.js instalado, y luego corre:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```
   *Esto levantará el proyecto normalmente en [http://localhost:5173/](http://localhost:5173/).*

4. **Construir para Producción:**
   Para generar los archivos estáticos listos para desplegar:
   ```bash
   npm run build
   ```

---

## 📁 Estructura del Proyecto

La estructura principal del código fuente dentro de `src/` se divide de la siguiente manera:

```plaintext
src/
├── assets/         # Imágenes, iconos y logos estáticos (fondos, instructores, favicon).
├── components/     # Componentes modulares y reutilizables de React.
│   ├── About/      # Sección de "¿Quiénes somos?"
│   ├── Classes/    # Grilla de clases ofrecemos (Pole, Exotic, Pilates, etc.)
│   ├── Hero/       # Portada principal de la web con call-to-action.
│   └── Instructors/# Perfiles de nuestro equipo de instructoras.
├── App.jsx         # Componente raíz que ensambla las secciones de la página.
├── index.css       # Estilos globales, variables CSS para los colores neón y utilidades.
└── main.jsx        # Punto de entrada de la aplicación React.
```

---

## 🎨 Diseño y Estética

El diseño se centra en la estética **Neon / Tech-Kawaii**:
- **Fondo:** Dark mode (`#121212` y `#000000`).
- **Acentos:** Degradados y sombras de texto utilizando colores neón (`#FF007F` - Fucsia vibrante, violetas profundos).
- **Tipografía y Componentes:** Tarjetas limpias, microinteracciones suaves en el "hover", bordes redondeados y un aspecto que transmite movimiento y profesionalismo.

---

## ☁️ Despliegue (Deploy)

Actualmente, el proyecto está configurado para ser desplegado automáticamente en **Vercel** (`polarity-studio.vercel.app`). La configuración base en `vite.config.js` está optimizada para publicarse en la raíz del dominio principal.
