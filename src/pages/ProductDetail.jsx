import { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../services/products';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import ProductsCarousel from '../components/ProductsCarousel';
import BestSeller from '../components/BestSeller';
import Footer from '../components/Footer';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductsQuery();
  const dispatch = useDispatch();
  const [alertVisible, setAlertVisible] = useState(false);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;

  const product = data.products.find((product) => product.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 2000);
  };

  return (
    <div className="product-detail">
        <section>
            <Navbar />
        </section>
        <section className='product-nav'>
            <nav>
                <Link to= "/" className='link'>
                Home                
                </Link>
                <img src="/images/arrow-right.png" alt="" />
                <h6>
                Shop
                </h6>
            </nav>
            
            <section className='shop-product'>
                <ProductsCarousel images={product.images} />
                <div className='product-info'>
                    <h4 className='product-name'>{product.title}</h4>
                    <div className='rating'>
                        <div className='star-rating'>
                            <img src="/images/filled-star.png" alt="" />
                            <img src="/images/filled-star.png" alt="" />
                            <img src="/images/filled-star.png" alt="" />
                            <img src="/images/filled-star.png" alt="" />
                            <img src="/images/unfilled-star.png" alt="" />
                        </div>
                        <p>{product.reviews.length} Reviews</p>
                    </div>
                    
                    <p className='product-price'>Price: ${product.price}</p>
                    <div className='avail-status'>
                        <p className='avail'>Availability : </p>
                        <p className='availability'> {product.availabilityStatus}</p>
                    </div>
                    {alertVisible && <div className="alert">Successfully added to basket</div>}
                    <p className='added-mobile'>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                    <div className='demarcate'></div>
                    <div className='colour-choice'>
                        <img src="/images/Ellipse-blue.png" alt="blue circle" />
                        <img src="/images/Ellipse-green.png" alt="green circle" />
                        <img src="/images/Ellipse-brown.png" alt="brown circle" />
                        <img src="/images/Ellipse-navy.png" alt="navyblue circle" />
                    </div>
                    <div className='buttons'>
                        <button className='options-btn'>Select Options</button>
                        <button className='like-btn'><img src="/images/like-btn.png" alt="Like button" /></button>
                        <button className='add-to-cart-btn' onClick={handleAddToCart}>
                        <img src="/images/basket.png" alt="Shopping basket" /></button>
                        <button className='more-btn'><img src="/images/more.png" alt="More details button" /></button>
                    </div>
                </div>
            </section>
      </section>
      <section className='product-description'>
        <ul>
            <li><a href="">Description</a></li>
            <li><a href="">Additional Information</a>
            </li>
            <li className='review-no'>
                <a href="">Reviews</a>
                <p>(0)</p>
            </li>
        </ul>
        <div className=' demarcate line'></div>
        <div className='description-detail'>
            <div className='description-text'>
                <h3>the quick fox jumps over </h3>
                <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
                <div className='line-paragraph'>
                    <div className='vertical-line'></div>
                    <p>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                </div>
                <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
            </div>
            <img src="/images/lounge-pic.png" alt="" />
        </div>
      </section>
      <section className='bestseller-products'>
        <h3>BESTSELLER PRODUCTS</h3>
        <div className='line'></div>
        <BestSeller />
      </section>
      <footer className='grand-footer'>
        <div className='brands'>
            <img src="/images/fa-brands-1.png" alt="hooli" />
            <img src="/images/Vector (2).png" alt="lyft" />
            <img src="/images/fa-brands-3.png" alt="hat" />
            <img src="/images/fa-brands-4.png" alt="stripe" />
            <img src="/images/fa-brands-5.png" alt="aws" />
            <img src="/images/fa-brands-6.png" alt="robot" />
        </div>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetail;
