"use client"
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useCart } from "../contexts/CartContext"

export default function CartDrawer() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartTotal,
    isCartOpen,
    setIsCartOpen
  } = useCart()

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-[90] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsCartOpen(false)}
        style={{ animation: "fadeIn 0.2s ease-out" }}
      />

      {/* Drawer */}
      <div
        className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full"
        style={{ animation: "slideInRight 0.3s ease-out" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-gray-900">Your Cart</h2>
            {cartCount > 0 && (
              <span className="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full px-6 text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-gray-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Your cart is empty</h3>
              <p className="text-sm text-gray-400 mb-6">
                Looks like you haven&apos;t added any items yet
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  {/* Product image */}
                  <div className="w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 truncate">{item.name}</h4>
                    <p className="text-sm font-bold text-blue-600 mt-1">${item.price.toFixed(2)}</p>

                    {/* Quantity controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - only show when cart has items */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 px-6 py-5 space-y-4 bg-white">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Subtotal ({cartCount} items)</span>
              <span className="text-lg font-bold text-gray-900">${cartTotal.toFixed(2)}</span>
            </div>

            {/* Free shipping bar */}
            {cartTotal < 50 ? (
              <div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Add ${(50 - cartTotal).toFixed(2)} for free shipping</span>
                  <span>$50.00</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((cartTotal / 50) * 100, 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                You qualify for free shipping!
              </div>
            )}

            {/* Action buttons */}
            <Link
              href="/cart"
              onClick={() => setIsCartOpen(false)}
              className="block w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl text-center shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200"
            >
              View Cart & Checkout
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
