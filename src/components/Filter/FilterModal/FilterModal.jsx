import FilterList from '../FilterList/FilterList';
import Modal from 'react-modal';
import sprite from '../../../assets/sprite.svg';
import css from './FilterModal.module.css';
import clsx from 'clsx';
import { getThemeStyle } from '../../../scripts/getThemeStyle';

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
    borderRadius: '8px',
  },
  overlay: {
    backgroundColor: ''
  }
};

function FilterModal() {
  const modal = clsx(css.modal, getThemeStyle(css));
  // const showAllBtn = clsx(css.showAllBtn, filter === 'all' && css.active);

  function handleFilter() {
    console.log('Filter is all');
  }

  return (
    <Modal
      isOpen={false}
      style={customStyles}
    >
      <div className={modal}> 
        <button className={css.closeModalBtn} type="button">
          <svg className={css.closeModalIcon}>
            <use href={`${sprite}#icon-x-close`}></use>
          </svg>
        </button>
        <p className={css.modalTitle}>Filters</p>
        <hr className={css.line}/>
        <div className={css.filterWrapper}>
          <div>
            <p className={css.filterInputsTitle}>Label color</p>
            <FilterList/>
          </div>
          <label className={css.showAllBtn} onClick={handleFilter}>
            Show all
            <input type="radio" name="filter" value="high" />
          </label>
        </div>
      </div>
    </Modal>
  )
}

export default FilterModal;