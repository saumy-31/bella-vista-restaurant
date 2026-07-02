const Reservations = () => {
  return (
    <div className="bg-dark min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Reservation Form */}
        <div className="bg-gray-900 p-8 md:p-12 border border-gray-800 shadow-2xl">
          <h2 className="text-4xl font-serif text-white mb-2">Book a Table</h2>
          <p className="text-gray-400 mb-8">Reservations can be made up to 60 days in advance.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">Date</label>
                <input type="date" className="w-full bg-dark border border-gray-700 p-3 text-white focus:border-gold focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Time</label>
                <select className="w-full bg-dark border border-gray-700 p-3 text-white focus:border-gold focus:outline-none transition-colors">
                  <option>17:00</option><option>18:00</option><option>19:00</option><option>20:00</option><option>21:00</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-400 text-sm mb-2">Number of Guests</label>
              <select className="w-full bg-dark border border-gray-700 p-3 text-white focus:border-gold focus:outline-none transition-colors">
                <option>1 Person</option><option>2 People</option><option>3 People</option><option>4 People</option><option>5+ People (Call us)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-400 text-sm mb-2">First Name</label>
                <input type="text" className="w-full bg-dark border border-gray-700 p-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="John" />
              </div>
              <div>
                <label className="block text-gray-400 text-sm mb-2">Last Name</label>
                <input type="text" className="w-full bg-dark border border-gray-700 p-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="Doe" />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Email Address</label>
              <input type="email" className="w-full bg-dark border border-gray-700 p-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Special Requests / Allergies</label>
              <textarea rows="3" className="w-full bg-dark border border-gray-700 p-3 text-white focus:border-gold focus:outline-none transition-colors" placeholder="Anniversary, dietary restrictions, etc."></textarea>
            </div>

            <button type="submit" className="w-full bg-gold text-dark py-4 uppercase tracking-widest font-bold hover:bg-white transition-colors">
              Confirm Reservation
            </button>
          </form>
        </div>

        {/* Private Dining Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-12">
            <h3 className="text-gold uppercase tracking-widest text-sm mb-2">Exclusive Events</h3>
            <h2 className="text-4xl font-serif text-white mb-6">Private Dining</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Elevate your next corporate gathering, birthday celebration, or intimate wedding reception in our private dining rooms. Featuring dedicated service, customizable menus, and state-of-the-art audiovisual capabilities.
            </p>
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80" alt="Private Dining" className="w-full h-64 object-cover border border-gray-800 shadow-xl" />
          </div>

          <div className="bg-darker p-8 border border-gray-800">
            <h4 className="text-2xl font-serif text-white mb-4">Reservation Policies</h4>
            <ul className="text-gray-400 text-sm space-y-3">
              <li>• A credit card is required to secure reservations for parties of 4 or more.</li>
              <li>• Dress code is smart elegant. Jackets preferred, no sportswear.</li>
              <li>• We request 24 hours notice for any cancellations.</li>
              <li>• Late arrivals will be held for 15 minutes before the table is released.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;