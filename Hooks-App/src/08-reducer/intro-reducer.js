//se usa cuando tenemos un objeto complejo y queremos hacerle algunos cambios

const initialState = [{
  id:1,
  todo:'Recolectar la piedra del Alma',
  done: false,
}];

const todoReducer = (state=initialState, action) => {

  return state;
}

let todos = todoReducer();

const newTodo={
  
}