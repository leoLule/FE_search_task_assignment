// import React, { useContext, useEffect, useState } from 'react';
// import { ProductContext } from '../context/ProductContext';
// import Product from './Product';
// import axios from 'axios';
// import Grid from '@mui/material/Grid';

// const ChangeScore = () => {
//   const { productList, setProductList } = useContext(ProductContext);

//   const incrementScoreFetch = async (id) => {
//     try {
//       const res = await axios.put('http://localhost:8080/products/increment', {
//         id,
//       });

//       // Update the productList with the updated score
//       const updatedProductList = productList.map((product) => {
//         if (product.id === id) {
//           return { ...product, score: res.data.score };
//         }
//         return product;
//       });

//       // Update the state to re-render the component with the updated score
//       setProductList(updatedProductList);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       <h2>Increment Score</h2>
//       <Grid container spacing={2} className="change-score-images">
//         {productList.map((product) => (
//           <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
//             <Product product={product} />
//             <button onClick={() => incrementScoreFetch(product.id)}>
//               Increment Score +
//             </button>
//             <p>{product.score}</p>
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// };

// export default ChangeScore;
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';
import axios from 'axios';
import Grid from '@mui/material/Grid';

const ChangeScore = () => {
  const { productList, setProductList } = useContext(ProductContext);

  const incrementScoreFetch = async (id) => {
    try {
      const res = await axios.put('http://localhost:8080/products/increment', {
        id,
      });

      // Update the productList with the updated score
      const updatedProductList = productList.map((product) => {
        if (product.id === id) {
          return { ...product, score: res.data.score };
        }
        return product;
      });

      // Update the state to re-render the component with the updated score
      setProductList(updatedProductList);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h2>Increment Score</h2>
      <Grid container spacing={2} className="change-score-images">
        {productList.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />

            <button onClick={() => incrementScoreFetch(product.id)}>
              Increment Score +
            </button>
            <p>{product.score}</p>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ChangeScore;
