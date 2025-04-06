import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import Form from './components/Form/Form';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import EditForm from './components/EditForm/EditForm';
import { useSelector } from 'react-redux';

export const App = () => {
  const currentTodo = useSelector(state => state.todos.currentTodo);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Text textAlign="center">Create your first todo😉</Text>
          {!currentTodo ? <Form /> : <EditForm />}
          <Filter />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
