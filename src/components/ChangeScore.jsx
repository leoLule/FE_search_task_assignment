import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import Product from './Product';
import axios from 'axios';

//logic for button increment , need the id of product , try to do it like toggleAdmin
const ChangeScore = () => {
  const { productList } = useContext(ProductContext);
  const [incrementScore, setIncrementScore] = useState(''); // not sure if [] or " " or {}

  const incrementScoreFetch = async (id) => {
    try {
      const res = await axios.put('http://localhost:8080/products/increment', {
        id,
      });
      setIncrementScore(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <p>ChangeScore</p>
      <div className="change-score-images">
        {productList.map((product) => (
          <div key={product.id}>
            <Product product={product} />
            <button onClick={() => incrementScoreFetch(product.id)}>
              Change Score +
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChangeScore;
