import styled from "styled-components";
import { useAppSelector } from "../../hooks/hooks";
import GlobalSvgSelector from "../../img/logo/GlobalSvgSelector";
import weatherIcons from "../../img/weatherIcons/weatherIcons";
import Bottom from "../../shared/Bottom/Bottom";
import Button from "../../shared/Button/Button";
import Flex from "../../shared/Flex/Flex";
import Paragraph from "../../shared/Paragraph/Paragraph";
import Screen from "../../shared/Screen/Screen";
import Title from "../../shared/Title/Title";
import TopMenuContainer from "../../shared/TopMenuContainer/TopMenuContainer";
import WeatherIcon from "../../shared/WeatherIcon/WeatherIcon";
import WeatherInfoCard1 from "../../shared/WeatherInfoCard1/WeatherInfoCard1";
import WeatherRowContainer from "../../shared/WeatherRowContainer/WeatherRowContainer";
import Wrapper from "../../shared/Wrapper/Wrapper";
import MainInfoContainer from "./components/MainOnfoContainer/MainOnfoContainer";
import TeampMinMax from "./components/TeampMinMax/TeampMinMax";
import WeeklyForecast from "./components/WeeklyForecast/WeeklyForecast";
import BottomNavigation from "../../shared/BottomNavigation/BottomNavigation";
import { Link, useHistory } from "react-router-dom";
import LongMenu from "../../shared/DropDownMenu/DropDownMenu";

const StyledTommorrowFrcst = styled.section`
  position: relative;
  z-index: 1;
  margin: auto;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  border-radius: 65px;
  overflow: hidden;
`;

const TommorrowFrcst = ({ ...props }) => {
  const {
    tomorrowForecast: {
      precipitationSum,
      temperatureMax,
      temperatureMin,
      weathercode,
      weatherCommon,
      winddirection,
      windspeedMax,
    },
  } = useAppSelector((state) => state.weather);
  const history = useHistory();

  return (
    <StyledTommorrowFrcst {...props}>
      <Screen height="357px">
        <TopMenuContainer>
          <Flex>
            <Button width="35px" height="35px"></Button>
            <Wrapper>
              <Flex gap="15px">
                <GlobalSvgSelector id="calendar" />
                <Paragraph text="7 days" weight="700" size="22" height="27px" />
              </Flex>
            </Wrapper>
            <Flex width="35px" height="35px">
              <LongMenu />
            </Flex>
          </Flex>
        </TopMenuContainer>
        <MainInfoContainer>
          <Flex>
            <Wrapper width="50%" height="166px">
              <WeatherIcon src={weatherIcons[weathercode]} />
            </Wrapper>
            <Flex direction="column" width="50%" align="start">
              <Paragraph
                text="Tommorow"
                weight="600"
                size="18px"
                height="22px"
              />
              <TeampMinMax
                max={temperatureMax}
                min={`/${temperatureMin}${"\u00B0"}`}
              />
              <Paragraph
                text={weatherCommon}
                weight="600"
                size="16px"
                height="20px"
                color="#71CBFB"
              />
            </Flex>
          </Flex>
        </MainInfoContainer>
        <WeatherRowContainer>
          <Flex gap="53px">
            <WeatherInfoCard1
              icon="windy"
              value={`${windspeedMax}kmh`}
              type="WindMax"
            />
            <WeatherInfoCard1
              icon="humidity"
              value={`${precipitationSum}mm`}
              type="PrecipitationSum"
            />
            <WeatherInfoCard1
              icon="direction"
              value={`${winddirection}deg`}
              type="Direction"
            />
          </Flex>
        </WeatherRowContainer>
        <Bottom>
          <BottomNavigation>
            <Flex
              margin="30px 0 0 0"
              justify="space-between"
              width="100%"
              direction="row-reverse"
            >
              <Title
                size="18px"
                height="22px"
                text="Weekly Forecast"
                weight="800"
              />
              <Button
                onClick={() => history.push("/weatherly")}
                position="relative"
                z="100"
                height="25px"
                width="50px"
              >
                <Paragraph
                  text="Today"
                  color="#fff"
                  size="12px"
                  height="20px"
                />
                <Wrapper
                  position="absolute"
                  top="50%"
                  left="-10px"
                  width="15px"
                  height="15px"
                  transform="translate(0, -50%)"
                >
                  <GlobalSvgSelector id="arrowLeft" />
                </Wrapper>
              </Button>
            </Flex>
          </BottomNavigation>
          <WeeklyForecast />
        </Bottom>
      </Screen>
    </StyledTommorrowFrcst>
  );
};

export default TommorrowFrcst;
