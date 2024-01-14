import { Title } from "components/Title";
import { ToDoList } from "components/ToDoList";
import styled from "styled-components";

const Container = styled.div`
    dixplay: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;
`;

interface Props {
    readonly toDoList: ReadonlyArray<string>;
    readonly onDelete?: (todo: string) => void;
}

export const DataView = ({ toDoList, onDelete }: Props) => {
    return (
        <Container>
            <Title label="할 일 목록" />
            <ToDoList toDoList={toDoList} onDelete={onDelete} />
        </Container>
    );
};