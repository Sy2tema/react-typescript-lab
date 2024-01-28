import ShowInputButton from "components/ShowInputButton";
import TodoInput from "components/TodoInput";
import { useState } from "react";

const InputContainer = () => {
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

export default InputContainer;