import { X, Plus, Minus, ShoppingCart } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateCartQuantity }) {
  if (!isOpen) return null;

  // Requirement 3: Computation using .reduce()
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.cartQuantity,
    0
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="bg-slate-800 w-full max-w-md h-full flex flex-col shadow-2xl border-l border-slate-700">
        
        {/* Header */}
        <div className="p-4 border-b border-slate-700 flex justify-between items-center">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-lg">
            <ShoppingCart className="w-5 h-5" />
            <span>Your Order Cart</span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-slate-400">
              Your cart is empty.
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="bg-slate-900 p-3 rounded-lg border border-slate-700 flex gap-3 items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-100 text-sm">{item.name}</h4>
                  <div className="text-xs text-slate-400">₱{item.price} each</div>
                  <div className="text-sm font-bold text-emerald-400">
                    Subtotal: ₱{item.price * item.cartQuantity}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded border border-slate-700">
                  <button
                    onClick={() => onUpdateCartQuantity(item.id, -1)}
                    className="p-1 text-slate-300 hover:text-white"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-bold w-4 text-center">{item.cartQuantity}</span>
                  <button
                    onClick={() => onUpdateCartQuantity(item.id, 1)}
                    className="p-1 text-slate-300 hover:text-white"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Total */}
        <div className="p-4 border-t border-slate-700 bg-slate-900/50 space-y-3">
          <div className="flex justify-between items-center text-lg font-bold">
            <span className="text-slate-300">Cart Total:</span>
            <span className="text-amber-400">₱{cartTotal}</span>
          </div>
          <button
            disabled={cart.length === 0}
            className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg transition disabled:opacity-50"
          >
            Checkout Order
          </button>
        </div>

      </div>
    </div>
  );
}