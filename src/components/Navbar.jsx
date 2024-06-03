import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import "../styles/Navbar.css";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

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
          <div className="navbar-inner">
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
          </div>
        </section>

        <section className={`navbar-light ${menuOpen ? "menu-open" : ""}`}>
          <div className="navbar-inner">
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
                  <li onClick={() => handleNavigation('/')}>
                    Home
                  </li>
                  <li onClick={() => handleNavigation('/product:id')} className="shop">
                    Shop
                    <FaChevronDown className="caret" />
                  </li>
                  <li onClick={() => handleNavigation('/about')}>
                    About
                  </li>
                  <li onClick={() => handleNavigation('/blog')}>
                    Blog
                  </li>
                  <li onClick={() => handleNavigation('/contact')}>
                    Contact
                  </li>
                  <li onClick={() => handleNavigation('/pages')}>
                    Pages
                  </li>
                </ul>
                <ul className="user-menu">
                  <li className="login" onClick={() => handleNavigation('/login')}>
                    <img src="/images/default-icon.png" alt="User icon" />
                    Login / Register
                  </li>
                  <li>
                    <img src="/images/search-icon.png" alt="Search icon" />
                  </li>
                  <li>
                    <div className="cart-icon" onClick={() => handleNavigation('/shoppingcart')}>
                      <img src="/images/cart-icn.png" alt="Cart icon" className="shopping-basket" />
                      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                    </div>
                  </li>
                  <li>
                    <div className="likes">
                      <img src="/images/love-icn.png" alt="Wishlist icon" />
                      <span>1</span>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Navbar;
