import { useState } from "react";
import Button from "./Button";

//on récupére la todo du composant parent
function AddTodo({ addTodo }){
  //on vient récupérer les données saisie
  const [value, setValue] = useState('');

  function handleChange(e){
    //on récupère la saisie de l'input
    const inputValue = e.target.value;
    //une fois la valeur récupérer,on peut set la valeur
    setValue(inputValue);
  }

  //on jaoute la fonction qui permet d'ajouter la nouvelle todo au clic sur le bouton
  function handleClick(){
    //on vérifie qu'il y a bien une valeur dans value
    if(value.length){
      addTodo(value);
      //une fois la valeur set, on remets à 0 le input
      setValue("");
    } 
  }

  //ajoute la fonctionnalité pour appuie sur enter ajoute la todo
  //il faut recup l'event pour indiquer la touche a surveiller
  function handleKeyDownEnter(e){
    //si on appuie sur 'Enter', alors on ajoute la nouvelle todo
    if(e.code === 'Enter' && value.length){
      addTodo(value);
      setValue("");
    }
  }

  return (
    <div className="flex row justify-center align-center mb20">
      <input type="text" placeholder="Ajouter une todo" className="mr15 fill" value={ value } onChange={ handleChange } onKeyDown={handleKeyDownEnter}/>
      <Button text="Ajouter" onClick={handleClick}/>
    </div>
  )
}

export default AddTodo;