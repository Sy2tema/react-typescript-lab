import { createContext, useState } from "react";

interface Context {
    readonly todoList: string[];
    readonly onAdd: (todo: string) => void;
    readonly onDelete: (todo: string) => void;
}

// Context의 기본값 설정
const TodoListContext = createContext<Context>({
    todoList: [],
    onAdd: (): void => { },
    onDelete: (): void => { },
});

interface Props {
    children: JSX.Element | JSX.Element[];
}

const TodoListContextProvider = ({ children }: Props) => {
    const [todoList, setTodoList] = useState([
        "리액트 공부하기",
        "타입스크립트 공부하기",
        "운동하기"
    ]);

    const onAdd = (todo: string) => {
        setTodoList([...todoList, todo]);
    };

    const onDelete = (todo: string) => {
        setTodoList(todoList.filter((item) => item !== todo));
    };

    return (
        <TodoListContext.Provider
            value={{
                todoList,
                onAdd,
                onDelete
            }}
        >
            {children}
        </TodoListContext.Provider>
    );
};

export { TodoListContext, TodoListContextProvider };