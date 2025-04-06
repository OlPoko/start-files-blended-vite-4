import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo, setCurrentTodo } from '../../redux/todosSlice';
import style from './Todo.module.css';
import GridItem from '../GridItem/GridItem';
import Text from '../Text/Text';

const Todo = ({ id, text, index }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(setCurrentTodo({ id, text }));
  };

  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {index + 1}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          onClick={() => dispatch(deleteTodo(id))}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button onClick={handleEdit} className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};

export default Todo;
