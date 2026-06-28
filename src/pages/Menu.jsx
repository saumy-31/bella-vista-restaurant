import { useState } from 'react';
import { motion } from 'framer-motion';

const menuData = [
  { id: 1, category: 'Starters', name: 'Wagyu Beef Tartare', desc: 'Quail egg, capers, truffle oil, sourdough crisp', price: '$28', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=60' },
  { id: 2, category: 'Starters', name: 'Oysters Rockefeller', desc: 'Spinach, pernod, hollandaise, breadcrumbs', price: '$24', img: 'https://images.unsplash.com/photo-1599813295874-9548483f9822?auto=format&fit=crop&w=400&q=60' },
  { id: 3, category: 'Starters', name: 'Heirloom Tomato Salad', desc: 'Burrata, aged balsamic, micro basil', price: '$18', img: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&w=400&q=60' },
  { id: 4, category: 'Main Course', name: 'Herb-Crusted Lamb Rack', desc: 'Minted pea purée, fondant potatoes, rosemary jus', price: '$52', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=400&q=60' },
  { id: 5, category: 'Main Course', name: 'Duck à l’Orange', desc: 'Crispy skin breast, duck confit croquette, citrus glaze', price: '$48', img: 'https://images.unsplash.com/photo-1627042633145-b780d842ba45?auto=format&fit=crop&w=400&q=60' },
  { id: 6, category: 'Main Course', name: 'Wild Mushroom Risotto', desc: 'Porcini, Parmigiano-Reggiano, truffle foam', price: '$36', img: 'https://images.unsplash.com/photo-1633504581786-316c8002b1b9?auto=format&fit=crop&w=400&q=60' },
  { id: 7, category: 'Seafood', name: 'Chilean Sea Bass', desc: 'Miso glaze, baby bok choy, ginger dashi', price: '$49', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=60' },
  { id: 8, category: 'Seafood', name: 'Lobster Thermidor', desc: 'Cognac cream, gruyere crust, saffron rice', price: '$65', img: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=400&q=60' },
  { id: 9, category: 'Desserts', name: 'Vanilla Bean Soufflé', desc: 'Grand Marnier crème anglaise', price: '$18', img: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=400&q=60' },
  { id: 10, category: 'Desserts', name: 'Valrhona Chocolate Tart', desc: 'Salted caramel, gold leaf, espresso gelato', price: '$20', img: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=400&q=60' },
  { id: 11, category: 'Beverages', name: 'Artisan Cocktails', desc: 'Selection of mixologist crafted cocktails', price: 'from $16', img: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=400&q=60' },
  { id: 12, category: 'Beverages', name: 'Wine Pairing', desc: 'Sommelier selected pairings for tasting menu', price: '$85', img: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=400&q=60' },
];

const categories = ['All', 'Starters', 'Main Course', 'Seafood', 'Desserts', 'Beverages'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenu = activeCategory === 'All' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <div className="bg-darker min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif text-white mb-4">Our Menu</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Seasonal ingredients crafted with classical techniques and modern flair.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 uppercase tracking-widest text-xs font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-gold border-gold text-dark' 
                  : 'border-gray-700 text-gray-400 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredMenu.map((item) => (
            <motion.div 
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="bg-dark border border-gray-800 group overflow-hidden"
            >
              <div className="h-56 overflow-hidden relative">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-dark/80 backdrop-blur-sm text-gold px-3 py-1 font-serif text-lg">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <p className="text-gold text-xs uppercase tracking-widest mb-2">{item.category}</p>
                <h3 className="text-2xl font-serif text-white mb-2">{item.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dietary Notes */}
        <div className="mt-24 border-t border-gray-800 pt-12 text-center text-gray-500 text-sm max-w-3xl mx-auto">
          <p>Please inform your server of any allergies or dietary restrictions. We offer vegetarian, vegan, and gluten-free options upon request. Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase your risk of foodborne illness.</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;