import React, { useState } from 'react'

interface AddTodoFormProps {
  onSubmit: (newTodo: Todo) => void
}

type onChange = (event: React.ChangeEvent<HTMLInputElement>) => void

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ onSubmit }) => {
  const [newTodo, setNewTodo] = useState<string>('')

  const handleChange: onChange = e => {
    setNewTodo(e.target.value)
  }

  const handleSubmit: onClick = e => {
    e.preventDefault()
    onSubmit({ name: newTodo, complete: false })
    setNewTodo('')
  }

  return (
    <form className="card">
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control text-center"
            placeholder="Add todo"
            value={newTodo}
            onChange={handleChange}
          />
        </div>
        <button className="btn btn-primary btn-block" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </form>
  )
}
