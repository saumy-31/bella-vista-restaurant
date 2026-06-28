import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Chefs from './pages/Chefs';
import Reservations from './pages/Reservations';
import Contact from './pages/Contact';
import { FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-darker">
      <Navbar />
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/1234567890" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50 flex items-center justify-center animate-bounce"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}

export default App;