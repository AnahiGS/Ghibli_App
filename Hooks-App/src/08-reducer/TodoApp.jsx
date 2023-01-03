import React, {useReducer} from 'react'
import { todoReducer } from './todoReducer'
import todoItem from './Item'
  
const initialState = [
  (
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  ),
  (
    id: new Date().getTime()*3,
    description: 'Recolectar la piedra del alma',
    done: false,
  )
]

const TodoApp = () => {

 

  const [todo, dispatch] =useReducer(todoReducer, initialState)

  return (
    <>

      <h1>TodoApp</h1>
      <hr/>
      <div className='row'>
        <div className='col-12'> 
          <h1 class="fw-bold" id="atm">To Do List</h1>  
          <ul className='List-group'>
            {
              todos.map( todo =>(
                <todoItem/>
              ))
            }
          </ul>
        </div>
        
      </div>
      
    </>
  )
}

export default TodoApp