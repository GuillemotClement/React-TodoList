import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"


function App() {
  return (
    <div className="flex row justify-center align-center p20">
      <div className="card container p20">
        <h1 className="mb20">Todo List</h1>
          <AddTodo />
          <TodoList />
      </div>
    </div>
  )
}

export default App
