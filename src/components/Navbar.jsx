import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
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
          <p>Follow Us : </p>
          <ul>
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
              >
                <img src="/images/facebook-icn.png" alt="Facebook icon" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/twitter-icn.png" alt="Twitter icon" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="navbar-light">
      
      <div className="nav-menu">
      <h3 className="brand-name">Bandage</h3> 
          <button className="menu-toggle" onClick={toggleMenu}>
            <img src="/images/menu-icon.png" alt="Menu icon" />
          </button>
          <nav className={`menu-items ${menuOpen ? "open" : ""}`}>
            <ul className="main-menu">
              <li>Home</li>
              <li className="shop">
                Shop
                <FaChevronDown className="caret" />
              </li>
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Pages</li>
            </ul>
            <ul className="user-menu">
              <li className="login">
                <img src="/images/default-icon.png" alt="" />
                Login / Register
              </li>
              <li>
                <img src="/images/search-icon.png" alt="" />
              </li>
              <li>
                <img src="/images/cart-icn.png" alt="" />
              </li>
              <li>
                <img src="/images/love-icn.png" alt="" />
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </header>
  );
}

export default Navbar;