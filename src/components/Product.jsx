import { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import fallback from '../assets/fallback.jpeg';

const Product = ({ product }) => {
  const { getDirectImageUrl } = useContext(ProductContext);
  const [src, setSrc] = useState(getDirectImageUrl(product.path));

  const handleImageError = (event) => {
    setSrc(fallback);
  };

  return (
    <div className="random-image" key={product.id}>
      <img
        src={src}
        alt={`Image for ${product.id}`}
        onError={handleImageError}
        width="200px"
        height="150px"
      />
    </div>
  );
};

export default Product;
