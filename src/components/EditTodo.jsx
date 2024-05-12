import { useState } from "react";

function EditTodo({ todo, editTodo, cancelEditTodo }){
  //on récupère la valeur de la todo
  const [value, setValue] = useState(todo.content);

  function handleChange(e){
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleClick(){
    if(value.length){
      editTodo(value);
      setValue("");
    } 
  }

  function handleKeyDownEnter(e){
    if(e.code === 'Enter' && value.length){
      editTodo(value);
      setValue("");
    }
  }

  return (
    <div className="flex row justify-center align-center mb20">
      <input type="text" placeholder="Ajouter une todo" className="mr15 fill" value={ value } onChange={ handleChange } onKeyDown={handleKeyDownEnter}/>
      <button onClick={handleClick} className="btn btn-primary mr15">Editer</button>
      <button onClick={cancelEditTodo} className="btn btn-secondary">Annuler</button>
    </div>
  )
}

export default EditTodo;