import { useState } from "react"

export default function TodoInput({ addTodo }) {
    const [todo, setTodo] = useState('')

    return (
        <header>
            <input value={todo} onChange={(e) => { setTodo(e.target.value) }} placeholder="Enter todo ... " />
            <button onClick={() => { addTodo(todo); setTodo('') }}>Add</button>
        </header>
    )
}
