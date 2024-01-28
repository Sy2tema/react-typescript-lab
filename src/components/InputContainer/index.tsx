import { ShowInputButton } from "components/ShowInputButton";
import { TodoInput } from "pages/TodoInput";
import { useState } from "react";

export const InputContainer = () => {
    const [showTodoInput, setShowTodoInput] = useState(false);

    return (
        <>
            {showTodoInput && <TodoInput />}
            <ShowInputButton
                show={showTodoInput}
                onClick={() => setShowTodoInput(!showTodoInput)}
            />
        </>
    );
};