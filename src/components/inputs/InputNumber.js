import React from 'react'
import Input from './RegularInput'

const InputNumber = ({value, ...props}) => {
  return <Input
    error={isNaN(value)}
    errorMessage='El valor debe ser un numero'
    value={value} {...props}/>
}

export default InputNumber