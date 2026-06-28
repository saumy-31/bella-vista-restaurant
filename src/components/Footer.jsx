import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-darker pt-16 pb-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        
        <div>
          <h3 className="font-serif text-2xl text-gold mb-6 tracking-wider">BELLA VISTA</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            An unforgettable culinary journey blending classic techniques with modern innovation. Experience the pinnacle of fine dining.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all"><FaInstagram /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all"><FaFacebookF /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gold hover:bg-gold hover:text-dark transition-all"><FaTwitter /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl text-white mb-6">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li><Link to="/menu" className="hover:text-gold transition-colors">Our Menu</Link></li>
            <li><Link to="/reservations" className="hover:text-gold transition-colors">Book a Table</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
            <li><Link to="/chefs" className="hover:text-gold transition-colors">Private Events</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl text-white mb-6">Opening Hours</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex justify-between md:justify-start md:space-x-8"><span>Mon - Thu:</span> <span>5:00 PM - 10:30 PM</span></li>
            <li className="flex justify-between md:justify-start md:space-x-8 text-gold"><span>Fri - Sat:</span> <span>5:00 PM - 11:30 PM</span></li>
            <li className="flex justify-between md:justify-start md:space-x-8"><span>Sunday:</span> <span>4:00 PM - 9:30 PM</span></li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-900 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Bella Vista Fine Dining. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;