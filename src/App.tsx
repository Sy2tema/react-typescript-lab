import styled from 'styled-components';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { TextInput } from 'components/TextInput';
import { Button } from 'components/Button';

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

  const onAddTodo = () => {
    if (todo === '') return;

    setToDoList([...toDoList, todo]);
    setTodo("");
  }

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      <TextInput value={todo} onChange={setTodo} />
      <Button label='추가' color='#304FFE' onClick={onAddTodo} />
    </Container>
  );
}

export default App;
