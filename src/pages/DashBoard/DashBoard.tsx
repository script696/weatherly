import React from "react";
import styled from "styled-components/macro";
import GlobalSvgSelector from "../../img/logo/GlobalSvgSelector";
import Button from "../../shared/Button/Button";
import Flex from "../../shared/Flex/Flex";
import Wrapper from "../../shared/Wrapper/Wrapper";
import Bottom from "./components/Bottom/Bottom";
import BottomHeader from "./components/BottomHeader/BottomHeader";
import Screen from "./components/Screen/Screen";
import Title from "../../shared/Title/Title";
import TopMenuContainer from "./components/TopMenuContainer/TopMenuContainer";
import Paragraph from "../../shared/Paragraph/Paragraph";
import UpdateInfo from "./components/UpdateInfo/UpdateInfo";
import UpdateIndicator from "./components/UpdateIndicator/UpdateIndicator";
import UpdatedInfoMsg from "./components/UpdatedInfoMsg/UpdatedInfoMsg";
import UpdateInfoContainer from "./components/UpdateInfoContainer/UpdateInfoContainer";
import MainWeatherLogoContainer from "./components/MainWeatherLogoContainer/MainWeatherLogoContainer";
import MainWeatherInfoContainer from "./components/MainWeatherInfoContainer/MainWeatherInfoContainer";
import WeatherInfoCard1 from "../../shared/WeatherInfoCard1/WeatherInfoCard1";
import BottomSlider from "./components/BottomSlider/BottomSlider";
import Swiper1 from "./components/Swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const StyledDashBoard = styled.div`
  position: relative;
  z-index: 1;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 65px;
  overflow: hidden;
`;

const DashBoard = () => {
  return (
    <StyledDashBoard>
      <Screen>
        <TopMenuContainer>
          <Flex>
            <Button width="35px" height="35px">
              <GlobalSvgSelector id="menuBtnCircle" />
            </Button>
            <Wrapper>
              <Flex gap="15px">
                <GlobalSvgSelector id="location" />
                <Paragraph text="Karad" weight="700" size="22" height="27px" />
              </Flex>
            </Wrapper>
            <Flex width="35px" height="35px">
              <Button width="35px" height="35px">
                <GlobalSvgSelector id="menuBtnBlank" />
              </Button>
            </Flex>
          </Flex>
        </TopMenuContainer>
        <UpdateInfoContainer>
          <Flex>
            <UpdateInfo>
              <Flex gap="20px">
                <UpdateIndicator />
                <UpdatedInfoMsg value="10" />
              </Flex>
            </UpdateInfo>
          </Flex>
        </UpdateInfoContainer>
        <MainWeatherLogoContainer>
          <Flex height="100%">
            <Wrapper width="200px" height="200px">
              <GlobalSvgSelector id="sunny" />
            </Wrapper>
          </Flex>
        </MainWeatherLogoContainer>
        <MainWeatherInfoContainer>
          <Flex direction="column" margin="auto" width="50%">
            <Paragraph text="22" weight="700" size="116px" height="143px" />
            <Paragraph
              text="Thunderstorm"
              weight="800"
              size="22px"
              height="27px"
              margin="0 0 3px 0"
            />
            <Paragraph
              text="Today, 10 August"
              weight="500"
              size="12px"
              height="15px"
              color="#69B5FF"
            />
          </Flex>
        </MainWeatherInfoContainer>
        <MainWeatherInfoContainer>
          <Flex gap="53px">
            <WeatherInfoCard1 icon="windy" value="12kmph" type="Wind" />
            <WeatherInfoCard1 icon="windy" value="12kmph" type="Wind" />
            <WeatherInfoCard1 icon="windy" value="12kmph" type="Wind" />
          </Flex>
        </MainWeatherInfoContainer>
      </Screen>
      <Bottom>
        <BottomHeader>
          <Flex justify="space-between" width="100%">
            <Title size="18px" height="22px" text="Today" weight="800" />
            <Button>
              <Paragraph
                text="7 days"
                color="#687B92"
                size="12px"
                height="15px"
              />
            </Button>
          </Flex>
        </BottomHeader>
        <BottomSlider>
         <Swiper1/>
        </BottomSlider>
      </Bottom>
    </StyledDashBoard>
  );
};

export default DashBoard;
