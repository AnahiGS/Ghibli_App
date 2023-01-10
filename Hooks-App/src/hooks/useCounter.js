import { useState } from "react"


//este es un custom hook usado para ejemplificar useState
const useCounter = (initialValue=10) =>{

  const [counter, setCounter] = useState ( initialValue) //si el usuario no da ningun valor entonces se inicializará con el valor que le demos
  
  const increment = ( value=1) => {
    setCounter((current)=>current + value);
  }

  const decrement = ( value =1) =>{
    setCounter((current)=>current - value);
  }

  const reset = () =>{
    setCounter(initialValue);
  }


  return {
    counter, 
    increment,
    decrement,
    reset
  }

}

export default useCounter