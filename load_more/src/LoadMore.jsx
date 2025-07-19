import { useState, useEffect } from 'react';
import UseImage from '../../image-slider/src/hooks/UseImage';
import './App.css';

function LoadMore() {
  const limit = 100;
  const batchSize = 10;

  const [imageCount, setImageCount] = useState(batchSize); // total needed
  const [imagesArr, setImagesArr] = useState([]);

  const { images, loading, error } = UseImage(imageCount); // dynamic count

  // When images change, update state
  useEffect(() => {
    if (images && images.length > 0) {
      setImagesArr(prev=>[...prev,...images]); // overwrite with total images
    }
  }, [imageCount]);

  function handleImageCount() {
    if (imageCount < limit) {
      setImageCount(prev => prev + batchSize);
    }
  }

  return (
    <div className="loadMore">
      <div className="imageContainer">
        {imagesArr.map((url, index) => (
          <img src={url} alt="Batch" className="image" key={index} />
        ))}
      </div>

      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">Failed to fetch images</p>}

      <div className="loadingButton">
        {imageCount >= limit && <p>Limit Reached: 100</p>}
        <button
          className="load-button"
          onClick={handleImageCount}
          disabled={imageCount >= limit || loading}
        >
          Load More Images
        </button>
      </div>
    </div>
  );
}

export default LoadMore;
