import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from '../services/products';
import "../styles/BestSeller.css"

const BestSeller = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setVisibleProducts(window.innerWidth <= 768 ? 5 : 10);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const loadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + (isMobile ? 5 : 10));
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <main className='bestseller'>
        
        <div className="product-list">
          {data.products.slice(0, visibleProducts).map((product) => (
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
        {visibleProducts < data.products.length && (
          <button onClick={loadMore} className="load-more-button">
            Load More Products
          </button>
        )}
    </main>
  );
};

export default BestSeller;
