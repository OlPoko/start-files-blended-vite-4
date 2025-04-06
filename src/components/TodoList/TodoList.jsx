import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import Text from '../Text/Text';
import { selectFilteredTodos } from '../../redux/selectors';
import Grid from '../Grid/Grid';

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  if (todos.length === 0) {
    return <Text textAlign="center">We did not find any todo 😯</Text>;
  }

  return (
    <Grid>
      {todos.map((todo, index) => (
        <Todo key={todo.id} id={todo.id} text={todo.text} index={index} />
      ))}
    </Grid>
  );
};

export default TodoList;
