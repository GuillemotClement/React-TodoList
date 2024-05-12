function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectTodo }){
  return (
    <li className={`flex row justify-center align-center p10 mb10 ${todo.selected ? 'selected' : ''}`} onClick={selectTodo}>
      <span className="fill mr15">{ todo.content } {todo.done && '(✓)'}</span>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo(); 
        }} 
        className="btn btn-primary mr15">
        Valider
      </button>
      <button onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
        className="btn btn-primary mr15">Modifier
      </button>
      <button onClick={(e)=>{
          e.stopPropagation();
          deleteTodo();
        }} className="btn btn-secondary mr15">Supprimer
      </button>
    </li>
  )
}

export default TodoItem;