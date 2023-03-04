import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import propTypes from 'prop-types';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const onChangeSearchForm = ({ currentTarget }) => {
    const { value } = currentTarget;
    setSearch(value.toLowerCase());
  };

  const onSubmitSearchForm = e => {
    e.preventDefault();
    if (search.trim() === '') {
      alert('Searchfield is empty.');
      return;
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.searchForm} onSubmit={onSubmitSearchForm}>
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormLabel} aria-label="search"></span>
          <GoSearch size="25px" />
        </button>

        <input
          className={styles.searchFormInput}
          onChange={onChangeSearchForm}
          value={search}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: propTypes.func.isRequired,
};
