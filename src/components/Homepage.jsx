import React from 'react';
import ProductList from './ProductList';
import SearchImagesList from './SearchImagesList';
import ChangeScore from './changeScore';

const Homepage = () => {
  return (
    <>
      <ProductList />
      <SearchImagesList />
      <ChangeScore />
    </>
  );
};

export default Homepage;
