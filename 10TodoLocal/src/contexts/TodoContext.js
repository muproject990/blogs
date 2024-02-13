import { createContext, useContext } from 'react'

export const TodoContext = createContext({
  todo: [
    {
      id: 1,
      todo: 'Todo Msg',
      completed: false
    }
  ], //Property
  addTodo: todo => {}, //Methods
  updateTodo: (id, todo) => {},
  deleteTodo: id => {},
  toggleTodo: id => {}
}) //Used for small projects for bigger projects we use redux

export const useTodo = () => {
  return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
