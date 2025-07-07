"use client"

import Link from "next/link"
import { Heart, Star } from "lucide-react"

export function ProductCard({ product, onAddToCart }) {
  const handleAddToCart = (e) => {
    e.preventDefault() // Prevent navigation when clicking "Add to Cart"
    e.stopPropagation()
    if (onAddToCart) {
      onAddToCart(product)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 group">
      <div className="relative">
        <Link href={`/product/${product.id}`}>
          <div className="aspect-square bg-gray-100 overflow-hidden rounded-t-lg">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        </Link>

        {/* Discount Badge */}
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
          {product.discount}% OFF
        </div>

        {/* Wishlist Button */}
        <button
          className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white rounded-full shadow-md transition-colors"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            // Add to wishlist logic here
            console.log(`Added ${product.name} to wishlist`)
          }}
        >
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
        </button>
      </div>

      <div className="p-4 space-y-3">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg hover:text-blue-600 transition-colors cursor-pointer">{product.name}</h3>
        </Link>

        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>

        {/* Rating Stars */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-gray-900">${product.price}</span>
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
