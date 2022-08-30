import styled from "styled-components/macro";
import GlobalSvgSelector from "../../img/logo/GlobalSvgSelector";
import Button from "../../shared/Button/Button";
import Flex from "../../shared/Flex/Flex";
import Wrapper from "../../shared/Wrapper/Wrapper";
import Bottom from "../../shared/Bottom/Bottom";
import Screen from "../../shared/Screen/Screen";
import Title from "../../shared/Title/Title";
import TopMenuContainer from "../../shared/TopMenuContainer/TopMenuContainer";
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
import weatherIcons from "../../img/weatherIcons/weatherIcons";
import { useAppSelector } from "../../hooks/hooks";
import WeatherIcon from "../../shared/WeatherIcon/WeatherIcon";
import WeatherRowContainer from "../../shared/WeatherRowContainer/WeatherRowContainer";
import BottomNavigation from "../../shared/BottomNavigation/BottomNavigation";
import { useHistory } from "react-router-dom";

const StyledDashBoard = styled.section`
  position: relative;
  z-index: 1;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 65px;
  overflow: hidden;
`;

const DashBoard = () => {
  const {
    currentDate: { currentDay, currentMonth },
    currentWeather: {
      temperature,
      windspeed,
      winddirection,
      weathercode,
      humidity,
      weatherTextStatus,
    },
  } = useAppSelector((state) => state.weather);
  const history = useHistory();

  return (
    <StyledDashBoard>
      <Screen height="613px">
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
              <WeatherIcon src={weatherIcons[weathercode]} />
            </Wrapper>
          </Flex>
        </MainWeatherLogoContainer>
        <MainWeatherInfoContainer>
          <Flex direction="column" margin="auto" width="50%">
            <Paragraph
              text={Math.round(temperature)}
              weight="700"
              size="116px"
              height="143px"
            />
            <Paragraph
              text={weatherTextStatus}
              weight="800"
              size="22px"
              height="27px"
              margin="0 0 3px 0"
            />
            <Paragraph
              text={`Today, ${currentDay} ${currentMonth}`}
              weight="500"
              size="12px"
              height="15px"
              color="#69B5FF"
            />
          </Flex>
        </MainWeatherInfoContainer>
        <WeatherRowContainer>
          <Flex gap="53px">
            <WeatherInfoCard1
              icon="windy"
              value={`${windspeed}kmh`}
              type="Wind"
            />
            <WeatherInfoCard1
              icon="humidity"
              value={`${humidity}%`}
              type="Humidity"
            />
            <WeatherInfoCard1
              icon="direction"
              value={`${winddirection}deg`}
              type="Direction"
            />
          </Flex>
        </WeatherRowContainer>
      </Screen>
      <Bottom>
        <BottomNavigation>
          <Flex justify="space-between" width="100%">
            <Title size="18px" height="22px" text="Today" weight="800" />
            <Button
              onClick={() => history.push("/tomorrow")}
              position="relative"
              z="100"
              height="25px"
              width="50px"
            >
              <Paragraph text="7 days" color="#fff" size="12px" height="15px" />
              <Wrapper
                position="absolute"
                top="50%"
                right="-10px"
                width="15px"
                height="15px"
                transform='translate(0, -50%)'
              >
                <GlobalSvgSelector id="arrowRight" />
              </Wrapper>
            </Button>
          </Flex>
        </BottomNavigation>
        <BottomSlider>
          <Swiper1 />
        </BottomSlider>
      </Bottom>
    </StyledDashBoard>
  );
};

export default DashBoard;
