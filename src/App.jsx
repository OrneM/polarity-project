import Chatbot from './components/Chatbot/Chatbot';
import PromoBanner from './components/PromoBanner/PromoBanner';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Classes from './components/Classes/Classes';
import Instructors from './components/Instructors/Instructors';
import Location from './components/Location/Location';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <div className="fixed-top">
        <PromoBanner />
        <NavBar />
      </div>
      <Hero />
      <About />
      <Classes />
      <Instructors />
      <Location />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
