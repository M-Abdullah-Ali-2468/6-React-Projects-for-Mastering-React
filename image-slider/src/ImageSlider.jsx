import React, { useState } from 'react';
import UseImage from './hooks/UseImage';
import './App.css';

function ImageSlider() {
    const { images, loading, error } = UseImage(25);
    const [current_images_idx, setIndex] = useState(0);

    const visibleDotsNumber = 5;
    const half = Math.floor(visibleDotsNumber / 2);

    if (loading) {
        return <h1 className="loadingImages">Loading....</h1>;
    }

    if (error) {
        return <h1 className="errorMsg">Failed to fetch the images!</h1>;
    }

    function handleNext() {
        setIndex((prev) => (prev + 1) % images.length);
    }

    function handlePrev() {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    function moveToImg(idx) {
        setIndex(idx);
    }

    // 🔄 Create circular visible dots
    const visibleRange = [];
    for (let i = -half; i <= half; i++) {
        const idx = (current_images_idx + i + images.length) % images.length;
        visibleRange.push(idx);
    }

    return (
        <div className="imageSlider">
            <div className="imgContainer">
                {images.map((url, index) => (
                    <img
                        src={url}
                        alt="Slider Image"
                        className={index === current_images_idx ? 'activeImage' : 'inactiveImage'}
                        key={index}
                    />
                ))}
            </div>

            <div className="arrowsSlider">
                <button onClick={handlePrev} className="arrow left">&lt;</button>
                <button onClick={handleNext} className="arrow right">&gt;</button>
            </div>

            <div className="dots">
                {visibleRange.map((index) => (
                    <span
                        key={index}
                        onClick={() => moveToImg(index)}
                        className={current_images_idx === index ? 'activeDots' : ''}
                    >
                        {index}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;
