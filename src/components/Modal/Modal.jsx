import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import propTypes from 'prop-types';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#root');

const Modal = ({ onClose, children }) => {
  const closeModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', closeModal);

    return () => {
      document.removeEventListener('keydown', closeModal);
    };
  }, [closeModal]);

  return createPortal(
    <div className={styles.overlay} onClick={closeModal}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  children: propTypes.node.isRequired,
  onClose: propTypes.func.isRequired,
};
