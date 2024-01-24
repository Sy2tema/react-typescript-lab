import { ShowInputButton } from "components/ShowInputButton";
import { TodoInput } from "components/TodoInput";
import { useState } from "react";

interface Props {
    readonly onAdd: (todo: string) => void;
}

export const InputContainer = ({ onAdd }: Props) => {
    const [showTodoInput, setShowTodoInput] = useState(false);

    const onAddTodo = (todo: string) => {
        onAdd(todo);
        setShowTodoInput(false);
    }

    return (
        <>
            {showTodoInput && <TodoInput onAdd={onAddTodo} />}
            <ShowInputButton
                show={showTodoInput}
                onClick={() => setShowTodoInput(!showTodoInput)}

            />
        </>
    );
};