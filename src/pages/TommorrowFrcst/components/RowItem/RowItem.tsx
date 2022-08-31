import React from "react";
import styled from "styled-components/macro";
import Flex from "../../../../shared/Flex/Flex";
import Paragraph from "../../../../shared/Paragraph/Paragraph";
import weatherIcons from "../../../../img/weatherIcons/weatherIcons";
import Wrapper from "../../../../shared/Wrapper/Wrapper";
import WeatherIcon from "../../../../shared/WeatherIcon/WeatherIcon";
import Degree from "../../../../shared/Degree/Degree";

const StyledRowItem = styled.article`
  width: 100%;
`;
const RowItem = ({ ...props }) => {
  return (
    <StyledRowItem>
      <Flex justify="space-between" width="100%" gap="15px">
        <Wrapper width='50px'>
        <Paragraph
          text={props.dayName}
          weight="500"
          size="15px"
          height="25px"
          color="#68798F"
        />
        </Wrapper>
        
        <Flex gap="5px" flex='1 1 auto' justify='flex-start'>
          <Wrapper width="30px" height="30px" margin="0 0 3px 0">
            <WeatherIcon src={weatherIcons[props.weathercode]} />
          </Wrapper>
          <Paragraph
            text={props.weatherCommon}
            weight="500"
            size="15px"
            height="15px"
            color="#68798F"
          />
        </Flex>
        <Flex gap="14px">
          <Degree>
            <Paragraph
              text={`+${props.maxTemp}`}
              weight="500"
              size="15px"
              height="15px"
              color="#fff"
            />
          </Degree>
          <Degree color="#68798F">
            <Paragraph
              text={`+${props.minTemp}`}
              weight="500"
              size="15px"
              height="15px"
              color="#68798F"
            />
          </Degree>
        </Flex>
      </Flex>
    </StyledRowItem>
  );
};

export default RowItem;
