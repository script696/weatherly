import React from 'react'
import styled from "styled-components/macro";

const StyledFlexChild = styled.div<any>`
flex: ${({ flex }) => flex || "0 0 auto"};

`



const FlexChild = ({...props}) => {
  return (
    <FlexChild {...props}/>
  )
}

export default FlexChild