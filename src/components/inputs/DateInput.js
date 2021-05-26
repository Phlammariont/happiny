import React from 'react'
import Input from './RegularInput'

const DateInput = ({ value, setValue, label }) => {
  return <Input type="date" value={value} onChange={evt => setValue(evt.target.value)} label={label} />
}

export default DateInput
