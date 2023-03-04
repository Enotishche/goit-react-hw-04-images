import { Blocks } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Blocks
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
        wrapperClass="blocks-wrapper"
      />
    </div>
  );
};

export default Loader;
