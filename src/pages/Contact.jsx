import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-darker min-h-screen pt-32 pb-24">
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-white mb-4">Get In Touch</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">We look forward to welcoming you. Please contact us for general inquiries, career opportunities, or press relations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark p-10 text-center border border-gray-800 hover:border-gold transition-colors">
            <FaMapMarkerAlt className="text-gold text-4xl mx-auto mb-6" />
            <h3 className="text-xl font-serif text-white mb-3">Address</h3>
            <p className="text-gray-400">123 Culinary Boulevard<br/>Gourmet District<br/>Metropolis, NY 10001</p>
          </div>
          <div className="bg-dark p-10 text-center border border-gray-800 hover:border-gold transition-colors">
            <FaPhoneAlt className="text-gold text-4xl mx-auto mb-6" />
            <h3 className="text-xl font-serif text-white mb-3">Phone</h3>
            <p className="text-gray-400 mb-2">Reservations: (555) 123-4567</p>
            <p className="text-gray-400">Events: (555) 123-4568</p>
          </div>
          <div className="bg-dark p-10 text-center border border-gray-800 hover:border-gold transition-colors">
            <FaEnvelope className="text-gold text-4xl mx-auto mb-6" />
            <h3 className="text-xl font-serif text-white mb-3">Email</h3>
            <p className="text-gray-400 mb-2">info@bellavistadining.com</p>
            <p className="text-gray-400">press@bellavistadining.com</p>
          </div>
        </div>
      </div>

      {/* Map & Form Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-800">
        
        {/* Google Maps Embed Placeholder */}
        <div className="h-[500px] lg:h-auto bg-gray-900 w-full relative grayscale invert opacity-80">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14482737637402!3d40.69766374865767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1684501234567!5m2!1sen!2sus" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen="" 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade">
           </iframe>
        </div>

        {/* Contact Form */}
        <div className="bg-dark p-10 lg:p-16">
          <h3 className="text-3xl font-serif text-white mb-8">Send a Message</h3>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input type="text" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="Your Name" />
            </div>
            <div>
              <input type="email" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="Your Email" />
            </div>
            <div>
              <input type="text" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="Subject" />
            </div>
            <div>
              <textarea rows="5" className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-gold text-dark px-10 py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;