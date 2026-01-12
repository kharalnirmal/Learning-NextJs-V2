export default function ProductsPage() {
  const products = [
    { id: 1, name: "Premium Headphones", price: "$299", image: "🎧" },
    { id: 2, name: "Smart Watch", price: "$399", image: "⌚" },
    { id: 3, name: "Laptop Pro", price: "$1299", image: "💻" },
    { id: 4, name: "Wireless Mouse", price: "$79", image: "🖱️" },
    { id: 5, name: "Mechanical Keyboard", price: "$149", image: "⌨️" },
    { id: 6, name: "4K Monitor", price: "$599", image: "🖥️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">
          Our Products
        </h1>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Discover our premium collection
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-purple-400 to-blue-500 h-48 flex items-center justify-center text-7xl">
                {product.image}
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-3xl font-bold text-purple-600 mb-4">
                  {product.price}
                </p>
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
