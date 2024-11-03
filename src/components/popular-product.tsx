interface Product {
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
}

const products: Product[] = [
  {
    name: "Green Sandal",
    category: "Fashion & Lifestyle",
    price: 40.0,
    rating: 5.0,
    reviews: 770,
    image:
      "https://transmedic.co.id:7772/images/profile/user-uploads/user-13.jpg",
  },
  {
    name: "Headset",
    category: "Technology",
    price: 20.0,
    rating: 5.0,
    reviews: 770,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhp1nY6bRT1YJ1TJ1UgSG-3aOFBpgMMqyR23AHpeGWRaxlV1MErA0LTx0hz98KHXadJk&usqp=CAU",
  },
  {
    name: "White Shoes",
    category: "Fashion & Lifestyle",
    price: 20.0,
    rating: 5.0,
    reviews: 770,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4sWWcwWT5nhSoklq10yQVTiuROLMUeZf6RrLy_q0xOxu-LxkyWzmtg8PnSYmLkIvQPM&usqp=CAU",
  },
];

export function PopularProducts() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Popular Product</h2>
        <select className="text-sm border rounded-md px-2 py-1">
          <option>All Time</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.name} className="flex items-center space-x-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <span className="text-lg font-semibold text-emerald-600">
                  $ {product.price.toFixed(2)}
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="text-sm ml-1">
                      {product.rating.toFixed(1)}
                    </span>
                    <span className="text-xs text-gray-400 ml-1">
                      ({product.reviews})
                    </span>
                  </div>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
