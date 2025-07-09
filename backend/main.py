from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
from datetime import datetime
import json

# Initialize FastAPI app
app = FastAPI(
    title="Walmart Sparkathon API",
    description="Backend API for the Walmart Sparkathon Next.js app",
    version="1.0.0"
)

# Configure CORS for Next.js development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],  # Next.js dev server
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

# Security
security = HTTPBearer()

# Pydantic models
class User(BaseModel):
    id: str
    username: str
    email: str
    created_at: datetime

class LoginRequest(BaseModel):
    username: str
    password: str

class RegisterRequest(BaseModel):
    username: str
    email: str
    password: str

class Product(BaseModel):
    id: str
    name: str
    price: float
    description: str
    category: str
    image_url: Optional[str] = None
    stock: int

class CartItem(BaseModel):
    product_id: str
    quantity: int
    product_name: str
    price: float

class Order(BaseModel):
    id: str
    user_id: str
    items: List[CartItem]
    total_amount: float
    status: str
    created_at: datetime

# In-memory storage (replace with database in production)
users_db = {}
products_db = {}
orders_db = {}
carts_db = {}

# Authentication helper
def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    # Implement JWT token validation here
    # For now, returning a mock user
    return {"user_id": "user123", "username": "testuser"}

# Root endpoint
@app.get("/")
async def root():
    return {"message": "Welcome to Walmart Sparkathon API"}

# Health check
@app.get("/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.now()}

# Authentication endpoints
@app.post("/auth/register")
async def register(request: RegisterRequest):
    if request.username in users_db:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username already exists"
        )
    
    user = User(
        id=f"user_{len(users_db) + 1}",
        username=request.username,
        email=request.email,
        created_at=datetime.now()
    )
    
    users_db[request.username] = user
    
    return {
        "message": "User registered successfully",
        "user": user,
        "token": "mock_jwt_token"  # Replace with actual JWT
    }

@app.post("/auth/login")
async def login(request: LoginRequest):
    if request.username not in users_db:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    
    user = users_db[request.username]
    return {
        "message": "Login successful",
        "user": user,
        "token": "mock_jwt_token"  # Replace with actual JWT
    }

# Product endpoints
@app.get("/products", response_model=List[Product])
async def get_products(category: Optional[str] = None, limit: int = 20):
    # Mock products data
    mock_products = [
        Product(
            id="prod_1",
            name="Wireless Bluetooth Headphones",
            price=49.99,
            description="High-quality wireless headphones with noise cancellation",
            category="Electronics",
            image_url="https://via.placeholder.com/300x300",
            stock=25
        ),
        Product(
            id="prod_2",
            name="Organic Bananas",
            price=2.49,
            description="Fresh organic bananas, bunch of 6",
            category="Groceries",
            image_url="https://via.placeholder.com/300x300",
            stock=100
        ),
        Product(
            id="prod_3",
            name="Running Shoes",
            price=79.99,
            description="Comfortable running shoes for all terrains",
            category="Sports",
            image_url="https://via.placeholder.com/300x300",
            stock=15
        )
    ]
    
    if category:
        mock_products = [p for p in mock_products if p.category.lower() == category.lower()]
    
    return mock_products[:limit]

@app.get("/products/{product_id}", response_model=Product)
async def get_product(product_id: str):
    # Mock product retrieval
    mock_product = Product(
        id=product_id,
        name="Sample Product",
        price=29.99,
        description="This is a sample product",
        category="General",
        image_url="https://via.placeholder.com/300x300",
        stock=50
    )
    return mock_product

# Cart endpoints
@app.get("/cart")
async def get_cart(current_user: dict = Depends(get_current_user)):
    user_id = current_user["user_id"]
    cart = carts_db.get(user_id, [])
    
    total = sum(item.price * item.quantity for item in cart)
    
    return {
        "items": cart,
        "total": total,
        "item_count": len(cart)
    }

@app.post("/cart/add")
async def add_to_cart(item: CartItem, current_user: dict = Depends(get_current_user)):
    user_id = current_user["user_id"]
    
    if user_id not in carts_db:
        carts_db[user_id] = []
    
    carts_db[user_id].append(item)
    
    return {"message": "Item added to cart successfully"}

@app.delete("/cart/remove/{product_id}")
async def remove_from_cart(product_id: str, current_user: dict = Depends(get_current_user)):
    user_id = current_user["user_id"]
    
    if user_id in carts_db:
        carts_db[user_id] = [item for item in carts_db[user_id] if item.product_id != product_id]
    
    return {"message": "Item removed from cart successfully"}

# Order endpoints
@app.post("/orders")
async def create_order(current_user: dict = Depends(get_current_user)):
    user_id = current_user["user_id"]
    cart = carts_db.get(user_id, [])
    
    if not cart:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cart is empty"
        )
    
    order = Order(
        id=f"order_{len(orders_db) + 1}",
        user_id=user_id,
        items=cart,
        total_amount=sum(item.price * item.quantity for item in cart),
        status="pending",
        created_at=datetime.now()
    )
    
    orders_db[order.id] = order
    carts_db[user_id] = []  # Clear cart after order
    
    return {
        "message": "Order created successfully",
        "order": order
    }

@app.get("/orders", response_model=List[Order])
async def get_orders(current_user: dict = Depends(get_current_user)):
    user_id = current_user["user_id"]
    user_orders = [order for order in orders_db.values() if order.user_id == user_id]
    return user_orders

@app.get("/orders/{order_id}", response_model=Order)
async def get_order(order_id: str, current_user: dict = Depends(get_current_user)):
    if order_id not in orders_db:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Order not found"
        )
    
    order = orders_db[order_id]
    
    if order.user_id != current_user["user_id"]:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access denied"
        )
    
    return order

# Search endpoint
@app.get("/search")
async def search_products(q: str, limit: int = 10):
    # Mock search functionality
    mock_results = [
        Product(
            id="search_1",
            name=f"Search Result for '{q}'",
            price=19.99,
            description=f"Product matching your search for {q}",
            category="General",
            image_url="https://via.placeholder.com/300x300",
            stock=30
        )
    ]
    
    return {
        "query": q,
        "results": mock_results,
        "total_results": len(mock_results)
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)