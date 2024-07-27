import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
function App() {
    const [todos, setTodos] = useState([
        'Go To The Gym',
        'Do Some Shit',
        'Do Some More Shit',
    ])

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo]
        setTodos(newTodoList)
    }
    function handleRemoveTodos(todoIndex) {
        const newTodoList = [...todos];
        newTodoList.splice(todoIndex, 1);
        setTodos(newTodoList);
    }
    return (
        <>
            <TodoInput addTodo={handleAddTodos} />
            <TodoList todos={todos} removeTodo={handleRemoveTodos} />
        </>
    )
}

export default App
