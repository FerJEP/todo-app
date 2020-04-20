import React, { useState } from 'react'
import './App.scss'
import { AddTodoForm } from './components/AddTodoForm'
import { TodoList } from './components/TodoList'

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { name: 'tarea', complete: false },
  ])

  const handleNewTodo: TodoHandler = todo => {
    setTodos(prev => [...prev, todo])
  }

  const handleComplete: TodoHandler = (todo, index) => {
    let newTodos = [...todos]

    newTodos[index!] = { ...todo, complete: !todo.complete }
    setTodos(newTodos)
  }

  const handleDelete: TodoHandler = (todo, index) => {
    let newTodos = [...todos]

    if (typeof index === 'number') {
      newTodos.splice(index, 1)
    }
    setTodos(newTodos)
  }

  return (
    <div className="container mt-4 mb-4" style={{ maxWidth: 700 }}>
      <h2 className="text-center">Todos App</h2>
      <AddTodoForm onSubmit={handleNewTodo} />
      {todos[0] && (
        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      )}
    </div>
  )
}
