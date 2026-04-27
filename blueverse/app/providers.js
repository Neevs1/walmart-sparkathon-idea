"use client"
import { AuthProvider } from "../contexts/AuthContext"
import { CartProvider } from "../contexts/CartContext"
import CartDrawer from "../components/CartDrawer"

export function Providers({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
        <CartDrawer />
      </CartProvider>
    </AuthProvider>
  )
}
