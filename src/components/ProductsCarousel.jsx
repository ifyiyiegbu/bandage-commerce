import { useState } from 'react'
import PropTypes from 'prop-types'
import "../styles/ProductsCarousel.css"
import { GrNext, GrPrevious } from 'react-icons/gr';

const ProductsCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    return (
      <div className="carousel">
        <GrPrevious onClick={handlePrev} className="carousel-button prev-button" />
        <img src={images[currentIndex]} alt={`Product ${currentIndex + 1}`} className='carousel-image'/>
        <GrNext onClick={handleNext} className="carousel-button next-button" />
        
      </div>
    );
  };

  ProductsCarousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default ProductsCarousel
