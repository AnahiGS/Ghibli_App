import React from 'react'

const todoItem= () => {
  return (
    <>
      <li key={todoItem.id} className='list-group-item d-flex justify-content-between'>
        <span>Item</span>
        <button className='btn btn-danger'>Borrar</button>
      </li>
    </>
  )
}

export default todoItem