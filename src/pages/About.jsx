import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-dark min-h-screen pt-32 pb-24">
      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-gold uppercase tracking-widest text-sm mb-4">Our Story</h3>
            <h1 className="text-5xl font-serif text-white mb-6">A Legacy of Culinary Excellence</h1>
            <p className="text-gray-400 leading-relaxed mb-6">
              Founded in 2010, Bella Vista began with a simple philosophy: to source the finest ingredients and let their natural flavors shine through expert preparation. Over the years, we have evolved from a passionate local eatery into a globally recognized destination for fine dining.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our commitment extends beyond the plate. We focus on creating an immersive sensory experience, where elegant architecture, bespoke table settings, and unparalleled service merge to create memories that last a lifetime.
            </p>
          </div>
          <div className="relative h-[600px]">
            <img src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80" alt="Chef plating" className="w-full h-full object-cover rounded-sm" />
            <div className="absolute -bottom-6 -left-6 bg-gold p-8 max-w-xs shadow-2xl hidden md:block">
              <p className="text-dark font-serif text-xl italic">"Cooking is an art, but dining is an experience."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-darker py-24 border-y border-gray-800">
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-serif text-white mb-16">Our Journey</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
            {[
              { year: '2010', title: 'The Inception', desc: 'Bella Vista opened its doors, introducing a fresh take on modern European cuisine.' },
              { year: '2015', title: 'First Michelin Star', desc: 'Recognized globally for culinary excellence and innovative menu design.' },
              { year: '2020', title: 'The Grand Renovation', desc: 'Expanded our dining room and introduced the exclusive private chef\'s table.' },
              { year: '2023', title: 'Sustainable Gastronomy', desc: 'Awarded the Green Star for our commitment to zero-waste kitchens and local sourcing.' }
            ].map((milestone, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-darker bg-gold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-900 p-6 rounded border border-gray-800 shadow-xl">
                  <div className="text-gold font-bold mb-1">{milestone.year}</div>
                  <h4 className="text-xl font-serif text-white mb-2">{milestone.title}</h4>
                  <p className="text-gray-400 text-sm">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8 text-center">
        <h3 className="text-gold uppercase tracking-widest text-sm mb-4">Recognition</h3>
        <h2 className="text-4xl font-serif text-white mb-16">Awards & Accolades</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            "2 Michelin Stars 2023",
            "World's 50 Best Restaurants",
            "James Beard Foundation Winner",
            "Wine Spectator Grand Award"
          ].map((award, idx) => (
            <div key={idx} className="p-8 border border-gray-800 hover:border-gold transition-colors">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Michelin_star.svg" alt="Star" className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <h4 className="text-white font-serif">{award}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;