import React from 'react'
import {Link} from 'react-router-dom'
import {SecondActionButton} from '../../components'

const SignUpButton = () => {
  return (
    <Link to='/sign-up'>
      <SecondActionButton onClick={() => console.log('sign in')}>
        Sign Up
      </SecondActionButton>
    </Link>
  )
}

const  SignIn = () => {
  return (
    <div>
      <span>hello sign in</span>
      <div><SignUpButton/></div>
    </div>
  )
}

export default SignIn