import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/Navbar.css";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false); 
  };

  return (
    <div className={`navbar-container ${menuOpen ? "menu-open" : ""}`}>
      <header className="navbar">
        <section className="navbar-dark">
          <div className="navbar-contacts">
            <div className="phone">
              <img src="/images/telephone-icn.png" alt="Phone icon" />
              (225) 555-0118
            </div>
            <div className="email">
              <img src="/images/envelope-icn.png" alt="Envelope icon" />
              michelle.rivera@example.com
            </div>
          </div>
          <p className="follow">Follow Us and get a chance to win 80% off</p>
          <div className="social-media">
            <p>Follow Us :</p>
            <ul className="media-list">
              <li>
                <img src="/images/instagram-icon.png" alt="Instagram icon" />
              </li>
              <li>
                <img src="/images/youtube-icn.png" alt="YouTube icon" />
              </li>
              <li>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <img src="/images/facebook-icn.png" alt="Facebook icon" />
                </a>
              </li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <img src="/images/twitter-icn.png" alt="Twitter icon" />
              </a>
            </ul>
          </div>
        </section>

        <section className="navbar-light">
          <h3 className="brand-name">Bandage</h3>
          <div className="nav-menu">
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <img src="/images/menu-icon.png" alt="Menu icon" />
            </button>
            <nav className={`menu-items ${menuOpen ? "open" : ""}`}>
              <ul className="main-menu">
                <li>
                  Home
                </li>
                <li className="shop">
                  
                    Shop
                    <FaChevronDown className="caret" />
                  
                </li>
                <li>
                  About
                </li>
                <li>
                  Blog
                </li>
                <li>
                  Contact
                </li>
                <li>
                  Pages
                </li>
              </ul>
              <ul className="user-menu">
                <li className="login">
            
                    <img src="/images/default-icon.png" alt="User icon" />
                    Login / Register
                  
                </li>
                <li>
                  
                    <img src="/images/search-icon.png" alt="Search icon" />
                  
                </li>
                <li onClick={() => handleNavigation('/shoppingcart')}>
                  
                    <img src="/images/cart-icn.png" alt="Cart icon"  className="shopping-basket" />
                  
                </li>
                <li>
    
                    <img src="/images/love-icn.png" alt="Wishlist icon" />
                  
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Navbar;
