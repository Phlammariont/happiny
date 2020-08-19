import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { UserActionCreator } from '../redux/actions'
import { useHistory } from 'react-router-dom'
import { isEmpty } from 'ramda'

const DevBarContainner = styled.div`
  position: fixed;
  top: 10px;
  left: 10px;
  
  h1 {
    font-size: 1.2rem
  }
`
const isDevEnv = () => process.env.NODE_ENV !== 'production'
const getAutoNavigate = () => process.env.REACT_APP_AUTO_NAVIGATE
const isEnabledAutolLogin = () => process.env.REACT_APP_AUTO_LOG_IN === 'true'
export const DevBar = () => {
  const dispatch = useDispatch()
  const [isOpen, setOpen] = useState(false)
  const [autoLogin, setAutoLogin] = useState(isEnabledAutolLogin())
  const [autoNavigate, setAutoNavigate] = useState(getAutoNavigate())
  const history = useHistory()

  useEffect(() => {
    if(autoLogin) dispatch(UserActionCreator.load({ name: 'Joi Nurse', email: 'joy@chansey.com' }))
    if(autoNavigate) history.push(autoNavigate)
  })

  const handleCommand = (evt) => {
    if ( evt.key === 'd' && evt.ctrlKey ) setOpen(!isOpen)
  }
  if (!isDevEnv()) return null

  document.addEventListener("keydown", handleCommand);
  if (!isOpen) return (
    <DevBarContainner onClick={() => setOpen(!isOpen)}>></DevBarContainner>
  )

  return (
    <DevBarContainner>
      <h1>Development: CTR + D for options.</h1>
      <div><input type="checkbox" onClick={() => setAutoLogin(!autoLogin)} checked={autoLogin}/>Auto Log In</div>
      <div>
        <input type="checkbox" checked={!isEmpty(autoNavigate)}/>
        Auto Navigate to:
        <DevInput onChange={evt => setAutoNavigate(evt.target.value)} value={autoNavigate} type="text"/>
      </div>
    </DevBarContainner>
  )
}

const DevInput = styled.input`
  background: transparent;
`
