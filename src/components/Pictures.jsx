import { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import { getImages } from 'api/fetchAPI';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import styles from 'components/Pictures.module.css';

const initialModal = {
  tags: '',
  largeImageURL: '',
};

const Pictures = () => {
  const [pictures, setPictures] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [contentModal, setContentModal] = useState(initialModal);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchImage = async () => {
      setLoading(true);

      try {
        const data = await getImages(search, page);
        setPictures(prevPictures => [...prevPictures, ...data.hits]);

        setTotal(data.total);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [search, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const onSubmit = search => {
    setSearch(search);
    setPictures([]);
    setPage(1);
    setError(null);
  };

  const onModalClose = () => {
    setOpenModal(false);
    setContentModal(initialModal);
  };

  const onOpenModal = contentModal => {
    setOpenModal(true);
    setContentModal(contentModal);
  };

  const showLoadMore = pictures.length !== total;

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      {loading && <Loader />}
      {error && <p>Please try again later</p>}
      {pictures.length < 1 && !loading && !error && (
        <p className={styles.noPictureText}>There is nothing here </p>
      )}
      <ImageGallery pictures={pictures} onClick={onOpenModal} />

      {showLoadMore && !loading && <Button onClick={loadMore} />}
      {loading && <Loader />}
      {openModal && (
        <Modal onClose={onModalClose}>
          <img src={contentModal.largeImageURL} alt={contentModal.tags} />
        </Modal>
      )}
    </div>
  );
};

export default Pictures;
