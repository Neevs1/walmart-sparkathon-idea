import Link from "next/link"
import { ArrowLeft, Heart, Star, ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react"

// Mock product data - in a real app, this would come from a database
const products = {
  // PIRATE THEME PRODUCTS

  1: {
    id: "1",
    name: "Kids Pirate Costume Set",
    description: "Complete pirate costume with vest, bandana, and belt for kids",
    fullDescription: "Transform your little one into a fearsome pirate captain with this complete costume set. Includes a detailed vest with gold buttons, classic red bandana, black belt with skull buckle, and white shirt. Perfect for birthday parties, Halloween, or imaginative play. Made from comfortable, breathable fabric that's easy to wash and durable enough for active play.",
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.6,
    reviews: 187,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Carnival_in_Valletta_-_Pirate_Costume.jpg?20131019130903",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/Carnival_in_Valletta_-_Pirate_Costume.jpg?20131019130903",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    ],
    category: "Party Costumes",
    inStock: true,
    theme: "pirate",
    features: [
      "Complete 4-piece costume set",
      "Comfortable polyester fabric",
      "Machine washable",
      "Available in multiple sizes",
      "Perfect for parties and dress-up",
    ],
    specifications: {
      Material: "100% Polyester",
      "Size Range": "Ages 4-12",
      "Care Instructions": "Machine wash cold",
      Includes: "Vest, bandana, belt, shirt",
      Color: "Black, red, white",
    },
  },

  2: {
    id: "2",
    name: "Pirate Eye Patches (Pack of 12)",
    description: "Black felt eye patches perfect for pirate party guests",
    fullDescription: "Complete your pirate party with these authentic-looking black felt eye patches. Each pack contains 12 comfortable eye patches with elastic straps that fit both kids and adults. Made from soft, non-irritating materials that won't cause discomfort during extended wear. Essential accessory for any pirate-themed celebration.",
    price: 8.99,
    originalPrice: 12.99,
    discount: 31,
    rating: 4.3,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    ],
    category: "Party Accessories",
    inStock: true,
    theme: "pirate",
    features: [
      "Pack of 12 eye patches",
      "Soft felt material",
      "Elastic straps included",
      "One size fits most",
      "Comfortable for extended wear",
    ],
    specifications: {
      Material: "Felt and elastic",
      Quantity: "12 pieces",
      "Size Range": "Universal fit",
      Color: "Black",
      "Age Range": "3+ years",
    },
  },

  3: {
    id: "3",
    name: "Wooden Treasure Chest Decoration",
    description: "Authentic-looking wooden treasure chest for party decoration",
    fullDescription: "Add an authentic pirate touch to your party with this beautifully crafted wooden treasure chest. Features antique-style metal hinges, a working lock mechanism, and weathered finish that looks like it's been buried for centuries. Perfect for hiding party favors, storing treasures during games, or as a stunning centerpiece decoration.",
    price: 39.99,
    originalPrice: 54.99,
    discount: 27,
    rating: 4.8,
    reviews: 145,
    image: "https://c.pxhere.com/photos/0a/d2/treasure_chest_chest_gems_box_open_decoration_jewellery_chains-1111685.jpg!d",
    images: [
      "https://c.pxhere.com/photos/0a/d2/treasure_chest_chest_gems_box_open_decoration_jewellery_chains-1111685.jpg!d",
      "https://c.pxhere.com/photos/b4/15/treasure_gems_box_treasure_chest_decoration_jewellery_chains_isolated-1111692.jpg!d",
      "https://c.pxhere.com/photos/49/a0/treasure_gems_box_treasure_chest_decoration_jewellery_chains_isolated-1111691.jpg!d",
    ],
    category: "Party Decorations",
    inStock: true,
    theme: "pirate",
    features: [
      "Authentic wooden construction",
      "Working lock mechanism",
      "Antique metal hinges",
      "Weathered finish",
      "Perfect for storage and decoration",
    ],
    specifications: {
      Material: "Solid wood with metal hardware",
      Dimensions: "12\" x 8\" x 6\"",
      Weight: "2.5 lbs",
      Finish: "Weathered antique brown",
      Features: "Working lock and hinges",
    },
  },

  4: {
    id: "4",
    name: "Pirate Ship Birthday Cake",
    description: "Custom pirate ship cake with edible decorations",
    fullDescription: "Set sail for the most memorable birthday party with this spectacular pirate ship cake. Expertly crafted by professional bakers, this cake features a detailed ship design with edible sails, pirate flags, and treasure decorations. Made with premium ingredients and customizable with your child's name and age. A showstopper centerpiece that tastes as amazing as it looks.",
    price: 45.99,
    originalPrice: 59.99,
    discount: 23,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    ],
    category: "Birthday Cakes",
    inStock: true,
    theme: "pirate",
    features: [
      "Custom pirate ship design",
      "Edible decorations and sails",
      "Premium cake ingredients",
      "Customizable name and age",
      "Serves 12-15 people",
    ],
    specifications: {
      Size: "12\" x 8\" ship shape",
      Serves: "12-15 people",
      Flavors: "Vanilla, chocolate, or strawberry",
      "Decoration Style": "Fondant and buttercream",
      "Order Notice": "48 hours advance notice required",
    },
  },

  5: {
    id: "5",
    name: "Pirate Captain Hats (Pack of 8)",
    description: "Black tricorn pirate hats with skull and crossbones",
    fullDescription: "Complete your pirate crew with these authentic-looking tricorn captain hats. Each pack includes 8 black felt hats adorned with the classic skull and crossbones emblem. Features adjustable inner bands for comfortable fit on different head sizes. Perfect for party guests to wear during the celebration and take home as memorable keepsakes.",
    price: 16.99,
    originalPrice: 22.99,
    discount: 26,
    rating: 4.4,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    ],
    category: "Party Accessories",
    inStock: true,
    theme: "pirate",
    features: [
      "Pack of 8 tricorn hats",
      "Skull and crossbones emblem",
      "Adjustable inner band",
      "Authentic pirate style",
      "Great party favors",
    ],
    specifications: {
      Material: "Felt with fabric band",
      Quantity: "8 pieces",
      "Size Range": "Adjustable fit",
      Color: "Black with white skull design",
      Style: "Classic tricorn pirate hat",
    },
  },

  6: {
    id: "6",
    name: "Gold Coin Chocolates (100 pieces)",
    description: "Gold foil wrapped chocolate coins for treasure hunt",
    fullDescription: "Transform your party into a real treasure hunt with these delicious gold coin chocolates. Each pack contains 100 milk chocolate coins wrapped in shimmering gold foil, perfect for hiding around the party area or filling treasure chests. Made with premium milk chocolate and designed to look like authentic pirate treasure. Kids will love discovering these sweet treasures!",
    price: 19.99,
    originalPrice: 26.99,
    discount: 26,
    rating: 4.7,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    ],
    category: "Party Treats",
    inStock: true,
    theme: "pirate",
    features: [
      "100 chocolate coins",
      "Premium milk chocolate",
      "Shimmering gold foil wrap",
      "Perfect for treasure hunts",
      "Individual wrapped coins",
    ],
    specifications: {
      Quantity: "100 pieces",
      "Chocolate Type": "Milk chocolate",
      Weight: "1.5 lbs total",
      "Wrapper Color": "Gold foil",
      "Shelf Life": "12 months",
    },
  },

  7: {
    id: "7",
    name: "Pirate Themed Balloons (Pack of 20)",
    description: "Black and red balloons with pirate skull designs",
    fullDescription: "Set the perfect pirate atmosphere with these themed balloons featuring skull and crossbones designs. The pack includes 20 high-quality latex balloons in classic pirate colors of black and red, each printed with authentic pirate imagery including skulls, crossbones, and pirate ships. Easy to inflate and perfect for creating an immersive pirate party environment.",
    price: 12.99,
    originalPrice: 17.99,
    discount: 28,
    rating: 4.2,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    ],
    category: "Party Decorations",
    inStock: true,
    theme: "pirate",
    features: [
      "Pack of 20 balloons",
      "Pirate skull designs",
      "Black and red colors",
      "High-quality latex",
      "Easy to inflate",
    ],
    specifications: {
      Quantity: "20 pieces",
      Material: "Natural latex",
      Colors: "Black and red",
      Size: "12 inches when inflated",
      Design: "Skull and crossbones print",
    },
  },

  8: {
    id: "8",
    name: "Pirate Treasure Map Return Gifts (Pack of 10)",
    description: "Aged-looking treasure maps as party favors",
    fullDescription: "Send your party guests home with these authentic-looking treasure maps that appear aged and weathered. Each pack contains 10 unique treasure maps with different designs, all featuring classic pirate elements like skull landmarks, dotted paths, and 'X marks the spot' destinations. Printed on parchment-style paper with burned edges for an authentic antique appearance.",
    price: 14.99,
    originalPrice: 19.99,
    discount: 25,
    rating: 4.5,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    ],
    category: "Return Gifts",
    inStock: true,
    theme: "pirate",
    features: [
      "Pack of 10 unique maps",
      "Aged parchment appearance",
      "Burned edge effects",
      "Classic pirate designs",
      "Perfect party favors",
    ],
    specifications: {
      Quantity: "10 pieces",
      Material: "Parchment-style paper",
      Size: "8.5\" x 11\"",
      Design: "Varied treasure map layouts",
      Finish: "Aged and weathered look",
    },
  },

  9: {
    id: "9",
    name: "Pokemon Pikachu Costume",
    description: "Official Pikachu costume with hood and tail",
    fullDescription: "Transform into everyone's favorite Pokemon with this official Pikachu costume! Features a bright yellow jumpsuit with Pikachu's distinctive markings, an adorable hood with pointed ears, and a detachable tail. Made from soft, comfortable fleece material that's perfect for parties, Halloween, or imaginative play. The costume includes authentic Pokemon licensing and attention to detail that fans will love.",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    rating: 4.8,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    ],
    category: "Party Costumes",
    inStock: true,
    theme: "pokemon",
    features: [
      "Official Pokemon licensing",
      "Soft fleece material",
      "Hood with Pikachu ears",
      "Detachable tail",
      "Machine washable",
    ],
    specifications: {
      Material: "100% Polyester fleece",
      "Size Range": "Ages 4-12",
      Color: "Yellow with black accents",
      "Care Instructions": "Machine wash cold",
      Includes: "Jumpsuit, hood, tail",
    },
  },

  10: {
    id: "10",
    name: "Pokemon Birthday Cake",
    description: "Custom Pokemon cake with Pikachu and Pokeball decorations",
    fullDescription: "Gotta catch 'em all, including this amazing Pokemon birthday cake! Features a colorful design with Pikachu, Pokeballs, and other beloved Pokemon characters. Expertly crafted by professional bakers using premium ingredients and edible decorations. Can be customized with your child's name, age, and favorite Pokemon characters. A perfect centerpiece for any Pokemon-themed celebration.",
    price: 42.99,
    originalPrice: 55.99,
    discount: 23,
    rating: 4.9,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=600&fit=crop",
    ],
    category: "Birthday Cakes",
    inStock: true,
    theme: "pokemon",
    features: [
      "Custom Pokemon design",
      "Pikachu and Pokeball decorations",
      "Premium cake ingredients",
      "Customizable with name and age",
      "Professional bakery quality",
    ],
    specifications: {
      Size: "10\" round or 12\" x 9\" rectangular",
      Serves: "12-16 people",
      Flavors: "Vanilla, chocolate, or funfetti",
      "Decoration Style": "Buttercream and fondant",
      "Order Notice": "48 hours advance notice required",
    },
  },

  11: {
    id: "11",
    name: "Pokemon Pokestop Decoration Set",
    description: "Complete Pokestop decoration with banner and props",
    fullDescription: "Transform your party space into a Pokemon world with this complete Pokestop decoration set. Includes a large Pokestop banner, Pokemon gym signage, directional arrows, and various Pokemon-themed props. Easy to assemble and hang, creating an immersive Pokemon GO experience for your guests. Perfect for photo opportunities and themed party areas.",
    price: 34.99,
    originalPrice: 44.99,
    discount: 22,
    rating: 4.7,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    ],
    category: "Party Decorations",
    inStock: true,
    theme: "pokemon",
    features: [
      "Complete Pokestop setup",
      "Large banner included",
      "Pokemon gym signage",
      "Directional arrows",
      "Easy assembly",
    ],
    specifications: {
      "Banner Size": "4 feet x 6 feet",
      Material: "Vinyl banner with cardboard props",
      "Setup Time": "15-20 minutes",
      Includes: "Banner, signs, arrows, assembly kit",
      "Mounting Options": "Wall or stand mounting",
    },
  },

  12: {
    id: "12",
    name: "Pokemon Themed Balloons (Pack of 25)",
    description: "Colorful Pokemon character balloons",
    fullDescription: "Bring the Pokemon world to life with these vibrant character balloons! Pack includes 25 high-quality latex balloons featuring popular Pokemon characters like Pikachu, Charmander, Squirtle, and Bulbasaur. Each balloon is printed with bright, fade-resistant colors and official Pokemon artwork. Perfect for creating a festive Pokemon party atmosphere.",
    price: 15.99,
    originalPrice: 21.99,
    discount: 27,
    rating: 4.4,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
    ],
    category: "Party Decorations",
    inStock: true,
    theme: "pokemon",
    features: [
      "Pack of 25 balloons",
      "Multiple Pokemon characters",
      "Fade-resistant printing",
      "High-quality latex",
      "Official Pokemon artwork",
    ],
    specifications: {
      Quantity: "25 pieces",
      Material: "Natural latex",
      Size: "12 inches when inflated",
      "Character Mix": "Pikachu, Charmander, Squirtle, Bulbasaur",
      Colors: "Yellow, red, blue, green",
    },
  },

  13: {
    id: "13",
    name: "Pokemon Card Packs Return Gifts (Pack of 10)",
    description: "Official Pokemon trading card packs for party favors",
    fullDescription: "Send your party guests home with the ultimate Pokemon party favor! Each pack contains 10 official Pokemon trading card booster packs, each with a chance to find rare and holographic cards. Kids will love opening these surprise packs and adding to their Pokemon card collection. Features authentic Pokemon cards with the latest artwork and characters.",
    price: 24.99,
    originalPrice: 32.99,
    discount: 24,
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    ],
    category: "Return Gifts",
    inStock: true,
    theme: "pokemon",
    features: [
      "10 official booster packs",
      "Chance for rare cards",
      "Holographic possibilities",
      "Latest Pokemon series",
      "Authentic trading cards",
    ],
    specifications: {
      Quantity: "10 booster packs",
      "Cards per Pack": "11 cards",
      "Card Types": "Common, uncommon, rare, holographic",
      Series: "Latest Pokemon TCG series",
      "Age Range": "6+ years",
    },
  },

  14: {
    id: "14",
    name: "Pokemon Pokeball Return Gifts (Pack of 12)",
    description: "Mini Pokeball toys that open and close",
    fullDescription: "Catch all the fun with these adorable mini Pokeball toys! Each pack contains 12 miniature Pokeballs that open and close just like the real thing. Made from durable plastic with authentic red and white coloring and the signature button. Perfect size for little hands and great for imaginative Pokemon play. Kids can pretend to catch their favorite Pokemon characters.",
    price: 19.99,
    originalPrice: 26.99,
    discount: 26,
    rating: 4.6,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    ],
    category: "Return Gifts",
    inStock: true,
    theme: "pokemon",
    features: [
      "Pack of 12 mini Pokeballs",
      "Opens and closes",
      "Authentic red and white design",
      "Durable plastic construction",
      "Perfect for imaginative play",
    ],
    specifications: {
      Quantity: "12 pieces",
      Material: "Durable ABS plastic",
      Size: "2 inches diameter",
      Colors: "Red and white",
      "Age Range": "3+ years",
    },
  },

  15: {
    id: "15",
    name: "Pokemon Trainer Hats (Pack of 8)",
    description: "Official Pokemon trainer caps for party guests",
    fullDescription: "Equip your party guests with authentic Pokemon trainer hats! This pack includes 8 adjustable baseball caps featuring the classic Pokemon trainer design with the iconic Pokemon logo. Made from comfortable cotton blend material with adjustable straps to fit different head sizes. Perfect for Pokemon-themed parties and as memorable take-home gifts.",
    price: 18.99,
    originalPrice: 24.99,
    discount: 24,
    rating: 4.5,
    reviews: 98,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    ],
    category: "Party Accessories",
    inStock: true,
    theme: "pokemon",
    features: [
      "Pack of 8 trainer hats",
      "Official Pokemon logo",
      "Adjustable strap",
      "Cotton blend material",
      "Authentic trainer design",
    ],
    specifications: {
      Quantity: "8 pieces",
      Material: "Cotton blend",
      "Size Range": "Adjustable fit",
      Colors: "Red and white",
      Style: "Classic baseball cap",
    },
  },

 16: {
    id: "16",
    name: "Pokemon Plushie Set (Pack of 6)",
    description: "Small Pokemon plush toys including Pikachu, Charmander, and Squirtle",
    fullDescription: "Delight your party guests with this adorable set of Pokemon plushies! Includes 6 soft, cuddly plush toys featuring beloved Pokemon characters: Pikachu, Charmander, Squirtle, Bulbasaur, Eevee, and Jigglypuff. Each plushie is made from high-quality, hypoallergenic materials and features authentic Pokemon designs. Perfect size for little hands and great as party favors or collectibles.",
    price: 39.99,
    originalPrice: 52.99,
    discount: 25,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop",
    ],
    category: "Return Gifts",
    inStock: true,
    theme: "pokemon",
    features: [
      "Set of 6 different Pokemon",
      "Soft, cuddly plush material",
      "Hypoallergenic stuffing",
      "Authentic Pokemon designs",
      "Perfect party favor size",
    ],
    specifications: {
      Quantity: "6 pieces",
      Material: "Polyester plush with hypoallergenic stuffing",
      Size: "4-5 inches each",
      Characters: "Pikachu, Charmander, Squirtle, Bulbasaur, Eevee, Jigglypuff",
      "Age Range": "All ages",
    },
  },

  17: {
    id: "17",
    name: "Bluetooth Party Speaker",
    description: "Portable wireless speaker with LED lights perfect for parties",
    fullDescription: "Get the party started with this powerful Bluetooth speaker featuring built-in LED lights that sync with the music. Delivers crystal-clear sound with deep bass and can connect to any Bluetooth-enabled device. The colorful LED light show creates an amazing party atmosphere. With up to 12 hours of battery life and waterproof design, it's perfect for indoor and outdoor celebrations.",
    price: 79.99,
    originalPrice: 99.99,
    discount: 20,
    rating: 4.6,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    ],
    category: "Electronics",
    inStock: true,
    features: [
      "Bluetooth 5.0 connectivity",
      "Built-in LED light show",
      "12-hour battery life",
      "Waterproof IPX7 rating",
      "Deep bass sound quality",
    ],
    specifications: {
      "Bluetooth Version": "5.0",
      "Battery Life": "12 hours",
      "Water Resistance": "IPX7",
      "Output Power": "20W",
      "Range": "30 feet",
    },
  },

  18: {
    id: "18",
    name: "Digital Camera for Kids",
    description: "Kid-friendly digital camera with fun filters and games",
    fullDescription: "Introduce your child to photography with this specially designed digital camera for kids. Features a durable, drop-resistant case, simple controls, and fun built-in filters and frames. Includes educational games and a large 2.4-inch LCD screen. Perfect for capturing party memories and encouraging creativity in young photographers.",
    price: 45.99,
    originalPrice: 59.99,
    discount: 23,
    rating: 4.3,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop",
    ],
    category: "Electronics",
    inStock: true,
    features: [
      "Kid-friendly design",
      "Drop-resistant case",
      "Built-in filters and frames",
      "Educational games included",
      "2.4-inch LCD screen",
    ],
    specifications: {
      "Screen Size": "2.4 inches",
      Resolution: "8MP photos, 1080p video",
      "Memory Card": "32GB micro SD included",
      "Age Range": "3-12 years",
      "Battery Life": "2-3 hours continuous use",
    },
  },

  19: {
    id: "19",
    name: "LED Strip Lights",
    description: "Color-changing LED lights for party room decoration",
    fullDescription: "Transform any space into a party paradise with these vibrant LED strip lights. Features 16 million colors, multiple lighting modes, and can be controlled via smartphone app or remote control. Easy to install with adhesive backing and can be cut to fit any space. Perfect for creating ambient lighting for parties, bedrooms, or special events.",
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.4,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    ],
    category: "Electronics",
    inStock: true,
    features: [
      "16 million colors",
      "Smartphone app control",
      "Remote control included",
      "Adhesive backing",
      "Cuttable to size",
    ],
    specifications: {
      Length: "16.4 feet (5 meters)",
      Colors: "16 million RGB colors",
      Control: "App and remote control",
      Power: "12V adapter included",
      Installation: "3M adhesive backing",
    },
  },

  20: {
    id: "20",
    name: "Instant Polaroid Camera",
    description: "Instant camera for capturing party memories",
    fullDescription: "Capture and print memories instantly with this modern Polaroid camera. Features automatic exposure, built-in flash, and produces credit-card sized photos that develop in minutes. Perfect for parties, allowing guests to take home physical photo memories. Includes a starter pack of film and comes in fun, vibrant colors that kids love.",
    price: 89.99,
    originalPrice: 119.99,
    discount: 25,
    rating: 4.7,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop",
    ],
    category: "Electronics",
    inStock: true,
    features: [
      "Instant photo printing",
      "Automatic exposure",
      "Built-in flash",
      "Credit card sized photos",
      "Film pack included",
    ],
    specifications: {
      "Photo Size": "Credit card size (2.1\" x 3.4\")",
      "Development Time": "2-3 minutes",
      "Film Capacity": "10 shots per pack",
      "Flash Range": "0.6m to infinity",
      Colors: "Multiple fun colors available",
    },
  },

  21: {
    id: "21",
    name: "Wireless Headphones",
    description: "Comfortable wireless headphones for kids",
    fullDescription: "These kid-friendly wireless headphones feature volume-limiting technology to protect young ears, comfortable padded ear cups, and a durable design that can withstand active play. With up to 15 hours of battery life and fun, colorful designs, they're perfect for listening to music, watching videos, or gaming during parties and quiet time.",
    price: 69.99,
    originalPrice: 89.99,
    discount: 22,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop",
    ],
    category: "Electronics",
    inStock: true,
    features: [
      "Volume-limiting technology",
      "15-hour battery life",
      "Comfortable padded ear cups",
      "Durable kid-friendly design",
      "Bluetooth 5.0 connectivity",
    ],
    specifications: {
      "Battery Life": "15 hours",
      "Bluetooth Version": "5.0",
      "Volume Limit": "85dB safe for kids",
      "Age Range": "3-12 years",
      "Charging Time": "2 hours",
    },
  },

  22: {
    id: "22",
    name: "Gaming Tablet for Kids",
    description: "Educational gaming tablet with parental controls",
    fullDescription: "This educational gaming tablet combines fun and learning with age-appropriate games, e-books, and educational apps. Features robust parental controls, durable case, and content curated specifically for children. Includes pre-loaded educational games covering math, reading, science, and creativity. Perfect for quiet time during parties or as a special gift.",
    price: 149.99,
    originalPrice: 199.99,
    discount: 25,
    rating: 4.6,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
    ],
    category: "Electronics",
    inStock: true,
    features: [
      "Educational games pre-loaded",
      "Parental controls",
      "Durable protective case",
      "Age-appropriate content",
      "7-inch HD display",
    ],
    specifications: {
      "Screen Size": "7 inches",
      Resolution: "1024 x 600 HD",
      Storage: "32GB expandable",
      "Age Range": "3-12 years",
      "Battery Life": "8 hours",
    },
  },

  23: {
    id: "23",
    name: "Boys Superhero T-Shirt",
    description: "Cotton superhero themed t-shirt for boys",
    fullDescription: "Let your little hero show their favorite superhero with this comfortable cotton t-shirt. Features vibrant, fade-resistant prints of popular superhero logos and characters. Made from 100% cotton for breathability and comfort during active play. Perfect for everyday wear, themed parties, or casual outings. Available in multiple sizes and superhero designs.",
    price: 16.99,
    originalPrice: 22.99,
    discount: 26,
    rating: 4.4,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    category: "Clothing",
    inStock: true,
    features: [
      "100% cotton material",
      "Fade-resistant prints",
      "Multiple superhero designs",
      "Comfortable fit",
      "Machine washable",
    ],
    specifications: {
      Material: "100% Cotton",
      "Size Range": "Ages 4-12",
      "Care Instructions": "Machine wash cold",
      Colors: "Various superhero designs",
      Fit: "Regular fit",
    },
  },

  24: {
    id: "24",
    name: "Kids Sneakers",
    description: "Comfortable athletic sneakers for active kids",
    fullDescription: "These high-quality athletic sneakers are designed for active kids who love to run, jump, and play. Features breathable mesh upper, cushioned sole for comfort, and durable rubber outsole for traction. Easy velcro closure makes them perfect for kids who are still learning to tie shoes. Available in multiple colors and sizes.",
    price: 39.99,
    originalPrice: 54.99,
    discount: 27,
    rating: 4.5,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    category: "Shoes",
    inStock: true,
    features: [
      "Breathable mesh upper",
      "Cushioned sole",
      "Durable rubber outsole",
      "Easy velcro closure",
      "Multiple color options",
    ],
    specifications: {
      Material: "Mesh and synthetic leather",
      "Size Range": "Toddler 6 - Big Kid 6",
      Closure: "Velcro straps",
      Colors: "Black, white, blue, pink",
      "Age Range": "2-12 years",
    },
  },

  25: {
    id: "25",
    name: "Boys Cargo Shorts",
    description: "Comfortable cargo shorts with multiple pockets",
    fullDescription: "These versatile cargo shorts are perfect for active boys who need plenty of pocket space for their treasures. Made from durable cotton blend fabric with reinforced stitching at stress points. Features multiple pockets including cargo pockets on the sides and traditional front and back pockets. Adjustable waistband ensures a comfortable fit.",
    price: 19.99,
    originalPrice: 26.99,
    discount: 26,
    rating: 4.3,
    reviews: 123,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    category: "Clothing",
    inStock: true,
    features: [
      "Multiple cargo pockets",
      "Durable cotton blend",
      "Reinforced stitching",
      "Adjustable waistband",
      "Comfortable fit",
    ],
    specifications: {
      Material: "65% Cotton, 35% Polyester",
      "Size Range": "Ages 4-12",
      "Care Instructions": "Machine wash warm",
      Colors: "Khaki, navy, olive green",
      Pockets: "6 total pockets",
    },
  },

  26: {
    id: "26",
    name: "Kids Light-Up Shoes",
    description: "Fun LED light-up shoes that kids love",
    fullDescription: "Watch your child's face light up with these amazing LED light-up shoes! Features colorful LED lights in the sole that activate with each step, creating a fun light show as they walk, run, and dance. Rechargeable battery lasts for hours of fun, and the shoes are made with comfortable, breathable materials. Perfect for parties and everyday wear.",
    price: 44.99,
    originalPrice: 59.99,
    discount: 25,
    rating: 4.7,
    reviews: 276,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    category: "Shoes",
    inStock: true,
    features: [
      "LED lights in sole",
      "Rechargeable battery",
      "Multiple light patterns",
      "Comfortable breathable material",
      "Easy on/off switch",
    ],
    specifications: {
      Material: "Synthetic leather and mesh",
      "Size Range": "Toddler 6 - Big Kid 6",
      "Battery Life": "6-8 hours",
      "Charging Time": "2-3 hours",
      Colors: "White, black, pink, blue",
    },
  },

  27: {
    id: "27",
    name: "Boys Hoodie Jacket",
    description: "Warm and comfortable hoodie for boys",
    fullDescription: "Keep your little one cozy and stylish with this comfortable hoodie jacket. Made from soft cotton blend fleece with a comfortable hood and kangaroo pocket. Perfect for cooler weather, outdoor activities, or casual everyday wear. Features ribbed cuffs and hem for a secure fit, and the durable construction ensures it will last through active play.",
    price: 29.99,
    originalPrice: 39.99,
    discount: 25,
    rating: 4.4,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    category: "Clothing",
    inStock: true,
    features: [
      "Soft cotton blend fleece",
      "Comfortable hood",
      "Kangaroo pocket",
      "Ribbed cuffs and hem",
      "Durable construction",
    ],
    specifications: {
      Material: "60% Cotton, 40% Polyester",
      "Size Range": "Ages 4-12",
      "Care Instructions": "Machine wash cold",
      Colors: "Navy, gray, black, green",
      Closure: "Pullover style",
    },
  },

  28: {
    id: "28",
    name: "Canvas Backpack",
    description: "Durable canvas backpack for school or travel",
    fullDescription: "This sturdy canvas backpack is perfect for school, travel, or everyday adventures. Features a spacious main compartment, multiple organizational pockets, and padded shoulder straps for comfort. Made from durable canvas material that can withstand daily use. The classic design works for boys and girls of all ages.",
    price: 24.99,
    originalPrice: 34.99,
    discount: 29,
    rating: 4.3,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
    ],
    category: "Accessories",
    inStock: true,
    features: [
      "Durable canvas material",
      "Spacious main compartment",
      "Multiple organizational pockets",
      "Padded shoulder straps",
      "Classic unisex design",
    ],
    specifications: {
      Material: "100% Canvas",
      Dimensions: "16\" x 12\" x 6\"",
      Capacity: "20 liters",
      Colors: "Navy, black, olive green, burgundy",
      "Age Range": "6+ years",
    },
  },

  29: {
    id: "29",
    name: "Kids Baseball Cap",
    description: "Adjustable baseball cap for kids",
    fullDescription: "Protect your child from the sun with this classic baseball cap. Features an adjustable strap for a perfect fit, curved brim for sun protection, and breathable cotton construction. The timeless design works for any casual outfit and is perfect for outdoor activities, sports, or everyday wear. Available in multiple colors to match any style.",
    price: 12.99,
    originalPrice: 17.99,
    discount: 28,
    rating: 4.2,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    category: "Accessories",
    inStock: true,
    features: [
      "Adjustable strap",
      "Curved brim",
      "Breathable cotton",
      "Classic design",
      "Multiple color options",
    ],
    specifications: {
      Material: "100% Cotton",
      "Size Range": "Adjustable fit",
      "Brim Style": "Curved",
      Colors: "Navy, black, red, white, gray",
      "Age Range": "3-12 years",
    },
  },

  30: {
    id: "30",
    name: "Boys Swim Shorts",
    description: "Quick-dry swim shorts with fun patterns",
    fullDescription: "Make a splash with these fun and functional swim shorts! Features quick-dry fabric that's perfect for pool parties, beach days, or water activities. The comfortable elastic waistband with drawstring ensures a secure fit, while the fun patterns and bright colors make them a hit with kids. Includes mesh lining for added comfort.",
    price: 18.99,
    originalPrice: 24.99,
    discount: 24,
    rating: 4.4,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=600&fit=crop",
    ],
    category: "Clothing",
    inStock: true,
    features: [
      "Quick-dry fabric",
      "Elastic waistband with drawstring",
      "Fun patterns and colors",
      "Mesh lining",
      "Perfect for water activities",
    ],
    specifications: {
      Material: "100% Polyester",
      "Size Range": "Ages 4-12",
      "Care Instructions": "Machine wash cold",
      Colors: "Tropical, shark, geometric patterns",
      Features: "Quick-dry, mesh lining",
    },
  },
};




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
              <a href="8th.io/mdqw2"><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Try it out! (On mobile)</button></a>

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
