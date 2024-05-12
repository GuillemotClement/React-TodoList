import { useState } from "react";
import Button from "./Button";

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
      <Button onClick={handleClick} text="Editer" className="mr15"/>
      <Button onClick={cancelEditTodo} text="Annuler" className="mr15"/>
    </div>
  )
}

export default EditTodo;