import { Link } from 'react-router-dom';
import { Plus, Minus, ShoppingCart, AlertCircle, Eye } from 'lucide-react';

export default function ProductCard({ product, onUpdateQuantity, onAddToCart }) {
  // Requirement 3: Subtotal calculation
  const subtotal = product.price * product.quantity;
  
  // Requirement 4: Conditional formatting for Low Stock (< 5)
  const isLowStock = product.quantity < 5;

  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 flex flex-col justify-between hover:border-slate-600 transition shadow-lg">
      <div>
        {/* Image & Stock Badge */}
        <div className="relative h-48 w-full bg-slate-900 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
          {/* Conditional Low Stock Highlight (Requirement 4) */}
          {isLowStock && (
            <span className="absolute top-2 right-2 bg-red-600/90 text-white text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md animate-pulse">
              <AlertCircle className="w-3.5 h-3.5" />
              Low Stock
            </span>
          )}
          <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-700">
            {product.category}
          </span>
        </div>

        {/* Card Content */}
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-bold text-slate-100">{product.name}</h3>
          <p className="text-sm text-slate-400 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center pt-2">
            <div>
              <span className="text-xs text-slate-400 block">Unit Price</span>
              <span className="text-amber-400 font-bold text-lg">₱{product.price}</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">Stock Subtotal</span>
              {/* Requirement 3: Display calculated subtotal */}
              <span className="text-emerald-400 font-bold text-lg">₱{subtotal}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions & Quantity Controls */}
      <div className="p-4 pt-0 space-y-3">
        {/* Stock Quantity Controller */}
        <div className="flex items-center justify-between bg-slate-900/60 p-2 rounded-lg border border-slate-700/50">
          <span className="text-xs font-medium text-slate-400">Stock Qty:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdateQuantity(product.id, -1)}
              className="p-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 transition"
              title="Decrease Stock"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className={`text-sm font-bold w-6 text-center ${isLowStock ? 'text-red-400' : 'text-slate-100'}`}>
              {product.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(product.id, 1)}
              className="p-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 transition"
              title="Increase Stock"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Cart & Detail Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/product/${product.id}`}
            className="flex items-center justify-center gap-1 bg-slate-700 hover:bg-slate-600 text-slate-200 py-2 rounded-lg text-xs font-semibold transition"
          >
            <Eye className="w-3.5 h-3.5" />
            Details
          </Link>

          {/* Conditional Rendering on Add to Cart (Requirement 1) */}
          <button
            onClick={() => onAddToCart(product)}
            disabled={product.quantity === 0}
            className={`flex items-center justify-center gap-1 py-2 rounded-lg text-xs font-semibold transition ${
              product.quantity === 0
                ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
                : 'bg-amber-500 hover:bg-amber-400 text-slate-950'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {product.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}