import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import axios from 'axios';
import Product from './Product';

const SearchImagesList = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { productList } = useContext(ProductContext);

  const handleSearch = async () => {
    function searchImagesByKeyword() {
      const filteredImages = productList.filter((image) =>
        image.keywords.includes(keyword)
      );
      const sortedImages = filteredImages.sort((a, b) => b.score - a.score);

      return sortedImages.slice(0, 5);
    }

    setSearchResults(searchImagesByKeyword(productList, keyword));
  };

  return (
    <>
      <Container>
        {' '}
        <TextField
          label="Enter a keyword"
          variant="outlined"
          value={keyword}
          margin="normal"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div>
          {' '}
          <Button onClick={handleSearch}>Search</Button>
        </div>
      </Container>

      <div className="image-results">
        {searchResults.map((product, index) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default SearchImagesList;
