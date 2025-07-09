import Link from "next/link"
import { ArrowLeft, Heart, Star, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"

// Mock product data - in a real app, this would come from a database
const products = {
  1: {
    id: "1",
    name: "Wireless Headphones",
    description: "Premium wireless headphones with noise cancellation",
    fullDescription:
      "Experience superior sound quality with these premium wireless headphones featuring advanced noise cancellation technology. Perfect for music lovers, professionals, and anyone who values crystal-clear audio. With up to 30 hours of battery life and quick charge capability, these headphones are designed for all-day comfort and performance.",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.2,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
    ],
    category: "Electronics",
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life",
      "Quick charge (15 min = 3 hours)",
      "Bluetooth 5.0",
      "Premium comfort padding",
    ],
    specifications: {
      "Driver Size": "40mm",
      "Frequency Response": "20Hz - 20kHz",
      Impedance: "32 ohms",
      Weight: "250g",
      Connectivity: "Bluetooth 5.0, 3.5mm jack",
    },
  },
  2: {
    id: "2",
    name: "Smart Watch",
    description: "Advanced fitness tracking and smart notifications",
    fullDescription:
      "Stay connected and track your fitness goals with this advanced smartwatch. Features comprehensive health monitoring, GPS tracking, and seamless smartphone integration. Perfect for fitness enthusiasts and busy professionals who want to stay on top of their health and notifications.",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    rating: 4.5,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&h=600&fit=crop",
    ],
    category: "Electronics",
    inStock: true,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant (50m)",
      "7-day battery life",
      "Smart notifications",
    ],
    specifications: {
      Display: '1.4" AMOLED',
      Battery: "7 days typical use",
      "Water Resistance": "5ATM",
      Sensors: "Heart rate, GPS, Accelerometer",
      Compatibility: "iOS & Android",
    },
  },
  3: {
    id: "3",
    name: "Laptop Backpack",
    description: "Durable laptop backpack with multiple compartments",
    fullDescription:
      "Protect your laptop and organize your essentials with this durable, multi-compartment backpack. Designed for students, professionals, and travelers who need reliable protection for their devices and plenty of space for their belongings.",
    price: 45.99,
    originalPrice: 59.99,
    discount: 23,
    rating: 4.3,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=600&h=600&fit=crop",
    ],
    category: "Fashion",
    inStock: true,
    features: [
      'Fits laptops up to 15.6"',
      "Water-resistant material",
      "Multiple compartments",
      "Padded shoulder straps",
      "USB charging port",
    ],
    specifications: {
      Capacity: "25L",
      "Laptop Compatibility": 'Up to 15.6"',
      Material: "Water-resistant polyester",
      Dimensions: "45 x 32 x 15 cm",
      Weight: "0.8kg",
    },
  },
  4: {
    id: "4",
    name: "Coffee Maker",
    description: "Automatic drip coffee maker with programmable timer",
    fullDescription:
      "Wake up to freshly brewed coffee every morning with this programmable automatic drip coffee maker. Features a built-in timer, auto-shutoff, and brewing strength control for the perfect cup every time.",
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    rating: 4.6,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&h=600&fit=crop",
    ],
    category: "Home & Garden",
    inStock: true,
    features: [
      "12-cup capacity",
      "Programmable timer",
      "Auto shut-off",
      "Brew strength control",
      "Permanent filter included",
    ],
    specifications: {
      Capacity: "12 cups (1.8L)",
      Power: "1000W",
      Timer: "24-hour programmable",
      Material: "Stainless steel & glass",
      Dimensions: "35 x 20 x 40 cm",
    },
  },
  5: {
    id: "5",
    name: "Running Shoes",
    description: "Lightweight running shoes with excellent cushioning",
    fullDescription:
      "Experience ultimate comfort and performance with these lightweight running shoes. Designed with advanced cushioning technology and breathable materials for long-distance running and daily training.",
    price: 89.99,
    originalPrice: 120.0,
    discount: 25,
    rating: 4.4,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop",
    ],
    category: "Sports",
    inStock: true,
    features: [
      "Lightweight design",
      "Advanced cushioning",
      "Breathable mesh upper",
      "Durable rubber outsole",
      "Arch support",
    ],
    specifications: {
      Weight: "280g per shoe",
      Material: "Mesh and synthetic",
      "Sole Type": "Rubber",
      "Heel Drop": "10mm",
      Sizes: "US 6-13",
    },
  },
  6: {
    id: "6",
    name: "Cookbook Collection",
    description: "Essential cookbook collection for home chefs",
    fullDescription:
      "Master the art of cooking with this comprehensive cookbook collection. Features recipes from around the world, cooking techniques, and tips from professional chefs.",
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.7,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=600&fit=crop",
    ],
    category: "Books",
    inStock: true,
    features: [
      "500+ recipes",
      "Step-by-step instructions",
      "Professional photography",
      "Cooking tips and techniques",
      "International cuisine",
    ],
    specifications: {
      Pages: "400 pages",
      Format: "Hardcover",
      Language: "English",
      Publisher: "Culinary Press",
      ISBN: "978-1234567890",
    },
  },
  7: {
    id: "7",
    name: "Wireless Speaker",
    description: "Portable Bluetooth speaker with rich sound",
    fullDescription:
      "Enjoy your music anywhere with this portable Bluetooth speaker. Features rich, room-filling sound, long battery life, and water-resistant design perfect for outdoor adventures.",
    price: 49.99,
    originalPrice: 69.99,
    discount: 29,
    rating: 4.2,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=600&h=600&fit=crop",
    ],
    category: "Electronics",
    inStock: true,
    features: [
      "Bluetooth 5.0 connectivity",
      "12-hour battery life",
      "Water-resistant IPX7",
      "360-degree sound",
      "Built-in microphone",
    ],
    specifications: {
      "Battery Life": "12 hours",
      Connectivity: "Bluetooth 5.0",
      "Water Rating": "IPX7",
      Weight: "450g",
      Range: "30 feet",
    },
  },
  8: {
    id: "8",
    name: "Yoga Mat",
    description: "Non-slip yoga mat with carrying strap",
    fullDescription:
      "Practice yoga with confidence on this premium non-slip yoga mat. Made from eco-friendly materials with excellent grip and cushioning for all types of yoga and exercise.",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    rating: 4.5,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506629905607-d405d7d3b0d2?w=600&h=600&fit=crop",
    ],
    category: "Sports",
    inStock: true,
    features: [
      "Non-slip surface",
      "6mm thickness",
      "Eco-friendly TPE material",
      "Carrying strap included",
      "Easy to clean",
    ],
    specifications: {
      Dimensions: "183cm x 61cm x 6mm",
      Material: "TPE (Thermoplastic Elastomer)",
      Weight: "1.2kg",
      Texture: "Non-slip",
      "Care Instructions": "Wipe clean with damp cloth",
    },
  },
}



export default function ProductDetailPage({ params }) {
  const product = products[params.id]

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">Return to Home</button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ShopMart
            </Link>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart className="w-4 h-4" />
                Wishlist
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <ShoppingCart className="w-4 h-4" />
                Cart
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg overflow-hidden border">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square bg-white rounded-lg overflow-hidden border cursor-pointer hover:border-blue-500"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full mb-2">
                {product.category}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <a href="https://8th.io/mqehq"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Try it out! (On mobile)</button></a>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
              <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                {product.discount}% OFF
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-500"}`} />
              <span className={`font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Shipping Info */}
            <div className="space-y-3 pt-4 border-t">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="w-5 h-5 text-green-600" />
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>2-year warranty included</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RotateCcw className="w-5 h-5 text-orange-600" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.fullDescription}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Specifications</h3>
              <div className="space-y-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600 font-medium">{key}:</span>
                    <span className="text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
