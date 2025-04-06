import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import style from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={style.filterContainer}>
      <input
        type="text"
        placeholder="Search todos..."
        onChange={handleChange}
        className={style.filterInput}
      />
    </div>
  );
};

export default Filter;
