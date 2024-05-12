import TodoItem from './TodoItem';

function TodoList({ todoList, deleteTodo, toggleTodo }){
  //on vérifie que la liste contient au moins un élément
  // si la liste contient des élément alors on retourne des todo items
  //sinon on affiche un message qui indique que la todo ne contient rien
  return todoList.length ? (
    <ul>
      { todoList.map( todo => <TodoItem todo={ todo } key={ todo.id } deleteTodo={ () => deleteTodo(todo.id)} toggleTodo={ () => toggleTodo(todo.id)}/> ) }
    </ul>
  ) : <p>Aucune todo pour le moment </p>;
}

export default TodoList;