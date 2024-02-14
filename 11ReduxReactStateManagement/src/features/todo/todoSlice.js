import { createSlice, nanoid } from '@reduxjs/toolkit'

// I take obj as multiple thing can comes under objects

// const initialState = {
//   todos: [
//     {
//       id: 1,
//       text: 'Hello world'
//     }
//   ]
// }

export const todoSlice = createSlice({
  // takes  name as property carefully as thisname will appear in redux toolkit in chrome extensions while monitering it
  name: 'todo', //?P1
  initialState: {
    //?P2

    todos: [
      {
        id: 1,
        text: 'Hello world'
      }
    ]
  },
  reducers: {
    //?P3

    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }

      state.todos.push(todo)
    },

    // ***  state give instantaneous situataion of an todos like it having 1 todo,2 todos and 10 todos   --Hand to hand Suitaion ***
    //Todo ***  Values is privided by action like id and other input provided by  user   ***

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(val => val.id !== action.payload)
    },
    update: (state, action) => {
      state.todos = state.todos.find(todo =>
        todo.id === action.payload
          ? [...state.todos, { text: action.payload }]
          : state.todos

      )
    }
  }
})

export const { addTodo, removeTodo,update } = todoSlice.actions

export default todoSlice.reducer
