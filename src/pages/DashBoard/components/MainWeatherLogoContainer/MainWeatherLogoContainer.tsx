import React from "react";
import styled from "styled-components/macro";

const StyledMainWeatherLogoContainer = styled.div<any>`
  height: 200px;
  margin: 0 0 5px 0;
`;

const MainWeatherLogoContainer = ({ ...props }) => {
  return <StyledMainWeatherLogoContainer {...props} />;
};

export default MainWeatherLogoContainer;
