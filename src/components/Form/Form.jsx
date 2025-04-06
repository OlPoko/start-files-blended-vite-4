// Form.jsx
import { FiSearch } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '../../redux/todosSlice';

import style from './Form.module.css';

const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (inputValue.trim() === '') return;

    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
