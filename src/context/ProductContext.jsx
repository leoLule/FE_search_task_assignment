import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8080/products');
      setProductList(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        setProductList,
        productList,
        fetchAllProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
export default ProductContextProvider;
