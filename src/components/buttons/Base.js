import styled from 'styled-components'
import { Button } from 'antd'

const Base = styled(Button)`
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

export default Base