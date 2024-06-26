import TodoItem from './TodoItem';
import EditTodo from './EditTodo';

function TodoList({ todoList, deleteTodo, toggleTodo, toggleTodoEdit, editTodo, selectTodo }){
  //on vérifie que la liste contient au moins un élément
  // si la liste contient des élément alors on retourne des todo items
  //sinon on affiche un message qui indique que la todo ne contient rien
  return todoList.length ? (
    <ul>
      { todoList.map( todo => 
        todo.edit ? (
          <EditTodo todo={todo} key={todo.id} editTodo={ (content) => editTodo(todo.id, content)} cancelEditTodo={ () => toggleTodoEdit(todo.id)}/>
        ) : (
        <TodoItem 
          todo={ todo } 
          key={ todo.id } 
          deleteTodo={ () => deleteTodo(todo.id)} 
          toggleTodo={ () => toggleTodo(todo.id)}
          editTodo={ () => toggleTodoEdit(todo.id)}
          selectTodo={ () => selectTodo(todo.id)}
        /> 
      ))}
    </ul>
  ) : <p>Aucune todo pour le moment </p>;
}

export default TodoList;