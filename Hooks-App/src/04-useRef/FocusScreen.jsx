import React, {useRef} from 'react'

const FocusScreen = () => {
  const inputRef = useRef()

  const onClick = () => {
    inputRef.current.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr/>
      <input type='text' placeholder='OIngrese su nombre' className="form-control"/>
    
      <button className='btn btn-primary mt-2'
      onClick={onClick}>
        Set Focus
      </button>
    
    </>
  )
}

export default FocusScreen