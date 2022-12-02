import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Message from './Message';

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username:'strider',
    email: 'anahi@google.com'
  });

  const {username, email} =formState;

  const onInputChange = ({target}) =>{
    const{name, value} =target
    setFormState({
      ...formState, 
      [name] : value //valores computados de los objetos
    })
  }
 //primer argumento del useEffect: callback la función que se va a ejecutar cada vez que useEffect se disparé
  useEffect( () =>{

  },[]); // las dependencias (o el segundo argumento) con las condiciones por las cuales quiero que el useEffect se vuelva a disparar. Si ponemos un arreglo vacío significa que solo queremos que se dispare una vez


  return (
    <>
      <h1>Formulario Simple</h1><hr/>

      <input
        type='text'
        className='form-control'
        placeholder='username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input
        type='email'
        className='form-control mt-2'
        placeholder='anahi@google.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />
      
      
    {
      (username === 'strider') && <Message /> //si username es igual a eso, entonces se va a mostar message
    }
    
    </>
  )
}

export default SimpleForm