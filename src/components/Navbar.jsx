import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Chefs', path: '/chefs' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-md py-3 shadow-lg shadow-black/50' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="text-3xl font-serif text-gold tracking-widest font-bold">
          BELLA VISTA
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`uppercase text-sm tracking-wider hover:text-gold transition-colors ${location.pathname === link.path ? 'text-gold border-b border-gold' : 'text-gray-300'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-darker border-t border-gray-800 py-4 flex flex-col items-center space-y-4 shadow-2xl">
          {links.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="uppercase tracking-widest text-gray-300 hover:text-gold"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;