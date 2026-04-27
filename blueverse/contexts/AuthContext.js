"use client"
import { createContext, useContext, useState, useEffect } from "react"

const AuthContext = createContext()

const API_URL = "http://localhost:5000/api/auth"

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Rehydrate user on mount from stored JWT
  useEffect(() => {
    const token = localStorage.getItem("shopmart_token")
    if (token) {
      fetchCurrentUser(token)
    } else {
      setLoading(false)
    }
  }, [])

  const fetchCurrentUser = async (token) => {
    try {
      const res = await fetch(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
      } else {
        // Token invalid/expired
        localStorage.removeItem("shopmart_token")
      }
    } catch (err) {
      console.error("Failed to fetch user:", err)
      localStorage.removeItem("shopmart_token")
    } finally {
      setLoading(false)
    }
  }

  const register = async (username, email, password) => {
    setError(null)
    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password })
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Registration failed")
      }

      localStorage.setItem("shopmart_token", data.token)
      setUser(data.user)
      return { success: true, message: data.message }
    } catch (err) {
      setError(err.message)
      return { success: false, message: err.message }
    }
  }

  const login = async (email, password) => {
    setError(null)
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || "Login failed")
      }

      localStorage.setItem("shopmart_token", data.token)
      setUser(data.user)
      return { success: true, message: data.message }
    } catch (err) {
      setError(err.message)
      return { success: false, message: err.message }
    }
  }

  const logout = () => {
    localStorage.removeItem("shopmart_token")
    setUser(null)
    setError(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        isAuthenticated: !!user,
        register,
        login,
        logout,
        setError
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
