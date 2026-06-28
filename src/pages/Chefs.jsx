
const Chefs = () => {
  return (
    <div className="bg-darker min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Head Chef Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div className="h-[700px]">
            <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80" alt="Head Chef" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </div>
          <div>
            <h3 className="text-gold uppercase tracking-widest text-sm mb-2">Executive Head Chef</h3>
            <h1 className="text-5xl font-serif text-white mb-6">Alessandro Ricci</h1>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg italic border-l-4 border-gold pl-4">
              "Respect the ingredient. That is the only rule in my kitchen. Nature has already done the hard work; it is our job to simply elevate it."
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Born in Tuscany and trained in the culinary capitals of Paris and Tokyo, Chef Alessandro brings a unique global perspective to Bella Vista. With over 20 years of experience in Michelin-starred kitchens, his culinary philosophy revolves around hyper-seasonality and striking flavor balances.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-gray-800 pt-6">
              <div>
                <h4 className="text-white font-bold mb-2">Specialties</h4>
                <ul className="text-gray-500 text-sm space-y-1">
                  <li>Modern Italian</li>
                  <li>Molecular Gastronomy</li>
                  <li>Seafood Mastery</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-2">Background</h4>
                <ul className="text-gray-500 text-sm space-y-1">
                  <li>Le Cordon Bleu, Paris</li>
                  <li>Noma, Copenhagen</li>
                  <li>Osteria Francescana</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* The Team */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-white">The Culinary Team</h2>
          <p className="text-gray-400 mt-4">The passionate individuals behind every masterpiece.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Elena Rostova", role: "Head Pastry Chef", img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&w=600&q=80" },
            { name: "Marcus Chen", role: "Chef de Cuisine", img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80" },
            { name: "Julian Baptiste", role: "Chief Sommelier", img: "https://images.unsplash.com/photo-1559564022-77291a1dfbf0?auto=format&fit=crop&w=600&q=80" }
          ].map((chef, idx) => (
            <div key={idx} className="bg-dark border border-gray-800 group">
              <div className="h-80 overflow-hidden">
                <img src={chef.img} alt={chef.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif text-white mb-1">{chef.name}</h3>
                <p className="text-gold text-sm tracking-widest uppercase">{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefs;