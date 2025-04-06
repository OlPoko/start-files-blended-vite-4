import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineCancel } from 'react-icons/md';
import { RiSaveLine } from 'react-icons/ri';
import { updateTodo, cancelEdit } from '../../redux/todosSlice';
import style from './EditForm.module.css';

const EditForm = () => {
  const currentTodo = useSelector(state => state.todos.currentTodo);
  const dispatch = useDispatch();

  const [text, setText] = useState(currentTodo.text);

  const handleSubmit = e => {
    e.preventDefault();
    if (text) {
      dispatch(updateTodo({ id: currentTodo.id, text }));
      dispatch(cancelEdit());
    }
  };

  const handleCancel = () => {
    dispatch(cancelEdit());
  };

  if (!currentTodo) {
    return null;
  }
  console.log(currentTodo.text);
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo.text}
        onChange={e => setText(e.target.value)}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleCancel}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};

export default EditForm;
