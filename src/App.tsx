import styled from 'styled-components';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { TodoInput } from 'components/TodoInput';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  const [toDoList, setToDoList] = useState(["리액트 공부하기", "타입스크립트 공부하기", "운동하기"]);
  const [todo, setTodo] = useState("");

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  }

  const onAdd = () => {
    if (todo === '') return;

    setToDoList([...toDoList, todo]);
    setTodo("");
  }

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TodoInput onAdd={onAdd} />
    </Container>
  );
}

export default App;
