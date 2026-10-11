export const initialProducts = [
  // --- Original 4 Products ---
  {
    id: 1,
    name: "Classic Cheeseburger",
    category: "Burgers",
    price: 180,
    quantity: 8,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    description: "Juicy beef patty topped with melted cheddar cheese, lettuce, tomatoes, and house sauce.",
    specification: "100% Angus Beef, Brioche Bun, Cheddar Cheese, Secret Sauce",
    rating: 4.8
  },
  {
    id: 2,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 160,
    quantity: 3, // Low stock (< 5)
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=500&q=80",
    description: "Crispy fried chicken breast fillet with pickles and tangy mayonnaise.",
    specification: "Fried Chicken Breast, Spicy Mayo, Dill Pickles, Sesame Bun",
    rating: 4.6
  },
  {
    id: 3,
    name: "Cajun French Fries",
    category: "Sides",
    price: 75,
    quantity: 12,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500&q=80",
    description: "Golden crispy skin-on fries tossed in savory Cajun spices.",
    specification: "Russet Potatoes, Cajun Spice Blend, Garlic Dip",
    rating: 4.5
  },
  {
    id: 4,
    name: "Chocolate Milkshake",
    category: "Drinks",
    price: 90,
    quantity: 2, // Low stock (< 5)
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=80",
    description: "Rich and creamy chocolate milkshake topped with whipped cream.",
    specification: "Dutch Cocoa, Whole Milk, Vanilla Ice Cream",
    rating: 4.9
  },

  // --- 10 New Products Added Below ---
  {
    id: 5,
    name: "Double Bacon BBQ Burger",
    category: "Burgers",
    price: 240,
    quantity: 6,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=500&q=80",
    description: "Two beef patties, crispy smoked bacon, onion rings, and smoky BBQ sauce.",
    specification: "Dual Angus Patties, Applewood Bacon, Crispy Onion Rings, BBQ Glaze",
    rating: 4.9
  },
  {
    id: 6,
    name: "Mushroom Swiss Burger",
    category: "Burgers",
    price: 210,
    quantity: 4, // Low stock (< 5)
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80",
    description: "Sautéed button mushrooms, melted Swiss cheese, and garlic aioli on a toasted bun.",
    specification: "Single Beef Patty, Swiss Cheese, Caramelized Mushrooms, Garlic Aioli",
    rating: 4.7
  },
  {
    id: 7,
    name: "Veggie Supreme Burger",
    category: "Burgers",
    price: 170,
    quantity: 10,
    image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500&q=80",
    description: "Hearty plant-based patty topped with avocado, fresh spinach, and cucumber.",
    specification: "Black Bean & Quinoa Patty, Avocado, Whole Wheat Bun, Vegan Mayo",
    rating: 4.4
  },
  {
    id: 8,
    name: "Spicy Jalapeño Crunch",
    category: "Burgers",
    price: 195,
    quantity: 1, // Low stock (< 5)
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500&q=80",
    description: "Fiery grilled beef with pickled jalapeños, pepper jack cheese, and spicy sriracha.",
    specification: "100% Beef Patty, Jalapeños, Pepper Jack Cheese, Spicy Mayo",
    rating: 4.6
  },
  {
    id: 9,
    name: "Crispy Mozzarella Sticks",
    category: "Sides",
    price: 120,
    quantity: 15,
    image: "https://images.unsplash.com/photo-1531749668029-2db88e4276c7?w=500&q=80",
    description: "Golden fried mozzarella cheese sticks served with warm marinara dipping sauce.",
    specification: "Real Mozzarella Cheese, Herb Breadcrumbs, Marinara Sauce",
    rating: 4.8
  },
  {
    id: 10,
    name: "Loaded Cheese Fries",
    category: "Sides",
    price: 135,
    quantity: 7,
    image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=500&q=80",
    description: "French fries smothered in melted cheddar cheese, bacon bits, and green onions.",
    specification: "Crispy Fries, Melted Cheddar, Real Bacon Bits, Chives",
    rating: 4.7
  },
  {
    id: 11,
    name: "Golden Onion Rings",
    category: "Sides",
    price: 85,
    quantity: 3, // Low stock (< 5)
    image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=500&q=80",
    description: "Thick-cut onion rings battered and fried to golden perfection.",
    specification: "Sweet White Onions, Beer Batter, Ranch Dip",
    rating: 4.3
  },
  {
    id: 12,
    name: "Strawberry Milkshake",
    category: "Drinks",
    price: 95,
    quantity: 9,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&q=80",
    description: "Blended fresh strawberry puree with vanilla ice cream and topped with a cherry.",
    specification: "Real Strawberries, Whole Milk, Vanilla Cream",
    rating: 4.8
  },
  {
    id: 13,
    name: "Iced Lemon Tea",
    category: "Drinks",
    price: 60,
    quantity: 20,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80",
    description: "Refreshing freshly brewed black tea infused with lemon citrus.",
    specification: "Black Tea Leaves, Fresh Lemon Juice, Pure Cane Sugar",
    rating: 4.5
  },
  {
    id: 14,
    name: "Classic Cold Soda",
    category: "Drinks",
    price: 50,
    quantity: 25,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80",
    description: "Ice-cold sparkling cola served over crushed ice.",
    specification: "Sparkling Cola, Crushed Ice, Fresh Lime Slice",
    rating: 4.2
  }
];