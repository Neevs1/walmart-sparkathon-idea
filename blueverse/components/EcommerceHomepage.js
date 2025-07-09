"use client"
import { useState, useEffect, useRef } from "react"
import { ProductCard } from "./ProductCard"
import Link from "next/link"
import {
  Search,
  MapPin,
  ShoppingCart,
  User,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  MessageCircle,
  ImageIcon,
  Send,
  Mic,
  Upload,
  Sparkles,
} from "lucide-react"

const EcommerceHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [showChatbot, setShowChatbot] = useState(false)
  const [activeTab, setActiveTab] = useState("chat")
  const [chatMessages, setChatMessages] = useState([
    {
      id: "1",
      role: "bot",
      content: "Hello! I'm here to help you plan the perfect birthday party. What can I assist you with today?",
      timestamp: "5:47:18 PM",
    },
  ])
  const [chatInput, setChatInput] = useState("")
  const [conversationStep, setConversationStep] = useState(0)
  const [uploadedImage, setUploadedImage] = useState(null)
  const [imageAnalysisResult, setImageAnalysisResult] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    rating: "",
    sortBy: "",
  })

  const chatMessagesRef = useRef(null)

  // Birthday party products for image analysis
  const birthdayPartyProducts = [
    {
      id: "bp1",
      name: "Pirate Party Decorations Set",
      price: 24.99,
      originalPrice: 34.99,
      discount: 29,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 89,
      category: "Party Supplies",
      description: "Complete pirate theme party decoration kit with banners, balloons, and table settings",
    },
    {
      id: "bp2",
      name: "Pokemon Birthday Cake Topper Set",
      price: 15.99,
      originalPrice: 22.99,
      discount: 30,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 156,
      category: "Party Supplies",
      description: "Pokemon themed cake toppers and candles for birthday celebrations",
    },
    {
      id: "bp3",
      name: "Kids Pirate Costume Set",
      price: 19.99,
      originalPrice: 29.99,
      discount: 33,
      image: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 203,
      category: "Costumes",
      description: "Complete pirate costume with hat, eye patch, and sword for kids",
    },
    {
      id: "bp4",
      name: "Party Balloons Assorted Colors",
      price: 8.99,
      originalPrice: 12.99,
      discount: 31,
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=300&fit=crop",
      rating: 4.2,
      reviews: 445,
      category: "Party Supplies",
      description: "Colorful party balloons perfect for any birthday celebration",
    },
    {
      id: "bp5",
      name: "Birthday Party Tableware Set",
      price: 16.99,
      originalPrice: 24.99,
      discount: 32,
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 178,
      category: "Party Supplies",
      description: "Complete tableware set with plates, cups, and napkins for birthday parties",
    },
  ]

  // Predefined conversation flow for birthday party planning
  const conversationFlow = [
    {
      userMessage: "I'm planning my son's 10th birthday party",
      botResponse:
        "That's wonderful! I'd love to help you plan an amazing birthday party. What does your son like? Does he have any particular themes in mind?",
    },
    {
      userMessage: "He likes Pirates and Pokemon",
      botResponse: `Great choices! Let me give you detailed suggestions for both themes. Which one would you like to explore first?

🏴‍☠️ **Pirate Theme** - Adventure on the high seas!
⚡ **Pokemon Theme** - Gotta catch 'em all!

Just let me know which theme interests you more, or I can provide details for both!`,
    },
    {
      userMessage: "Tell me about the Pirate theme",
      botResponse: `🏴‍☠️ **Pirate Theme Birthday Party:**

**Decorations:**
- Treasure chest centerpieces
- Pirate ship cake
- Black and red balloons
- Pirate flags and banners
- "Walk the plank" entrance

**Costumes & Accessories:**
- Pirate costumes for kids
- Eye patches for all guests
- Pirate hats and bandanas
- Plastic swords

**Activities:**
- Treasure hunt game
- "Pin the X on the treasure map"
- Pirate ship craft station

**Party Favors:**
- Gold coin chocolates
- Mini treasure maps
- Plastic swords
- Pirate stickers
- Small treasure chests with candies

This theme creates an adventurous atmosphere that kids absolutely love!`,
    },
    {
      userMessage: "Tell me about the Pokemon theme",
      botResponse: `⚡ **Pokemon Theme Birthday Party:**

**Decorations:**
- Pokemon-themed cake (Pikachu or Pokeball design)
- Pokestop decorations around the house
- Pokemon balloons and streamers
- Giant Pokeball centerpieces
- Pokemon character cutouts

**Costumes & Accessories:**
- Pokemon costumes (Pikachu, Charizard, etc.)
- Pokemon trainer hats
- Pokeball accessories

**Activities:**
- "Catch the Pokemon" scavenger hunt
- Pokemon trivia contest
- Pokemon card trading station
- Pin the tail on Pikachu

**Party Favors:**
- Pokemon trading cards
- Mini Pokemon figurines
- Pokemon stickers and tattoos
- Pokeball stress balls
- Pokemon-themed candies

This theme is perfect for kids who love adventure and collecting!`,
    },
    {
      userMessage: "Thank you so much! This is really helpful.",
      botResponse:
        "You're very welcome! I'm glad I could help make your son's 10th birthday special. Both themes would create an unforgettable experience. Do you need help with anything else for the party planning?",
    },
  ]

  // All products data
  const allProducts = [
    {
      id: "1",
      name: "Wireless Headphones",
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 234,
      category: "Electronics",
      description: "Premium wireless headphones with noise cancellation",
    },
    {
      id: "2",
      name: "Smart Watch",
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 156,
      category: "Electronics",
      description: "Advanced fitness tracking and smart notifications",
    },
    {
      id: "3",
      name: "Laptop Backpack",
      price: 45.99,
      originalPrice: 59.99,
      discount: 23,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 89,
      category: "Fashion",
      description: "Durable laptop backpack with multiple compartments",
    },
    {
      id: "4",
      name: "Coffee Maker",
      price: 129.99,
      originalPrice: 159.99,
      discount: 19,
      image: "https://images.unsplash.com/photo-1517256673644-36ad11246d21?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 312,
      category: "Home & Garden",
      description: "Automatic drip coffee maker with programmable timer",
    },
    {
      id: "5",
      name: "Running Shoes",
      price: 89.99,
      originalPrice: 120.0,
      discount: 25,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      rating: 4.4,
      reviews: 203,
      category: "Sports",
      description: "Lightweight running shoes with excellent cushioning",
    },
    {
      id: "6",
      name: "Cookbook Collection",
      price: 24.99,
      originalPrice: 34.99,
      discount: 29,
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop",
      rating: 4.7,
      reviews: 67,
      category: "Books",
      description: "Essential cookbook collection for home chefs",
    },
    {
      id: "7",
      name: "Wireless Speaker",
      price: 49.99,
      originalPrice: 69.99,
      discount: 29,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
      rating: 4.2,
      reviews: 145,
      category: "Electronics",
      description: "Portable Bluetooth speaker with rich sound",
    },
    {
      id: "8",
      name: "Yoga Mat",
      price: 29.99,
      originalPrice: 39.99,
      discount: 25,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 178,
      category: "Sports",
      description: "Non-slip yoga mat with carrying strap",
    },
  ]

  // Hero slider data
  const heroSlides = [
    {
      id: 1,
      title: "Summer Sale",
      subtitle: "Up to 70% off on all items",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop",
      cta: "Shop Now",
    },
    {
      id: 2,
      title: "New Arrivals",
      subtitle: "Discover the latest trends",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&h=600&fit=crop",
      cta: "Explore",
    },
    {
      id: 3,
      title: "Electronics Sale",
      subtitle: "Best deals on tech gadgets",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200&h=600&fit=crop",
      cta: "Shop Electronics",
    },
  ]

  // Categories data
  const categories = [
    { name: "Electronics", icon: "📱", color: "bg-blue-100 text-blue-800" },
    { name: "Grocery", icon: "🛒", color: "bg-green-100 text-green-800" },
    { name: "Home & Garden", icon: "🏠", color: "bg-yellow-100 text-yellow-800" },
    { name: "Fashion", icon: "👗", color: "bg-pink-100 text-pink-800" },
    { name: "Sports", icon: "⚽", color: "bg-purple-100 text-purple-800" },
    { name: "Books", icon: "📚", color: "bg-indigo-100 text-indigo-800" },
    { name: "Toys", icon: "🧸", color: "bg-orange-100 text-orange-800" },
    { name: "Beauty", icon: "💄", color: "bg-red-100 text-red-800" },
  ]

  // Featured products (first 4 from allProducts)
  const featuredProducts = allProducts.slice(0, 4)

  // Tab configuration - removed text generation
  const tabs = [
    { id: "chat", label: "AI Chat", icon: MessageCircle },
    { id: "image", label: "Image Analysis", icon: ImageIcon },
  ]

  // Handle chatbot submit
  const handleChatSubmit = (e) => {
    e.preventDefault()
    if (!chatInput.trim()) return

    const newUserMessage = {
      id: Date.now().toString(),
      role: "user",
      content: chatInput,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    }

    setChatMessages((prev) => [...prev, newUserMessage])
    setChatInput("")

    // Simulate bot response based on conversation flow
    setTimeout(() => {
      let botResponse = "I'm here to help you with your shopping needs. Feel free to ask me anything!"

      if (conversationStep < conversationFlow.length) {
        const currentFlow = conversationFlow[conversationStep]
        if (chatInput.toLowerCase().includes("planning") || chatInput.toLowerCase().includes("birthday")) {
          botResponse = currentFlow.botResponse
          setConversationStep((prev) => prev + 1)
        } else if (chatInput.toLowerCase().includes("pirates") && chatInput.toLowerCase().includes("pokemon")) {
          botResponse = conversationFlow[1].botResponse
          setConversationStep(2)
        } else if (chatInput.toLowerCase().includes("pirate")) {
          botResponse = conversationFlow[2].botResponse
          setConversationStep(3)
        } else if (chatInput.toLowerCase().includes("pokemon")) {
          botResponse = conversationFlow[3].botResponse
          setConversationStep(4)
        } else if (chatInput.toLowerCase().includes("thank")) {
          botResponse = conversationFlow[4].botResponse
          setConversationStep(5)
        }
      }

      const botMessage = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        content: botResponse,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setChatMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setUploadedImage(e.target?.result)
        analyzeImage(e.target?.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Simulate image analysis
  const analyzeImage = (imageData) => {
    setIsAnalyzing(true)
    setImageAnalysisResult("")

    // Simulate AI analysis delay
    setTimeout(() => {
      const analysisResult = `🎉 **Birthday Party Image Analysis Results:**

**Detected Objects & Themes:**
- Birthday cake with candles
- Colorful balloons and streamers
- Party decorations
- Gift boxes and party favors
- Children's party setup

**Recommended Products for Your Party:**

Based on the birthday party theme detected in your image, here are some perfect products from our store:

🎈 **Party Decorations:** Balloon sets, streamers, banners
🎂 **Cake Accessories:** Candles, cake toppers, serving plates  
🎁 **Party Favors:** Gift bags, small toys, candy assortments
🎭 **Costumes & Accessories:** Theme-based costumes, party hats
🎪 **Activities:** Party games, craft supplies, entertainment items

Would you like me to show you specific products that would be perfect for recreating this party theme?`

      setImageAnalysisResult(analysisResult)
      setIsAnalyzing(false)
    }, 2000)
  }

  // Search function
  const performSearch = (query, appliedFilters = filters) => {
    setLoading(true)
    // Simulate API delay
    setTimeout(() => {
      let results = allProducts

      // Filter by search query
      if (query.trim()) {
        results = results.filter(
          (product) =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase()) ||
            product.category.toLowerCase().includes(query.toLowerCase()),
        )
      }

      // Apply filters
      if (appliedFilters.category) {
        results = results.filter((product) => product.category === appliedFilters.category)
      }
      if (appliedFilters.minPrice) {
        results = results.filter((product) => product.price >= Number.parseFloat(appliedFilters.minPrice))
      }
      if (appliedFilters.maxPrice) {
        results = results.filter((product) => product.price <= Number.parseFloat(appliedFilters.maxPrice))
      }
      if (appliedFilters.rating) {
        results = results.filter((product) => product.rating >= Number.parseFloat(appliedFilters.rating))
      }

      // Sort results
      if (appliedFilters.sortBy === "price-low") {
        results.sort((a, b) => a.price - b.price)
      } else if (appliedFilters.sortBy === "price-high") {
        results.sort((a, b) => b.price - a.price)
      } else if (appliedFilters.sortBy === "rating") {
        results.sort((a, b) => b.rating - a.rating)
      } else if (appliedFilters.sortBy === "reviews") {
        results.sort((a, b) => b.reviews - a.reviews)
      }

      setSearchResults(results)
      setShowSearchResults(true)
      setLoading(false)
    }, 300)
  }

  // Handle search input
  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    if (query.trim()) {
      performSearch(query)
    } else {
      setShowSearchResults(false)
      setSearchResults([])
    }
  }

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      performSearch(searchQuery)
    }
  }

  // Handle filter change
  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)
    if (searchQuery.trim() || Object.values(newFilters).some((v) => v)) {
      performSearch(searchQuery, newFilters)
    }
  }

  // Clear search and filters
  const clearSearch = () => {
    setSearchQuery("")
    setShowSearchResults(false)
    setSearchResults([])
    setFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
      rating: "",
      sortBy: "",
    })
  }

  // Auto-advance hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  // Auto-scroll chat to bottom when new messages are added
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }, [chatMessages])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product])
    console.log(`Added ${product.name} to cart`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 border-b border-gray-200">
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Deliver to: 10001</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <a href="#" className="hover:text-blue-600">
                Help
              </a>
              <a href="#" className="hover:text-blue-600">
                Orders
              </a>
              <a href="#" className="hover:text-blue-600">
                Account
              </a>
            </div>
          </div>

          {/* Main header */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                ShopMart
              </Link>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Departments
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Services
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
                  Deals
                </a>
              </nav>
            </div>

            {/* Enhanced Search Bar with Chatbot */}
            <div className="flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 pr-28 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => setShowChatbot(!showChatbot)}
                    className="relative p-1.5 hover:bg-gray-100 rounded-full transition-colors group"
                    title="AI Search"
                  >
                    {/* Enhanced AI Search Icon */}
                    <div className="relative bg-gradient-to-r from-orange-400 to-purple-600 rounded-full p-2 shadow-lg">
                      <Sparkles className="w-4 h-4 text-white" />
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-purple-600 opacity-75 animate-ping"></div>
                    </div>
                    {/* AI Search label */}
                    <div className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold shadow-sm">
                      AI
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3 text-orange-300" />
                        AI Search
                        <span className="text-blue-300">🔍</span>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowFilters(!showFilters)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <SlidersHorizontal className="w-4 h-4 text-gray-400" />
                  </button>
                  <button type="submit" className="p-1 hover:bg-gray-100 rounded">
                    <Search className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </form>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <User className="w-6 h-6 text-gray-600" />
              </button>
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <ShoppingCart className="w-6 h-6 text-gray-600" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
                Departments
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
                Services
              </a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600">
                Deals
              </a>
            </nav>
          </div>
        )}

        {/* Search Filters */}
        {showFilters && (
          <div className="container mx-auto px-4 py-4 border-t border-gray-200">
            <div className="flex flex-wrap gap-4 items-center">
              <select
                value={filters.category}
                onChange={(e) => handleFilterChange("category", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
                onChange={(e) => handleFilterChange("minPrice", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm w-24"
              />
              <input
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
                onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm w-24"
              />
              <select
                value={filters.rating}
                onChange={(e) => handleFilterChange("rating", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="">Any Rating</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
                <option value="2">2+ Stars</option>
              </select>
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange("sortBy", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="">Sort By</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
              </select>
              <button
                onClick={clearSearch}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300"
              >
                Clear All
              </button>
            </div>
          </div>
        )}

        {/* AI Demo Integration Popup */}
        {showChatbot && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-6xl max-h-[85vh] overflow-hidden shadow-2xl">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <Sparkles className="text-orange-500" />
                    AI Demo Integration
                    <span className="text-purple-500">✨</span>
                  </h1>
                  <button onClick={() => setShowChatbot(false)} className="text-gray-500 hover:text-gray-700 p-2">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <p className="text-gray-600 mt-2">Frontend AI capabilities without backend – Perfect for demos!</p>
              </div>

              {/* Horizontal Layout */}
              <div className="flex h-[70vh]">
                {/* Left Sidebar - Tab Navigation */}
                <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
                  <div className="space-y-2">
                    {tabs.map((tab) => {
                      const Icon = tab.icon
                      return (
                        <button
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all text-left ${
                            activeTab === tab.id
                              ? "bg-blue-500 text-white shadow-sm"
                              : "text-gray-600 hover:text-gray-900 hover:bg-white"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          {tab.label}
                        </button>
                      )
                    })}
                  </div>

                  {/* Quick Actions for Chat */}
                  {activeTab === "chat" && (
                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Start</h3>
                      <div className="space-y-2">
                        <button
                          onClick={() => setChatInput("I'm planning my son's 10th birthday party")}
                          className="w-full text-xs bg-white hover:bg-gray-100 px-3 py-2 rounded-lg text-left border"
                        >
                          🎉 Planning birthday party
                        </button>
                        <button
                          onClick={() => setChatInput("He likes Pirates and Pokemon")}
                          className="w-full text-xs bg-white hover:bg-gray-100 px-3 py-2 rounded-lg text-left border"
                        >
                          🏴‍☠️ Pirates & Pokemon
                        </button>
                        <button
                          onClick={() => setChatInput("Tell me about the Pirate theme")}
                          className="w-full text-xs bg-white hover:bg-gray-100 px-3 py-2 rounded-lg text-left border"
                        >
                          ⚔️ Pirate theme
                        </button>
                        <button
                          onClick={() => setChatInput("Tell me about the Pokemon theme")}
                          className="w-full text-xs bg-white hover:bg-gray-100 px-3 py-2 rounded-lg text-left border"
                        >
                          ⚡ Pokemon theme
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Content Area */}
                <div className="flex-1 flex flex-col">
                  {activeTab === "chat" && (
                    <>
                      {/* Chat Header */}
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                        <h2 className="text-xl font-bold">AI Chat Demo</h2>
                        <p className="text-blue-100 text-sm">Try asking questions or having a conversation!</p>
                      </div>

                      {/* Chat Messages */}
                      <div
                        ref={chatMessagesRef}
                        className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth bg-gray-50"
                      >
                        {chatMessages.map((message) => (
                          <div
                            key={message.id}
                            className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-md px-4 py-3 rounded-lg shadow-sm ${
                                message.role === "user"
                                  ? "bg-blue-500 text-white rounded-br-sm"
                                  : "bg-white text-gray-900 border rounded-bl-sm"
                              }`}
                            >
                              <p className="whitespace-pre-wrap">{message.content}</p>
                              <p
                                className={`text-xs mt-2 ${
                                  message.role === "user" ? "text-blue-100" : "text-gray-500"
                                }`}
                              >
                                {message.timestamp}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Chat Input */}
                      <div className="border-t bg-white p-4">
                        <form onSubmit={handleChatSubmit} className="flex gap-3">
                          <input
                            value={chatInput}
                            onChange={(e) => setChatInput(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            className="p-3 text-gray-400 hover:text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
                          >
                            <Mic className="w-5 h-5" />
                          </button>
                          <button
                            type="submit"
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium"
                          >
                            <Send className="w-5 h-5" />
                          </button>
                        </form>
                      </div>
                    </>
                  )}

                  {activeTab === "image" && (
                    <>
                      {/* Image Analysis Header */}
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
                        <h2 className="text-xl font-bold">AI Image Analysis</h2>
                        <p className="text-blue-100 text-sm">
                          Upload a birthday party image to identify shopping objects
                        </p>
                      </div>

                      {/* Image Analysis Content */}
                      <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                        {!uploadedImage ? (
                          <div className="relative h-full flex items-center justify-center">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              id="image-upload"
                            />
                            <label
                              htmlFor="image-upload"
                              className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors w-full max-w-md"
                            >
                              <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                              <p className="text-gray-600 text-lg font-medium">
                                Click to upload a birthday party image
                              </p>
                              <p className="text-gray-500 text-sm mt-2">
                                Upload an image of a birthday party room and I'll identify shopping objects for you!
                              </p>
                            </label>
                          </div>
                        ) : (
                          <div className="space-y-6">
                            <div className="relative">
                              <img
                                src={uploadedImage || "/placeholder.svg"}
                                alt="Uploaded birthday party"
                                className="w-full max-h-80 object-cover rounded-lg border shadow-sm"
                              />
                              <button
                                onClick={() => {
                                  setUploadedImage(null)
                                  setImageAnalysisResult("")
                                  setIsAnalyzing(false)
                                }}
                                className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 shadow-lg"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>

                            {isAnalyzing && (
                              <div className="flex items-center justify-center p-8 bg-white rounded-lg border">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
                                <span className="text-gray-600">Analyzing image for shopping objects...</span>
                              </div>
                            )}

                            {imageAnalysisResult && (
                              <div className="bg-white rounded-lg p-6 border shadow-sm">
                                <h3 className="font-semibold text-gray-900 mb-4 text-lg">Analysis Results:</h3>
                                <div className="text-gray-700 whitespace-pre-wrap mb-6">{imageAnalysisResult}</div>

                                {/* Show birthday party products */}
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-4">Recommended Products:</h4>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {birthdayPartyProducts.slice(0, 4).map((product) => (
                                      <div
                                        key={product.id}
                                        className="bg-gray-50 rounded-lg p-4 border hover:shadow-md transition-shadow"
                                      >
                                        <img
                                          src={product.image || "/placeholder.svg"}
                                          alt={product.name}
                                          className="w-full h-32 object-cover rounded mb-3"
                                        />
                                        <h5 className="font-medium text-sm text-gray-900 mb-2">{product.name}</h5>
                                        <div className="flex items-center justify-between">
                                          <span className="text-blue-600 font-bold">${product.price}</span>
                                          <button
                                            onClick={() => addToCart(product)}
                                            className="bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 font-medium"
                                          >
                                            Add to Cart
                                          </button>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                          <p className="text-yellow-800 text-sm">
                            <strong>Demo Mode:</strong> This is a frontend-only demonstration. For production use,
                            integrate with real AI APIs like OpenAI Vision, Google Cloud Vision, or similar services.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Search Results Section */}
      {showSearchResults && (
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {loading ? "Searching..." : `Search Results for "${searchQuery}"`}
            </h2>
            <span className="text-gray-600">{!loading && `${searchResults.length} products found`}</span>
          </div>
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found matching your search.</p>
              <button onClick={clearSearch} className="mt-4 text-blue-600 hover:text-blue-700 font-semibold">
                Clear search and browse all products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Hero Section - Hidden when showing search results */}
      {!showSearchResults && (
        <section className="relative h-96 overflow-hidden">
          <div className="relative w-full h-full">
            {heroSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </section>
      )}

      {/* Categories Section - Hidden when showing search results */}
      {!showSearchResults && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center"
                onClick={() => {
                  handleFilterChange("category", category.name)
                  setSearchQuery("")
                }}
              >
                <div
                  className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{category.name}</h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Featured Products - Hidden when showing search results */}
      {!showSearchResults && (
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </section>
      )}

      {/* Promotional Banner - Hidden when showing search results */}
      {!showSearchResults && (
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Special Offer</h2>
            <p className="text-xl mb-6">Get free shipping on orders over $50</p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">ShopMart</h3>
              <p className="text-gray-400">Your one-stop shop for everything you need.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Info
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    My Account
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Order History
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Investors
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ShopMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EcommerceHomepage
