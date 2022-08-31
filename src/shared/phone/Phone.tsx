import React from 'react'
import styled from "styled-components/macro";


const StyledPhone = styled.div<any>`
position: relative;
z-index: 1;
width: 375px;
height: 812px;
display: flex;
background: #000918;
border-radius: 71px;
transform: ${({transform}) => `scale(calc(0.5 + ${transform}))` || 'scale(1)'};
`


const Phone = ({...props}) => {


  return (
    <StyledPhone {...props}></StyledPhone>
  )
}

export default Phone