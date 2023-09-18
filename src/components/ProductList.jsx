import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';

const ProductList = () => {
  const { productList, fetchAllProducts } = useContext(ProductContext);
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    fetchAllProducts(); //  fetches product list
  }, []);

  // Function to select 5 random images
  const selectRandomImages = () => {
    const shuffledProducts = [...productList].sort(() => 0.5 - Math.random());
    const randomImages = shuffledProducts.slice(0, 5);
    setSelectedImages(randomImages);
  };

  return (
    <div className="product-list-container">
      <button onClick={selectRandomImages}>Randomize Images</button>
      <div className="random-images-container">
        {selectedImages.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
