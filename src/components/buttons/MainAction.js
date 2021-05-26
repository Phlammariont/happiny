import React from 'react'
import { Button } from 'antd'

import styled from 'styled-components'

const StyledButton = styled(Button)`
  width: 80%;
  margin: 1% 10%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  height: 3rem;
  font-size: 1.5rem;
  
  &:hover, &:focus {
    color: black;
    background: var(--accent-color);
    border-color: var(--accent-color);
  }
`

export default (props) => <StyledButton type="primary" {...props} />
