import styled from 'styled-components'

const ViewContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: ${({top}) => top ? 'flex-start' : 'space-between'};
`
export default ViewContainer
