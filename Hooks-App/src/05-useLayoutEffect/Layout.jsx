import React from 'react'
import LoadingQuote from '../03-Examples/LoadingQuote';
import Quote from '../03-Examples/Quote';
import useCounter from '../hooks/useCounter';
import useFetch from '../hooks/useFetch';

const Layout = () => {
  const {counter, increment} =useCounter(1)

  const{ data, isLoading, hasError}= useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  const { author, quote} = !!data && data[0]; //si lo primero es true, entonces lo siguiente
  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr/>
      {
        isLoading
          ? <LoadingQuote/>
          : <Quote author={author} quote={quote}/>   
      }

      <button className='btn btn-primary' 
      disabled={isLoading}
      onClick={()=>increment()}>
        Next quote
      </button>
    </>
  )
}
export default Layout