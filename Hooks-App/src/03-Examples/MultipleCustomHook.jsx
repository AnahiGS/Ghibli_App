import React from 'react'
import useCounter from '../hooks/useCounter'
import useFetch from '../hooks/useFetch'

const MultipleCustomHook = () => {

  const {counter, increment} =useCounter(1)

  const{ data, isLoading, hasError}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { author, quote} = !!data && data[0]; //si lo primero es true, entonces lo siguiente
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr/>
      {
        isLoading
          ?(
            <div className='alert alert-info text-center'>
              Loading...
            </div>  
          ):(
              <blockquote className='blockquote tex-end'>
                <p className='mb-1'>{quote}</p>
                <footer className='blockquote-footer'>{author}</footer>
              </blockquote>
          )
      }

      <button className='btn btn-primary' 
      disabled={isLoading}
      onClick={()=>increment()}>
        Next quote
      </button>
    </>
  )
}

export default MultipleCustomHook