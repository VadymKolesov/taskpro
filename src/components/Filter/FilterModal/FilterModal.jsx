import css from './FilterModal.module.css';
import sprite from '../../../assets/sprite.svg';
import clsx from 'clsx';
import FilterList from '../FilterList/FilterList';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    backgroundColor: 'transparent',
    border: 'none',
  },
  overlay: {
    backgroundColor: ''
  }
};

const getThemaStyles = (theme) => {
  switch (theme) {
    case 'light':
      return css.light;
    case 'violet':
      return css.violet;
    default:
      return '';
  }
}

function FilterModal({ theme, isOpen, setIsOpen }) {
  const [filter, setFilter] = useState('all');
  const modal = clsx(css.modal, getThemaStyles(theme));
  const showAllBtn = clsx(css.showAllBtn, filter === 'all' && css.active)

  function closeModal() {
    setIsOpen(false);
  }

  function handleFilter() {
    setFilter('all');
    console.log('all');
  }

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
    >
      <div className={modal}> 
        <button className={css.closeModalBtn} type="button" onClick={closeModal}>
          <svg className={css.closeModalIcon}>
            <use href={`${sprite}#icon-x-close`}></use>
          </svg>
        </button>
        <p className={css.modalTitle}>Filters</p>
        <hr className={css.line}/>
        <div className={css.filterWrapper}>
          <div>
            <p className={css.filterInputsTitle}>Label color</p>
            <FilterList theme={theme} setFilter={setFilter} filter={filter}/>
          </div>
          <button className={showAllBtn} type='button' onClick={handleFilter}>Show all</button>
        </div>
      </div>
    </Modal>
  )
}

export default FilterModal;