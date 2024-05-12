import Button from "./Button";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectTodo }){
  return (
    <li className={`flex row justify-center align-center p10 mb10 ${todo.selected ? 'selected' : ''}`} onClick={selectTodo}>
      <span className="fill mr15">{ todo.content } {todo.done && '(✓)'}</span>
      <Button 
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo(); 
        }}
        text="Valider"
        className="mr15"
      />
      <Button 
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
        text="Modifier"
        className="mr15"
      />
      <Button 
        onClick={(e)=>{
          e.stopPropagation();
          deleteTodo();
        }}
        text='Supprimer'
        
      />
    </li>
  )
}

export default TodoItem;