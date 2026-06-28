import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop" 
            alt="Fine Dining Atmosphere" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-gold tracking-[0.3em] uppercase text-sm md:text-lg mb-4"
          >
            A Taste of Perfection
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-serif text-white mb-8 text-shadow"
          >
            BELLA VISTA
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
          >
            Experience gastronomy elevated to an art form. Every dish tells a story of passion, precision, and flavor.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/reservations" className="bg-gold text-dark px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors">
              Book a Table
            </Link>
            <Link to="/menu" className="border border-gold text-gold px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-gold hover:text-dark transition-colors">
              View Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h3 className="text-gold uppercase tracking-widest text-sm mb-2">Culinary Masterpieces</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Signature Dishes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80", title: "Wagyu Beef Tenderloin", desc: "Truffle mash, seasonal asparagus, red wine reduction." },
              { img: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80", title: "Pan-Seared Scallops", desc: "Cauliflower purée, crispy pancetta, lemon butter." },
              { img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80", title: "Dark Chocolate Dome", desc: "Gold leaf, raspberry coulis, vanilla bean ice cream." }
            ].map((dish, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden h-80 mb-6 relative">
                  <img src={dish.img} alt={dish.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                </div>
                <h4 className="text-2xl font-serif text-white mb-2 group-hover:text-gold transition-colors">{dish.title}</h4>
                <p className="text-gray-400">{dish.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Story */}
      <section className="py-24 bg-darker grid grid-cols-1 md:grid-cols-2">
        <div className="h-96 md:h-auto overflow-hidden">
          <img src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80" alt="Restaurant Interior" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-0">
          <h3 className="text-gold uppercase tracking-widest text-sm mb-4">Our Ambience</h3>
          <h2 className="text-4xl font-serif text-white mb-6">An Atmosphere of Unrivaled Elegance</h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Situated in the heart of the city, Bella Vista offers panoramic views paired with an intimate dining setting. Our interior design blends modern luxury with classic sophistication, creating the perfect backdrop for romantic dinners, corporate celebrations, and milestone events.
          </p>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full"></div> Award-Winning Sommelier</li>
            <li className="flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full"></div> Sourced from Local Artisanal Farms</li>
            <li className="flex items-center gap-4"><div className="w-2 h-2 bg-gold rounded-full"></div> Impeccable White-Glove Service</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-gold uppercase tracking-widest text-sm mb-2">Reviews</h3>
          <h2 className="text-4xl font-serif text-white mb-16">Guest Experiences</h2>
          
          <div className="relative bg-gray-900 p-12 border border-gray-800">
            <div className="text-gold text-5xl font-serif absolute top-4 left-6">"</div>
            <p className="text-xl italic text-gray-300 mb-8 leading-relaxed relative z-10">
              The tasting menu at Bella Vista is nothing short of a revelation. Each course was perfectly timed and paired with exceptional wines. Truly a Michelin-worthy experience right in our city.
            </p>
            <h5 className="text-white font-bold tracking-widest uppercase text-sm">- Jonathan Hayes</h5>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-dark/80 z-10"></div>
          <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2000&q=80" alt="Dining Table" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-20 text-center max-w-2xl px-4">
          <h2 className="text-5xl font-serif text-white mb-6">Reserve Your Table</h2>
          <p className="text-gray-300 mb-10">Join us for an evening of exquisite culinary delight. Advance reservations are highly recommended.</p>
          <Link to="/reservations" className="inline-block bg-gold text-dark px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors">
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;