import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const SearchImagesList = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    // Send a request to your backend or an image search API with the keyword.
    // Assume the API response contains an array of image objects with scoring information.
    // For this example, we'll use dummy data.
    const apiResponse = await fetch(`/api/search?keyword=${keyword}`);
    const data = await apiResponse.json();

    // Sort the images by their score in descending order.
    const sortedImages = data.images.sort((a, b) => b.score - a.score);

    // Take the top 5 images.
    const top5Images = sortedImages.slice(0, 5);

    // Update the search results state with the top 5 images.
    setSearchResults(top5Images);
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
