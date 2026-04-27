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
    let cancelled = false
    const token = (() => {
      try { return localStorage.getItem("shopmart_token") } catch { return null }
    })()

    if (token) {
      fetchCurrentUser(token, cancelled)
    } else {
      setLoading(false)
    }

    return () => { cancelled = true }
  }, [])

  const fetchCurrentUser = async (token, cancelled) => {
    try {
      const res = await fetch(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      if (cancelled) return
      if (res.ok) {
        const data = await res.json()
        setUser(data.user)
      } else {
        // Token invalid/expired — clear it
        try { localStorage.removeItem("shopmart_token") } catch {}
      }
    } catch (err) {
      console.error("Failed to fetch user:", err)
      // Keep token — might be a temporary network issue
    } finally {
      if (!cancelled) setLoading(false)
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

      try { localStorage.setItem("shopmart_token", data.token) } catch {}
      setUser(data.user)
      return { success: true, message: data.message }
    } catch (err) {
      const message = err.name === "TypeError"
        ? "Unable to connect to the server. Please check your connection."
        : err.message
      setError(message)
      return { success: false, message }
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

      try { localStorage.setItem("shopmart_token", data.token) } catch {}
      setUser(data.user)
      return { success: true, message: data.message }
    } catch (err) {
      const message = err.name === "TypeError"
        ? "Unable to connect to the server. Please check your connection."
        : err.message
      setError(message)
      return { success: false, message }
    }
  }

  const logout = () => {
    try { localStorage.removeItem("shopmart_token") } catch {}
    setUser(null)
    setError(null)
  }

  const clearError = () => setError(null)

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
        clearError,
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
