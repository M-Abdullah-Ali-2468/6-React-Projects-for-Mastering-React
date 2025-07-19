import { useEffect, useState } from 'react';

function UseImage(count = 5) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);

         const randomPage = Math.floor(Math.random() * 15) + 1;

        const response = await fetch(`https://picsum.photos/v2/list?page=${randomPage}&limit=${count}`);
      
        const data = await response.json();
        const imageUrls = data.map(img => `https://picsum.photos/id/${img.id}/600/400`);
        setImages(imageUrls);
      } catch (err) {
        setError('Failed to fetch images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [count]);

  return { images, loading, error };
}

export default UseImage;
