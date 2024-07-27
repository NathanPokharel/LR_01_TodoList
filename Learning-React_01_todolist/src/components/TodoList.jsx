import TodoCard from "./TodoCard"

export default function TodoList({ todos, removeTodo }) {
    return (
        <ul>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard todo={todo} key={todoIndex} todoIndex={todoIndex} removeTodo={removeTodo}/>
                )
            })}
        </ul>
    )
}
