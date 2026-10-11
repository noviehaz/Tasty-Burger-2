import { useState } from 'react';
import { X } from 'lucide-react';

export default function AddProductModal({ isOpen, onClose, onAddProduct }) {
  const initialFormState = {
    image: '',
    name: '',
    category: 'Burgers',
    description: '',
    specification: '',
    rating: '',
    price: '',
    quantity: ''
  };

  const [formData, setFormData] = useState(initialFormState);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  // Form Validation & Handling (Requirement 2)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all 8 fields are filled
    for (const key in formData) {
      if (!formData[key].toString().trim()) {
        setError('Please fill in all fields before submitting.');
        return;
      }
    }

    if (Number(formData.price) <= 0 || Number(formData.quantity) < 0) {
      setError('Price and quantity must be valid positive numbers.');
      return;
    }

    onAddProduct({
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity)
    });

    setFormData(initialFormState);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-800 border border-slate-700 rounded-xl w-full max-w-lg p-6 relative shadow-2xl my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-amber-500 mb-4">Add New Product</h2>

        {error && (
          <div className="bg-red-950/80 border border-red-700 text-red-200 text-sm p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              placeholder="https://example.com/image.jpg"
              value={formData.image}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Product Name</label>
              <input
                type="text"
                name="name"
                placeholder="Double Cheese Bacon"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
              >
                <option value="Burgers">Burgers</option>
                <option value="Sides">Sides</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Price (₱)</label>
              <input
                type="number"
                name="price"
                placeholder="150"
                value={formData.price}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Quantity</label>
              <input
                type="number"
                name="quantity"
                placeholder="10"
                value={formData.quantity}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">Rating (1-5)</label>
              <input
                type="number"
                step="0.1"
                max="5"
                min="1"
                name="rating"
                placeholder="4.8"
                value={formData.rating}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Description</label>
            <textarea
              name="description"
              rows="2"
              placeholder="Brief overview of the burger..."
              value={formData.description}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
            ></textarea>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Product Specifications</label>
            <input
              type="text"
              name="specification"
              placeholder="Ingredients, patty size, allergens..."
              value={formData.specification}
              onChange={handleChange}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-100 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="pt-2 flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-sm bg-slate-700 hover:bg-slate-600 text-slate-300 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-sm bg-emerald-600 hover:bg-emerald-500 text-white font-medium"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}