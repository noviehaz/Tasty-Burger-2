import ProductCard from '../components/ProductCard';

export default function ProductList({
  products,
  selectedCategory,
  onUpdateQuantity,
  onAddToCart,
  overallTotal
}) {
  // Requirement 1: Category filtering using .filter()
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-6">
      
      {/* Overview & Total Summary (Requirement 3) */}
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 flex flex-wrap justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-100">Product Inventory</h1>
          <p className="text-slate-400 text-sm">
            Showing {filteredProducts.length} items in Category: <span className="text-amber-400 font-semibold">{selectedCategory}</span>
          </p>
        </div>
        
        {/* Automatic computation of all inventory value */}
        <div className="bg-slate-900 border border-slate-700 px-4 py-2.5 rounded-lg">
          <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">
            Overall Inventory Value
          </span>
          <span className="text-2xl font-black text-emerald-400">
            ₱{overallTotal}
          </span>
        </div>
      </div>

      {/* Grid Layout Display (Requirement 1) */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-slate-800/40 rounded-xl border border-slate-800 text-slate-400">
          No products found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onUpdateQuantity={onUpdateQuantity}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}

    </div>
  );
}