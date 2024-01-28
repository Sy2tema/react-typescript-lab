import ShowInputButton from "components/ShowInputButton";
import Title from "components/Title";
import ToDoList from "components/ToDoList";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;
`;

const DataView = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <Title label="할 일 목록" />
            <ToDoList />
            <ShowInputButton show={false} onClick={() => navigate('/add-todo')} />
        </Container>
    );
};

export default DataView;