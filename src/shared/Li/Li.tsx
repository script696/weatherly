import React from 'react'
import styled from "styled-components/macro";

const StyledLi = styled.li<any>`
padding: 0;
`


const Li = ({...props}) => {
  return <StyledLi {...props}/>
}

export default Li