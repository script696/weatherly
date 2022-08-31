import React from 'react'
import styled from "styled-components/macro";


const StyledMainWeatherInfoContainer= styled.div<any>`
margin: 0 0 27px 0;

`



const MainWeatherInfoContainer = ({...props}) => {
  return <StyledMainWeatherInfoContainer {...props}/>
}

export default MainWeatherInfoContainer