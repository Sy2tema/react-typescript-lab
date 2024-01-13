import './App.css';
import styled from 'styled-components';
import { Title } from 'components/Title';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

function App() {
  return (
    <Container>
      <Title label="할 일 목록" />
    </Container>
  );
}

export default App;
