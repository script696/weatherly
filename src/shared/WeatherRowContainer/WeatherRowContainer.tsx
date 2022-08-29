import React from "react";
import styled from "styled-components/macro";

const StyledWeatherRowContainer = styled.div<any>`
  margin: 0 0 27px 0;
`;

const WeatherRowContainer = ({ ...props }) => {
  return <StyledWeatherRowContainer {...props} />;
};

export default WeatherRowContainer;
