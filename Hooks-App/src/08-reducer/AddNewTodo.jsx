import React from 'react'

const AddNewTodo = () => {
  return (
    <form>
      <input
        type="text"
        placeholder='¿Qué hay que hacer?'
        className='form-control'
      />
      <button
        type='submit'
        className='btn btn-outline-primary mt-1'
      >Agregar</button>
    </form>
  )
}

export default AddNewTodo