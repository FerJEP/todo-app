interface Todo {
  name: string
  complete: boolean
}

type onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
type TodoHandler = (todo: Todo, id?: number) => void
