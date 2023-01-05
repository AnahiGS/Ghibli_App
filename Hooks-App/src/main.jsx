import React from 'react'
import ReactDOM from 'react-dom/client'
import SimpleForm from './02-useEffect/SimpleForm'
import HooksApp from './HooksApp'
import { BrowserRouter } from "react-router-dom";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //high order component, recibe otros componemtes dentro de él
  <BrowserRouter> 
  
    <React.StrictMode>
      
      <SimpleForm />
    </React.StrictMode>
  </BrowserRouter>
  )
