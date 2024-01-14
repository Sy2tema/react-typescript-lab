import styled from 'styled-components';
import { useState } from 'react';
import { DataView } from 'components/DataView';

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

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  }

  return (
    <Container>
      <DataView toDoList={toDoList} onDelete={onDelete} />
    </Container>
  );
}

export default App;
