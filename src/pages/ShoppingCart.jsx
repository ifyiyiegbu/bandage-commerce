import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../features/cart/cartSlice';
import { BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import BestSeller from '../components/BestSeller';
import Footer from '../components/Footer';

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
  }

  return (
    <div className="shopping-cart">
      <nav className='cart-nav'>
        <ul>
          <li onClick={() => handleNavigation('/')}>
            Home
          </li>
          <BiChevronRight />
          <li onClick={() => handleNavigation('/product/:id')}>
            Shop
          </li>
          <BiChevronRight />
          <li>
            Shopping Cart
          </li>
        </ul>
      </nav>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
      <div className='order-details'>
          <table>
          <thead>
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
                  <img src={item.thumbnail} alt={item.title} className="item-thumbnail" />
                  <div className="item-info">
                    <h3>{item.title}</h3>
                    <p>Reviews: {item.reviews ? item.reviews.length : 0}</p>
                  </div>
                </td>
                <td className="item-quantity">
                  <div className="quantity-controls">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      min="1"
                    />
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>
                </td>
                <td className="item-price">
                  <p>${item.price}</p>
                  <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <section className='order-summary'>
            <div className='summary'>
              <h4>Order Summary</h4>
              <p>{totalItems} Items</p>
            </div>
            <div className='delivery-charges'>
              <h5>Delivery Charges</h5>
              <p>Add your delivery address to checkout to see delivery charges.</p>
            </div>
            <div></div>
            <div className='subtotal'>
              <p>Subtotal</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div></div>
            <div className='total'>
              <p>Total</p>
              <p>${totalPrice.toFixed(2)}</p>
            </div>
            <div></div>
            <p>Excluding Delivery Charges</p>
            <button>Proceed to Checkout</button>
            <div></div>
            <div>
              <img src="/images/paystack.png" alt="" />
              <img src="/images/mastercard.png" alt="" />
              <img src="/images/visa.png" alt="" />            
            </div>
        </section>

      </div>
      )}
      <section className='related'>
        <h3>PRODUCTS RELATED TO ITEMS IN YOUR CART</h3>
        <BestSeller />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ShoppingCart;