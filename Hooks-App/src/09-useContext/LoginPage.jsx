import React,{useContext} from 'react'
import { UserContext } from './context/UserContext'

const LoginPage = () => {

  const {user} = useContext(UserContext)

  return (
    <div>LoginPage</div>
  )
}

export default LoginPage