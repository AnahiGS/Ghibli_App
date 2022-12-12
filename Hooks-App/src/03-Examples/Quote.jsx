import React from 'react'

const Quote = ({author, quote}) => {
  return (
    <blockquote className='blockquote tex-end'>
      <p className='mb-1'>{quote}</p>
      <footer className='blockquote-footer'>{author}</footer>
    </blockquote>
  )
}

export default Quote