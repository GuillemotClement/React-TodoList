import {useState } from "react"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import themeContext from "./context/theme";


function App() {

  const [todoList, setTodoList] = useState([]);

  function addTodo(content){
    // on créer la nouvelle todo
    const todo = {
      //on jaoute un id pour identifier cette todo
      //on utilise la méthode pour générer une chaine unique permettant d'identifier la todo
      id: crypto.randomUUID(),
      //on ajoute le contenu de la todo
      content,
      //par defaut, son etat est pas realiser car on vient se creer une nouvelle todo
      done: false,
      //on ajoute un mode edition
      edit: false,
      selected: false,
    }
    //on vient ajouter la nouvelle todo dans la liste
    setTodoList([...todoList, todo])
  }

  // nouvelle fonction qui permet de gérer la suppression
  //on viendras transmettre la fonction jusqu'a composant enfant TodoItem
  function deleteTodo(id){
    setTodoList(todoList.filter(todo => todo.id !== id));
  }

  function toggleTodo(id){
    setTodoList(todoList.map( todo => todo.id === id ? ({
      ...todo,
      done: !todo.done
    }) : todo));
  }

  function toggleTodoEdit(id){
    setTodoList(todoList.map( todo => todo.id === id ? ({
      ...todo,
      edit: !todo.edit
    }) : todo));
  }

  function editTodo(id, content){
    setTodoList(todoList.map( todo => todo.id === id ? ({
      ...todo,
      edit: false,
      content
    }) : todo ));
  }

  function selectTodo(id){
    setTodoList(todoList.map( todo => todo.id === id ? ({
      ...todo,
      selected: true
    }) : ({
      ...todo, 
      selected: false
    }) ));
  }

  const [theme, setTheme]= useState('primary');

  function handleChange(e){
    setTheme(e.target.value);
  }

  return (
    <themeContext.Provider value={theme}>
    <div className="flex row justify-center align-center p20">
      <div className="card container p20">
        <h1 className="mb20 flex row justify-center align-center">
          <span className="fill">Todo List</span>
          <select value={theme} onChange={ handleChange}>
            <option value="primary">Rouge</option>
            <option value="secondary">Bleu</option>
          </select>
        </h1>
          <AddTodo addTodo={addTodo}/>
          <TodoList 
            todoList={ todoList } 
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
