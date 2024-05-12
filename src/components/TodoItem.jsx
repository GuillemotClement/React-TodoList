function TodoItem({ todo, deleteTodo }){
  return (
    <li className="flex row justify-center align-center p10 mb10">
      <span className="fill mr15">{ todo.content }</span>
      <button className="btn btn-primary mr15">Valider</button>
      <button className="btn btn-primary mr15">Modifier</button>
      <button onClick={deleteTodo} className="btn btn-secondary mr15">Supprimer</button>
    </li>
  )
}

export default TodoItem;