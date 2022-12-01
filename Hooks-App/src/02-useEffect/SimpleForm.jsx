import React from 'react'
import { useState } from 'react'

const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username:'strider',
    email: 'anahi@google.com'
  })

  const {username, email} =formState()

  return (
    <>
      <h1>Formulario Simple</h1><hr/>

      <input
        type='text'
        className='form-control'
        placeholder='username'
        name='username'
        value={username}
      />

<input
        type='email'
        className='form-control mt-2'
        placeholder='anahi@google.com'
        name='email'
        value={email}
      />
      
      

    
    </>
  )
}

export default SimpleForm