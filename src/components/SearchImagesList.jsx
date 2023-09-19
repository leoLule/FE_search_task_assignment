import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
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
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </Container>

      <div className="image-results">
        {searchResults.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default SearchImagesList;
