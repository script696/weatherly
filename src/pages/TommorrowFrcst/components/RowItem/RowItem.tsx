import React from "react";
import styled from "styled-components/macro";
import Flex from "../../../../shared/Flex/Flex";
import Paragraph from "../../../../shared/Paragraph/Paragraph";
import weatherIcons from "../../../../img/weatherIcons/weatherIcons";
import Wrapper from "../../../../shared/Wrapper/Wrapper";
import WeatherIcon from "../../../../shared/WeatherIcon/WeatherIcon";

const StyledRowItem = styled.div`
width: 100%;
`
const RowItem = () => {
  return (
    <StyledRowItem>
      <Flex justify='space-between' width='100%'>
        <Paragraph text="Mon" weight="500" size='18px' height='20px' color="#68798F"/>
        <Flex gap='5px'>
          <Wrapper width="30px" height="30px" margin="0 0 3px 0">
            <WeatherIcon src={weatherIcons[2]} />
          </Wrapper>
          <Paragraph text='Rainy' weight="500" size='18px' height='20px' color="#68798F"/>
        </Flex>
        <Flex gap='5px'>
        <Paragraph text='+20' weight="500" size='18px' height='20px' color='#fff'/>
        <Paragraph text='+14' weight="500" size='18px' height='20px' color="#68798F"/>
        </Flex>
      </Flex>
    </StyledRowItem>
  );
};

export default RowItem;
