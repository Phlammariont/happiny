import { Button } from 'antd'
import styled from 'styled-components'

const StyledButton = styled(Button)`
  width: 80%;
  height: 3rem;
  margin: 1% 10%;
  background-color: white;
  color: var(--blue-color);
  font-size: 1.5rem;
  border: 2px solid var(--blue-color);
  
  &:hover, &:focus {
    color: var(--blue-color);
    background: var(--accent-color);
    border-color: var(--accent-color);
  }
`

export default StyledButton
