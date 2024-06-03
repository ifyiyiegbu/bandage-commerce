import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import { BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import BestSeller from '../components/BestSeller';
import Footer from '../components/Footer';
import "../styles/ShoppingCart.css";
import Navbar from '../components/Navbar';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="shopping-cart">
      <section className="navbar">
        <Navbar />
      </section>
      <div className="cart-content-container">
        <div className="cart-container">
          <nav className="cart-nav">
            <ul>
              <li onClick={() => handleNavigation('/')}>Home</li>
              <li><BiChevronRight /></li>
              <li onClick={() => handleNavigation('/product/:id')}>Shop</li>
              <li><BiChevronRight /></li>
              <li className="shop-lite">Shopping Cart</li>
            </ul>
          </nav>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="order-container">
              <section className="order-details">
                <h3 className="cart-heading">Shopping Cart</h3>
                <table className="table">
                  <thead className="table-head">
                    <tr>
                      <th>Item Details</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td className="item-details">
                          <div className="min-detail">
                            <img src={item.thumbnail} alt={item.title} width="100" className="item-thumbnail" />
                            <div className="item-info">
                              <h3>{item.title}</h3>
                              <p className="available">{item.availabilityStatus}</p>
                              <div className="rating-tab">
                                <div className="five-star">
                                  <img src="/images/filled-star.png" alt="" />
                                  <img src="/images/filled-star.png" alt="" />
                                  <img src="/images/filled-star.png" alt="" />
                                  <img src="/images/filled-star.png" alt="" />
                                  <img src="/images/filled-star.png" alt="" />
                                </div>
                                <p>{item.reviews ? item.reviews.length : 0} Reviews</p>
                              </div>
                            </div>
                          </div>
                          <div className="remove">
                            <img src="/images/bin.png" alt="" />
                            <p onClick={() => handleRemoveFromCart(item.id)}>Remove</p>
                          </div>
                        </td>
                        <td className="item-quantity">
                          <div className="quantity-controls">
                            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)} className="reduce">-</button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                              min="1"
                            />
                            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)} className="increase">+</button>
                          </div>
                        </td>
                        <td className="item-price">
                          <p className="price">${item.price}</p>
                          <p className="price-quantity">${item.price} x {item.quantity} item</p>
                        </td>
                        <div className="row-border"></div>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
              <section className="order-summary">
                <div className="summary">
                  <h4>Order Summary</h4>
                  <p>{totalItems} Items</p>
                </div>
                <div className="delivery-charges">
                  <h5>Delivery Charges</h5>
                  <p>Add your delivery address to checkout to see delivery charges.</p>
                </div>
                <div className="borderline"></div>
                <div className="subtotal">
                  <p>Subtotal</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
                <div className="borderline"></div>
                <div className="total">
                  <p>Total</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
              
                <div className="borderline"></div>
                <div className='extra-charges'>
                
                <p className="charges">Excluding Delivery Charges</p>
                
                <button className="checkout">Proceed to Checkout</button>
                </div>
                <div className="borderline"></div>
                <div className='payment-mode'>
                  <img src="/images/paystack.png" alt="" />
                  <img src="/images/mastercard.png" alt="" />
                  <img src="/images/visa.png" alt="" />
                </div>
              </section>
            </div>
          )}
          <section className="related">
            <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
            <div className='best-related'>
              <BestSeller limit={8} hideLoadMore />
            </div>
          </section>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ShoppingCart;