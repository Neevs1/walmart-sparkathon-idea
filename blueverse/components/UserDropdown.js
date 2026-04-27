"use client"
import { useState, useRef, useEffect } from "react"
import { User, LogOut, Package, Heart, Settings } from "lucide-react"
import { useAuth } from "../contexts/AuthContext"

export default function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { user, logout } = useAuth()

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  if (!user) return null

  const initials = user.username
    ? user.username.charAt(0).toUpperCase()
    : user.email.charAt(0).toUpperCase()

  const menuItems = [
    { icon: Package, label: "My Orders", onClick: () => {} },
    { icon: Heart, label: "Wishlist", onClick: () => {} },
    { icon: Settings, label: "Settings", onClick: () => {} },
  ]

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
          {initials}
        </div>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          style={{ animation: "dropdownFadeIn 0.2s ease-out" }}
        >
          {/* User info header */}
          <div className="px-4 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-md">
                {initials}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{user.username}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <div className="py-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    item.onClick()
                    setIsOpen(false)
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Icon className="w-4 h-4 text-gray-400" />
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Logout */}
          <div className="border-t border-gray-100 py-2">
            <button
              onClick={() => {
                logout()
                setIsOpen(false)
              }}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
