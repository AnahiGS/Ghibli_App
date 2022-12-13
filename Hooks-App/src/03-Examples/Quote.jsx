import React, { useLayoutEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react'

const Quote = ({author, quote}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize]=useState({width:0, height:0})

  useLayoutEffect(()=> {
    const{height, width}=pRef.current.getBoundingClientRect()
    setBoxSize({height,width})
  },[quote])

  return (
    <>
      <blockquote className='blockquote tex-end' style={{display: 'flex'}}>
        <p className='mb-1'>{quote}</p>
        <footer className='blockquote-footer'>{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}

export default Quote