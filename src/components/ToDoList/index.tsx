import { TodoItem } from "components/TodoItem";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

interface Props {
    readonly toDoList: ReadonlyArray<string>;
    readonly onDelete?: (todo: string) => void;
}

export const ToDoList = ({ toDoList, onDelete }: Props) => {

    return (
        <Container>
            {toDoList.map((todo) => (
                <TodoItem
                    key={todo}
                    label={todo}
                    onDelete={() => {
                        if (typeof onDelete === 'function') onDelete(todo);
                    }}
                />
            ))}
        </Container>
    )
}