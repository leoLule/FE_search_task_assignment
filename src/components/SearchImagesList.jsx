import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import axios from 'axios';

const SearchImagesList = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { productList, fetchAllProducts } = useContext(ProductContext);

  // useEffect(() => {
  //   fetchAllProducts(); //  fetches product list onload
  // }, []);

  const searchProducts = async () => {
    try {
      const res = await axios.get(
        'http://localhost:8080/search?keywords=${keyword}'
      ); // /search?type=${keyword}
      setSearchResults(res.data);
      // console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(searchResults);
  const handleSearch = async () => {
    searchProducts();
    // Send a request to your backend or an image search API with the keyword.
    // Assume the API response contains an array of image objects with scoring information.\

    //i have the data already stored in product i do not need to fetch on click anymore
    // console.log(keyword);
    // console.log(productList);

    // const apiResponse = await fetch(
    //   `http://localhost:8080/products/${keyword}`
    // );
    // // `http://localhost:8080/products/${keyword}` `/api/search?keyword=${keyword}`

    // const data = apiResponse;
    // const data = await fetchAllProducts(keyword);
    // console.log(fetchAllProducts(keyword));

    // Sort the images by their score in descending order.
    // const sortedImages = data.path.sort((a, b) => b.score - a.score);

    // // Take the top 5 images.
    // const top5Images = sortedImages.slice(0, 5);

    // // Update the search results state with the top 5 images.
    // setSearchResults(top5Images);

    function searchImagesByKeyword(images, keyword) {
      // Filter the images based on the presence of the keyword in the keywords array
      const filteredImages = images.filter((image) =>
        image.keywords.includes(keyword)
      );

      // Sort the filtered images by score in descending order
      const sortedImages = filteredImages.sort((a, b) => b.score - a.score);

      // Return the top 5 images or all matching images if there are fewer than 5
      return sortedImages.slice(0, 5);
    }

    // Example usage:
    const images = [
      // ... (your image data here)
    ];

    // const keyword = 'pink'; // The keyword to search for
    const searchResults = searchImagesByKeyword(images, keyword);

    console.log(searchResults); // Display the search results
  };

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter a keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      /> */}
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
        {searchResults.map((image, index) => (
          <div key={index} className="image-result">
            <img src={image.url} alt={`Image ${index}`} />
            <p>Score: {image.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchImagesList;
