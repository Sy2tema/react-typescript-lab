import styled from 'styled-components';
import { useState } from 'react';
import { DataView } from 'components/DataView';
import { TodoInput } from 'components/TodoInput';
import { Button } from 'components/Button';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const ShowInputComponent = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

function App() {
  const [toDoList, setToDoList] = useState(["리액트 공부하기", "타입스크립트 공부하기", "운동하기"]);
  const [showTodoInput, setShowTodoInput] = useState(false);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  }

  const onAdd = (todo: string) => {
    if (todo === '') return;

    setShowTodoInput(false);
    setToDoList([...toDoList, todo]);
  }

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
      {showTodoInput && <TodoInput onAdd={onAdd} />}
      <ShowInputComponent>
        <Button
          label={showTodoInput ? '닫기' : '할 일 추가'}
          color={showTodoInput ? undefined : '#304FFE'}
          onClick={() => setShowTodoInput(!showTodoInput)}
        />
      </ShowInputComponent>
    </Container>
  );
}

export default App;
