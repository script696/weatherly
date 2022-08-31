import { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components/macro";
import Flex from "./shared/Flex/Flex";
import Phone from "./shared/Phone/Phone";
import { fetchWeather, setUpdate } from "./store/slices/weatherSlice";
import VerticalSlider from "./shared/VerticalSlider/VerticalSlider";
import Wrapper from "./shared/Wrapper/Wrapper";
import DashBoard from "./pages/DashBoard/DashBoard";
import TommorrowFrcst from "./pages/TommorrowFrcst/TommorrowFrcst";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      180deg,
      rgba(129, 217, 244, 0.6) 0%,
      rgba(33, 123, 245, 0.6) 100%
    ),
    #ffffff;
`;

const App = () => {
  const dispatch = useAppDispatch();

  const {
    currentCityCoord,
    updateData: { update, timerInterval },
  } = useAppSelector((state) => state.weather);

  const { scaleVal } = useAppSelector((state) => state.scale);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(setUpdate());
    }, timerInterval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (update) {
      dispatch(fetchWeather(currentCityCoord));
    }
  }, [update]);

  useEffect(() => {
    dispatch(fetchWeather(currentCityCoord));
  }, [currentCityCoord]);

  return (
    <AppWrapper>
      <Flex height="100%">
        <Phone transform={scaleVal}>
          <Switch>
            <Route path="/weatherly" exact component={DashBoard} />
            <Route path="/tomorrow" exact component={TommorrowFrcst} />
          </Switch>
        </Phone>
      </Flex>
      <Wrapper
        position="fixed"
        top="50%"
        left="10vw"
        transform="translateY(-50%)"
        height="auto"
      >
        <VerticalSlider />
      </Wrapper>
    </AppWrapper>
  );
};

export default App;
