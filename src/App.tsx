import { useState } from 'react';
import { ShoppingCart, MapPin, Calendar } from 'lucide-react';
import './App.css';
import Navbar from './components/Navbar.tsx';

interface DestinationItem {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface Destinations {
  [key: string]: DestinationItem[];
}

export default function TravelDestinations() {
  const [destination, setDestination] = useState('All');
  const [season, setSeason] = useState('Summer');
  const [cart, setCart] = useState<DestinationItem[]>([]);

  const destinations: Destinations = {
    'Rome looks': [
      {
        id: 1,
        name: 'Amalra Top And Skirt Set',
        image: 'https://cdn.shopify.com/s/files/1/0663/7259/9877/files/MAYF-WD68_V1.avif?v=1753104097?w=400&h=500&fit=crop',
        price: 'Rs. 7499'
      },
      {
        id: 2,
        name: 'Angel Gown',
        image: 'https://cdn.shopify.com/s/files/1/0663/7259/9877/files/SOYA-WD197_V1.avif?v=1753110788?w=400&h=500&fit=crop',
        price: 'Rs. 8699'
      },
      {
        id: 3,
        name: 'Eviana Clutch',
        image: 'https://cdn.shopify.com/s/files/1/0663/7259/9877/files/CULG-WY336_V1.avif?v=1752736366?w=400&h=500&fit=crop',
        price: 'Rs. 2599'
      }
    ],
    'Krabi look': [
      {
        id: 1,
        name: 'Amalra Top And Skirt Set',
        image: 'https://cdn.shopify.com/s/files/1/0663/7259/9877/files/MAYF-WD68_V1.avif?v=1753104097?w=400&h=500&fit=crop',
        price: 'Rs. 7499'
      },
      {
        id: 2,
        name: 'Angel Gown',
        image: 'https://cdn.shopify.com/s/files/1/0663/7259/9877/files/SOYA-WD197_V1.avif?v=1753110788?w=400&h=500&fit=crop',
        price: 'Rs. 8699'
      },
      {
        id: 3,
        name: 'Eviana Clutch',
        image: 'https://cdn.shopify.com/s/files/1/0663/7259/9877/files/CULG-WY336_V1.avif?v=1752736366?w=400&h=500&fit=crop',
        price: 'Rs. 2599'
      }
    ],
    'Dubai': [
      {
        id: 1,
        name: 'Amalra Top And Skirt Set',
        image: 'https://cdn.shopify.com/s/files/1/0663/7259/9877/files/MAYF-WD68_V1.avif?v=1753104097?w=400&h=500&fit=crop',
        price: 'Rs. 7499'
      },
      {
        id: 2,
        name: 'Angel Gown',
        image: 'https://cdn.shopify.com/s/files/1/0663/7259/9877/files/SOYA-WD197_V1.avif?v=1753110788?w=400&h=500&fit=crop',
        price: 'Rs. 8699'
      },
      {
        id: 3,
        name: 'Eviana Clutch',
        image: 'https://cdn.shopify.com/s/files/1/0663/7259/9877/files/CULG-WY336_V1.avif?v=1752736366?w=400&h=500&fit=crop',
        price: 'Rs. 2599'
      }
    ]
  };

  const addToCart = (item: DestinationItem) => {
    if (!cart.find(cartItem => cartItem.id === item.id)) {
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      {/* Navigation Bar */}

      <Navbar
        destination={destination}
        setDestination={setDestination}
        season={season}
        setSeason={setSeason}
        cart={cart}
      />
      {/* Main Content */}
      <div className="main-content">
        {Object.entries(destinations).map(([category, items]) => (
          <div key={category} className="destination-section">
            <h2 className="section-title">{category}</h2>
            
            <div className="cards-container">
              {items.map((item) => (
                <div key={item.id} className="card">
                  {/* Image */}
                  <div className="card-image">
                    <img 
                      src={item.image} 
                      alt={item.name}
                    />
                  </div>

                  {/* Content */}
                  {/* <div className="card-content">
                    <div>
                      <h3 className="card-title">{item.name}</h3>
                      <p className="card-price">{item.price}</p>
                    </div>
                    
                    {cart.find(cartItem => cartItem.id === item.id) ? (
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="card-button remove-button"
                      >
                        Remove
                      </button>
                    ) : (
                      <button 
                        onClick={() => addToCart(item)}
                        className="card-button add-button"
                      >
                        Add to Cart
                      </button>
                    )}
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}