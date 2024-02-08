import styled from 'styled-components';
import DataView from 'components/DataView';
import { TodoListContextProvider } from 'contexts/TodoList';
import { Routes, Route } from 'react-router-dom';
import TodoInput from 'components/TodoInput';
import Header from 'components/Header';

const Container = styled.h3`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const NotFound = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <TodoListContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<DataView />} />
          <Route path='/add-todo' element={<TodoInput />} />
          <Route
            path='*'
            element={
              <NotFound>
                404<br />
                NOT FOUND
              </NotFound>
            }
          />
        </Routes>
      </TodoListContextProvider>
    </Container>
  );
}

export default App;
