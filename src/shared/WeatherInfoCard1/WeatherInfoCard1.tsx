import React from "react";
import styled from "styled-components/macro";
import GlobalSvgSelector from "../../img/logo/GlobalSvgSelector";
import Flex from "../Flex/Flex";
import Paragraph from "../Paragraph/Paragraph";

const StyledWeatherInfoCard1 = styled.div<any>`
  width: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WeatherInfoCard1 = ({ ...props }) => {
  return (
    <StyledWeatherInfoCard1 {...props}>
      <Flex margin="0 0 5px 0">
        <GlobalSvgSelector id={props.icon} />
      </Flex>
      <Paragraph text={props.value} weight="500" size="13px" height="16px" />
      <Paragraph
        text={props.type}
        weight="500"
        size="12px"
        height="15px"
        color="#69B5FF"
      />
    </StyledWeatherInfoCard1>
  );
};

export default WeatherInfoCard1;
