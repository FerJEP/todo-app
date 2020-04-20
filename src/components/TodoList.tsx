import React, { useState } from 'react'
import { FaCheckCircle, FaRegCheckCircle } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'

interface TodoListProps {
  todos: Todo[]
  onComplete: TodoHandler
  onDelete: TodoHandler
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onDelete,
  onComplete,
}) => {
  useState(() => {
    console.log(todos)
  })
  return (
    <div className="card mt-3">
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {todo.complete ? (
              <FaCheckCircle
                className="text-success"
                onClick={() => onComplete(todo, index)}
              />
            ) : (
              <FaRegCheckCircle
                className="text-success"
                onClick={() => onComplete(todo, index)}
              />
            )}
            <span className={todo.complete ? 'completed' : ''}>
              {todo.name}
            </span>
            <TiDelete
              className="text-danger delete-icon"
              onClick={() => onDelete(todo, index)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
