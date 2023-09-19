import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8080/products');
      setProductList(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getDirectImageUrl = (url) => {
    const fileId = extractFileId(url);
    return `https://drive.google.com/uc?id=${fileId}`;
  };
  const extractFileId = (url) => {
    const match = url.match(/\/d\/([^/]+)\//);
    return match ? match[1] : '';
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
        getDirectImageUrl,
        extractFileId,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext };
export default ProductContextProvider;
