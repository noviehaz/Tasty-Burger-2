import { Link } from 'react-router-dom';
import { ShoppingBag, PlusCircle, Utensils } from 'lucide-react';

export default function Navbar({ selectedCategory, setSelectedCategory, onOpenModal, onOpenCart, cartCount }) {
  const categories = ['All', 'Burgers', 'Sides', 'Drinks'];

  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-amber-500">
          <Utensils className="w-6 h-6" />
          <span>Tasty Burger 2</span>
        </Link>

        {/* Filter Buttons (Requirement 1) */}
        <div className="flex gap-2 overflow-x-auto py-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-900 font-semibold'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenModal}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-1.5 rounded-lg text-sm font-medium transition"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Item</span>
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 bg-slate-700 hover:bg-slate-600 px-3.5 py-1.5 rounded-lg text-sm font-medium transition"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>Cart</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-slate-900 font-bold text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
}