import React from 'react';

const Image = () => {
    const images = [
        { src: 'img_5terre.jpg', alt: 'Image 1', description: 'Description for Image 1' },
        { src: 'img_5terre.jpg', alt: 'Image 2', description: 'Description for Image 2' },
        { src: 'img_5terre.jpg', alt: 'Image 3', description: 'Description for Image 3' },
        { src: 'img_5terre.jpg', alt: 'Image 4', description: 'Description for Image 4' },
        { src: 'img_5terre.jpg', alt: 'Image 5', description: 'Description for Image 5' },
        { src: 'img_5terre.jpg', alt: 'Image 6', description: 'Description for Image 6' },
        { src: 'img_5terre.jpg', alt: 'Image 7', description: 'Description for Image 7' },
        { src: 'img_5terre.jpg', alt: 'Image 8', description: 'Description for Image 8' },
        // { src: 'img_9.jpg', alt: 'Image 9', description: 'Description for Image 9' },
        // { src: 'img_10.jpg', alt: 'Image 10', description: 'Description for Image 10' },
      ];
  return (
     <div className="gallery-container">
    {images.map((image, index) => (
      <div className="gallery-item" key={index}>
        <a href={image.src} target="_blank" rel="noopener noreferrer">
          <img src={image.src} alt={image.alt} />
        </a>
        <div className="desc">{image.description}</div>
      </div>
    ))}
  </div>
);
};

export default Image;
