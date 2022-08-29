import React from 'react'
import styled from 'styled-components'
import Span from '../../../../shared/Span/Span'


const StyledTeampMinMax  = styled.p`
font-size: 64px;
font-weight: 900;
line-height: 79px;
`

const TeampMinMax = ({...props}) => {
  return <StyledTeampMinMax {...props}>{props.max}
    <Span weight="600" size='35px' height='30px' color='#73CAFC' text={props.min}/>
  </StyledTeampMinMax>
}

export default TeampMinMax