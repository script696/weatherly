import React from 'react'
import styled from "styled-components/macro";


const StyledWeatherIcon = styled.img<any>`
display: block;
height: 100%;
width: 100%;
`


const WeatherIcon = ({...props}) => {
  return (
    <StyledWeatherIcon src={props.img} {...props}/>
  )
}

export default WeatherIcon