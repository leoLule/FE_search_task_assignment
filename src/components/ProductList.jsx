// import React from 'react';
// import { ProductContext } from '../context/ProductContext';
// import { useEffect, useState, useContext } from 'react';

// const ProductList = () => {
//   const { setProductList, productList, fetchAllProducts } =
//     useContext(ProductContext);

//   console.log(productList);

//   return (
//     <>
//       {productList.map((product) => (
//         <img src={product.path.replace('view', '')} key={product.id} />
//       ))}
//     </>
//   );
// };

// export default ProductList;

// import React, { useEffect, useContext } from 'react';
// import { ProductContext } from '../context/ProductContext';

// const ProductList = () => {
//   const { productList, fetchAllProducts } = useContext(ProductContext);

//   useEffect(() => {
//     fetchAllProducts(); // Assuming this function fetches the product list
//   }, []);

//   return (
//     <div>
//       {productList.map((product) => (
//         <iframe
//           src={product.path.replace('view', 'preview')}
//           alt={product.name}
//           key={product.id}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductList = () => {
  const { productList, fetchAllProducts } = useContext(ProductContext);

  useEffect(() => {
    fetchAllProducts(); // Assuming this function fetches the product list
  }, []);

  // Function to extract the file ID from the Google Drive URL
  const extractFileId = (url) => {
    const match = url.match(/\/d\/([^/]+)\//);
    return match ? match[1] : '';
  };

  return (
    <div>
      {productList.map((product) => (
        <div key={product.id}>
          {/* Construct the direct image URL */}
          <img
            className="pic"
            src={`https://drive.google.com/uc?id=${extractFileId(
              product.path
            )}`}
            alt={`Image for ${product.id}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
