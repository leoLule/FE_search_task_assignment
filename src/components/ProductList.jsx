// export default ProductList;

// import React, { useContext, useEffect } from 'react';
// import { ProductContext } from '../context/ProductContext';

// const ProductList = () => {
//   const { productList, fetchAllProducts } = useContext(ProductContext);

//   useEffect(() => {
//     fetchAllProducts(); // Assuming this function fetches the product list
//   }, []);

//   // Function to extract the file ID from the Google Drive URL
//   const extractFileId = (url) => {
//     const match = url.match(/\/d\/([^/]+)\//);
//     return match ? match[1] : '';
//   };

//   return (
//     <div>
//       {productList.map((product) => (
//         <div key={product.id}>
//           {/* Construct the direct image URL */}
//           <img
//             className="pic"
//             src={`https://drive.google.com/uc?id=${extractFileId(
//               product.path
//             )}`}
//             alt={`Image for ${product.id}`}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;

// this works
// import React, { useContext, useEffect, useState } from 'react';
// import { ProductContext } from '../context/ProductContext';

// const ProductList = () => {
//   const { productList, fetchAllProducts } = useContext(ProductContext);
//   const [randomImages, setRandomImages] = useState([]);
//   const [selectedIndices, setSelectedIndices] = useState([]);

//   useEffect(() => {
//     fetchAllProducts(); // Assuming this function fetches the product list
//   }, []);

//   // Function to select random indices
//   const selectRandomIndices = () => {
//     const indices = [];
//     while (indices.length < 5) {
//       const randomIndex = Math.floor(Math.random() * productList.length);
//       if (!indices.includes(randomIndex)) {
//         indices.push(randomIndex);
//       }
//     }
//     setSelectedIndices(indices);
//   };

//   // Function to render random images
//   const renderRandomImages = () => {
//     return selectedIndices.map((index) => {
//       const product = productList[index];
//       const fileId = extractFileId(product.path);
//       const directImageUrl = `https://drive.google.com/uc?id=${fileId}`;
//       return (
//         <div className="" key={product.id}>
//           <img
//             style={{ width: '200px', height: '150px' }}
//             src={directImageUrl}
//             alt={`Image for ${product.id}`}
//           />
//         </div>
//       );
//     });
//   };

//   // Function to extract the file ID from the Google Drive URL
//   const extractFileId = (url) => {
//     const match = url.match(/\/d\/([^/]+)\//);
//     return match ? match[1] : '';
//   };

//   return (
//     <div className="">
//       <button onClick={selectRandomIndices}>Randomize Images</button>
//       <div className="">{renderRandomImages()}</div>
//     </div>
//   );
// };

// export default ProductList;

//works also
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';

const ProductList = () => {
  const { productList, fetchAllProducts } = useContext(ProductContext);
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    fetchAllProducts(); // Assuming this function fetches the product list
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
