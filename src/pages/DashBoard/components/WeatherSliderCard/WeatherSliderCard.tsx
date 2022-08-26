import React from "react";
import styled from "styled-components/macro";
import GlobalSvgSelector from "../../../../img/logo/GlobalSvgSelector";
import Paragraph from "../../../../shared/Paragraph/Paragraph";
import Wrapper from "../../../../shared/Wrapper/Wrapper";

const StyledWeatherSliderCard = styled.article<any>`
  width: 66px;
  height: 95px;
  border: 1px solid #272727;
  border-radius: 27px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WeatherSliderCard = ({ ...props }) => {
  return (
    <StyledWeatherSliderCard>
      <Paragraph text="23" weight="700" size="16px" height="20px" margin="0 0 5px 0"/>
      <Wrapper width="30px" height="30px" margin="0 0 3px 0">
        <GlobalSvgSelector id="sunny" />
      </Wrapper>
      <Paragraph
        text="10:00"
        weight="500"
        size="12px"
        height="15px"
        color="#687B92"
      />
    </StyledWeatherSliderCard>
  );
};

export default WeatherSliderCard;
