import { useContext } from "react";
import { TodoItem } from "components/TodoItem";
import styled from "styled-components";
import { TodoListContext } from "contexts/TodoList";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ToDoList = () => {
    const { todoList, onDelete } = useContext(TodoListContext);

    return (
        <Container>
            {todoList.map((todo) => (
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