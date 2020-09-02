import styled from 'styled-components'

const ViewContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ViewContainerTop = styled(ViewContainer)`
  justify-content: flex-start; 
`

export default ViewContainer
