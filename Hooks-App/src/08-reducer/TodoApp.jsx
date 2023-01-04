import React from 'react'
import {useTodos} from '../hooks/useTodos'
import TodoList from './TodoList'
import AddNewTodo from './AddNewTodo'


const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
    

  return (
    <>

      <h1>TodoApp: {todosCount}, <small>pendientes: { pendingTodosCount }</small> </h1>
      <hr/>
      <div className='row'>
        <div className='col-12'> 
          <h1 class="fw-bold" id="atm">To Do List</h1>  
          <AddNewTodo
             onNewTodo={ handleNewTodo }  
          />
          <TodoList
            todos={ todos } 
            onDeleteTodo={ handleDeleteTodo } 
            onToggleTodo={ handleToggleTodo }
          />
        </div>
        
      </div>
      
    </>
  )
}

export default TodoApp