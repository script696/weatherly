import React from 'react'
import styled from "styled-components/macro";


const StyledUpdateInfo = styled.div<any>`
height: 23px;
padding: 5px 8px;
border: 1px solid #C3E7FB;
border-radius: 20px;
`


const UpdateInfo = ({...props}) => {
  return <StyledUpdateInfo {...props}/>
}

export default UpdateInfo