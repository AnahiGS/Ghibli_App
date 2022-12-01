import React from 'react'

export const CounterApp = () => {
const [state, setCounter] = useState({
  counter1: 10,
  counter2: 20,
  counter3: 30
})

  const {counter1, counter2, counter3 } =state;

  return (
    <>
      <h1>Counter1: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr /><button className='btn' onClick={() => setCounter({...state, counter1: counter1 + 1})}>+1</button> 
      {/* con el spread operatir hace que todos los demás valores se queden como están, sólo el counter1 cambia porque se le está asignando un nuevo valor */}
    </>
  )
}
fce