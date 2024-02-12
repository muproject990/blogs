import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState([])
  
  // ?AddTodos functions
  const addTodos = (todo) => {
    setTodos(todo => [{ id: Date.now(), ...todo }, ...prev])//! ??? I am confused A LOT
  }


  // ?  updateTodo functions update Todo
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(prevTodo => (prevTodo.id === id ? todo : prevTodo)))
    
  }
  
  // ? Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) =>prev.filter(todo=>(todo.id!=id)
    ))
  }


  // const toggleComlete
  const toggleComlete = (id) => {
    setTodos(prev=>prev.map(prevTodo=>prevTodo.id===id? {...prevTodo,completed:!prevTodo.completed
    } :prevTodo))
    
  }


  return (
    <TodoProvider value={{ todos, addTodo, updataTodo, deleteTodo, toggleTodo }}>
    //!Destructurin in provider to give value from global const context = useContext(contextValue)
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
      </div>
      </TodoProvider>
  )
}

export default App
