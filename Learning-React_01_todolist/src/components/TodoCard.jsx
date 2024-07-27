export default function TodoCard({ todo, todoIndex, removeTodo }) {
    return (
        <li>
            <div className="todo">
                <div className="index">{todoIndex}</div>
                <div className="value">{todo}</div>
                <div className="delete" onClick={() => { removeTodo(todoIndex) }}>delete</div>
            </div>
        </li>
    )
}
