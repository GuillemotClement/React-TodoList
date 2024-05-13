import {useReducer} from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import themeContext from "./context/theme";
import todoReducer from "./reducers/todoReducer";


function App() {

  const [state, dispatch] = useReducer(todoReducer, {
    theme: 'primary',
    todoList: []
  });

  function addTodo(content){
    dispatch({
      type: 'ADD_TODO',
      content
    });
  }
  
  function deleteTodo(id){
    dispatch({
      type: 'DELETE_TODO',
      id
    });
  }

  function toggleTodo(id){
    dispatch({
      type: 'TOGGLE_TODO',
      id
    });
  }

  function toggleTodoEdit(id){
    dispatch({
      type: 'TOGGLE_EDIT_TODO',
      id
    });
  }

  function editTodo(id, content){
    dispatch({
      type: 'EDIT_TODO',
      id,
      content
    });
  }

  function selectTodo(id){
    dispatch({
      type: 'SELECT_TODO',
      id
    });
  }

  function handleChange(e){
    dispatch({
      type: 'SET_THEME',
      theme: e.target.value
    });
  }

  return (
    <themeContext.Provider value={state.theme}>
    <div className="flex row justify-center align-center p20">
      <div className="card container p20">
        <h1 className="mb20 flex row justify-center align-center">
          <span className="fill">Todo List</span>
          <select value={state.theme} onChange={ handleChange}>
            <option value="primary">Rouge</option>
            <option value="secondary">Bleu</option>
          </select>
        </h1>
          <AddTodo addTodo={addTodo}/>
          <TodoList 
            todoList={ state.todoList } 
            deleteTodo={deleteTodo} 
            toggleTodo={toggleTodo} 
            toggleTodoEdit={toggleTodoEdit}
            editTodo={editTodo}
            selectTodo={selectTodo}
            />
      </div>
    </div>
    </themeContext.Provider>
  )
}

export default App
