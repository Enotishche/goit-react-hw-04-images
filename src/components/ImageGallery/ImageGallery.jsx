import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
import styles from './ImageGallery.module.css';

const ImageGallery = ({ pictures, onClick }) => {
  return (
    <ul className={styles.imageGallery}>
      <ImageGalleryItem items={pictures} onClick={onClick} />
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  items: propTypes.array,
  onClick: propTypes.func.isRequired,
};
