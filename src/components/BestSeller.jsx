import { useState, useEffect } from 'react';
import { useGetProductsQuery } from '../services/products';
import "../styles/BestSeller.css"

const ProductList = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setVisibleProducts(window.innerWidth <= 768 ? 5 : 10);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  const loadMore = () => {
    setVisibleProducts((prevVisible) => prevVisible + (isMobile ? 5 : 10));
  };

  return (
    <main className='bestseller'>
        <header className='list-header'>
            <h4>Featured Products</h4>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between</p>
        </header>
        <div className="product-list">
          {data.products.slice(0, visibleProducts).map((product) => (
                <div key={product.id} className="product-card">
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.category}</p>
                <p>${product.price}</p>
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

export default ProductList;
