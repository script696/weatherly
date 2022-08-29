import React from 'react'
import styled from 'styled-components'



const StyledInfoColumn = styled.div`
display: flex';
flex-direction: column;

`

const InfoColumn = ({...props}) => {
  return <InfoColumn {...props}/>
}

export default InfoColumn