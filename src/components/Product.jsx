import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const Product = ({ product }) => {
  const { getDirectImageUrl } = useContext(ProductContext);
  return (
    <div className="random-image" key={product.id}>
      <img
        src={getDirectImageUrl(product.path)}
        alt={`Image for ${product.id}`}
        width="200px"
        height="150px"
      />
    </div>
  );
};

export default Product;
