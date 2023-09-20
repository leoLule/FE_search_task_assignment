import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';
import axios from 'axios';

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
      <div className="change-score-images">
        {productList.map((product) => (
          <div key={product.id}>
            <Product product={product} />
            <button onClick={() => incrementScoreFetch(product.id)}>
              Increment Score +
            </button>
            <p>{product.score}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChangeScore;
