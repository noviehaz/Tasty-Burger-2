import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import AddProductModal from './components/AddProductModal';
import CartDrawer from './components/CartDrawer';
import { initialProducts } from './data/initialProducts';

export default function App() {
  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add dynamic product (Requirement 2)
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [
      ...prev,
      { ...newProduct, id: Date.now(), rating: Number(newProduct.rating) }
    ]);
  };

  // Modify quantities on main product list
  const handleUpdateProductQuantity = (id, delta) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
      )
    );
  };

  // Add item to cart (Requirement 1)
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, cartQuantity: 1 }];
    });
  };

  // Modify cart item quantity
  const handleUpdateCartQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.cartQuantity + delta;
            return newQty > 0 ? { ...item, cartQuantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Requirement 3: Overall total computation using .reduce()
  const overallProductTotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
        <Navbar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          onOpenModal={() => setIsModalOpen(true)}
          onOpenCart={() => setIsCartOpen(true)}
          cartCount={cart.reduce((a, b) => a + b.cartQuantity, 0)}
        />

        <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
          <Routes>
            <Route
              path="/"
              element={
                <ProductList
                  products={products}
                  selectedCategory={selectedCategory}
                  onUpdateQuantity={handleUpdateProductQuantity}
                  onAddToCart={handleAddToCart}
                  overallTotal={overallProductTotal}
                />
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProductDetail
                  products={products}
                  onAddToCart={handleAddToCart}
                  onUpdateQuantity={handleUpdateProductQuantity}
                />
              }
            />
          </Routes>
        </main>

        {/* Add Product Form Modal */}
        <AddProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddProduct={handleAddProduct}
        />

        {/* Cart Slide-out Drawer */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cart={cart}
          onUpdateCartQuantity={handleUpdateCartQuantity}
        />
      </div>
    </Router>
  );
}