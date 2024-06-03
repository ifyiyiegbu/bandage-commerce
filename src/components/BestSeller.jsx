import { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../services/products';
import "../styles/BestSeller.css"

const BestSeller = ({ limit, hideLoadMore }) => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(limit);
  const navigate = useNavigate();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const products = data.products.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + limit);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };


  return (
    <main className='bestseller'>
        
        <div className="product-list">
          {products.map((product) => (
                <div key={product.id} className="product-card" onClick={() => handleProductClick(product.id)}>
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.category}</p>
                <p>${product.price}</p>
                {!product.stock && (
                  <div className="out-of-stock-overlay">Out of Stock</div>
                )}
                </div>
            ))}
        </div>
        {!hideLoadMore && visibleCount < data.products.length && (
          <button onClick={handleLoadMore} className="load-more-button">
            Load More Products
          </button>
        )}
    </main>
  );
};

BestSeller.propTypes = {
  limit: PropTypes.number.isRequired, 
  hideLoadMore: PropTypes.bool, 
};


export default BestSeller;
