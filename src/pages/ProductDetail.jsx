import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, ShieldCheck } from 'lucide-react';

export default function ProductDetail({ products, onAddToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-12 space-y-4">
        <h2 className="text-xl font-bold text-slate-300">Product not found.</h2>
        <Link to="/" className="inline-flex items-center gap-2 text-amber-500 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to menu
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 transition text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" /> Back to All Products
      </Link>

      <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
        
        {/* Feature Image */}
        <div className="relative rounded-xl overflow-hidden bg-slate-900 border border-slate-700 h-80 md:h-full min-h-[300px]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dedicated Details Section */}
        <div className="space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold px-2.5 py-1 rounded-md">
                  {product.category}
                </span>
                <h1 className="text-3xl font-black text-slate-100 mt-2">{product.name}</h1>
              </div>
              <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-bold text-slate-200">{product.rating}</span>
              </div>
            </div>

            <p className="text-slate-300 text-base leading-relaxed">{product.description}</p>

            <div className="bg-slate-900/60 border border-slate-700/80 p-4 rounded-xl space-y-2">
              <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Product Specifications
              </h3>
              <p className="text-sm text-slate-200">{product.specification}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-700 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs text-slate-400 block">Price</span>
              <span className="text-3xl font-black text-amber-400">₱{product.price}</span>
            </div>

            <button
              onClick={() => onAddToCart(product)}
              disabled={product.quantity === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition ${
                product.quantity === 0
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {product.quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}