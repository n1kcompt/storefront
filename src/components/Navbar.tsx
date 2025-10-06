import { MapPin, Calendar, ShoppingCart } from "lucide-react";
import './Navbar.css'
interface NavbarProps {
  destination: string;
  setDestination: React.Dispatch<React.SetStateAction<string>>;
  season: string;
  setSeason: React.Dispatch<React.SetStateAction<string>>;
  cart: any[]; // you can replace `any` with your cart item type if defined
}

const Navbar: React.FC<NavbarProps> = ({
  destination,
  setDestination,
  season,
  setSeason,
  cart,
}) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <div className="nav-left">
          {/* Destination Select */}
          <div className="nav-select-group">
            <MapPin className="icon" />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="nav-select"
            >
              <option value="All">All Destinations</option>
              <option value="Rome">Rome</option>
              <option value="Krabi">Krabi</option>
              <option value="Dubai">Dubai</option>
            </select>
          </div>

          {/* Season Select */}
          <div className="nav-select-group">
            <Calendar className="icon" />
            <select
              value={season}
              onChange={(e) => setSeason(e.target.value)}
              className="nav-select"
            >
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
          </div>
        </div>

        {/* Cart Button */}
        {cart.length > 0 && (
          <button className="cart-button">
            <ShoppingCart className="icon" />
            <span>View Cart ({cart.length})</span>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
