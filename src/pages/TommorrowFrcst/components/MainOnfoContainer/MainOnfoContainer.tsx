import React from 'react'
import styled from 'styled-components'


const StyledMainInfoContainer = styled.div<any>`
`



const MainInfoContainer = ({...props}) => {
  return <StyledMainInfoContainer {...props}/>
}

export default MainInfoContainer