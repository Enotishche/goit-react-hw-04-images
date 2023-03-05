import React from 'react';
import propTypes from 'prop-types';

import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ items, onClick }) => {
  return (
    <>
      {items.map(({ id, webformatURL, largeImageURL, tags }) => (
        <li
          key={id}
          onClick={() => onClick({ largeImageURL, tags })}
          className={styles.imageGalleryItem}
        >
          <img
            src={webformatURL}
            alt={tags}
            className={styles.imageGalleryItemImage}
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      webformatURL: propTypes.string.isRequired,
      largeImageURL: propTypes.string.isRequired,
      tags: propTypes.string.isRequired,
    })
  ),
  onClick: propTypes.func.isRequired,
};
