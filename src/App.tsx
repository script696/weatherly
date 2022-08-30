import styled from "styled-components/macro";
import DashBoard from "./pages/DashBoard/DashBoard";
import Flex from "./shared/Flex/Flex";
import Phone from "./shared/Phone/Phone";
import { Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchWeather, setUpdate } from "./store/slices/weatherSlice";
import TommorrowFrcst from "./pages/TommorrowFrcst/TommorrowFrcst";
import PageNotFound from "./shared/PageNotFound/PageNotFound";

const AppWrapper = styled.div`
  width: 100%;
  height: auto;
  background: linear-gradient(
      180deg,
      rgba(129, 217, 244, 0.6) 0%,
      rgba(33, 123, 245, 0.6) 100%
    ),
    #ffffff;
`;

const App = () => {
  const dispatch = useAppDispatch();

  const { currentCityCoord, update } = useAppSelector((state) => state.weather);

  useEffect(() => {
    setInterval(() => {
      dispatch(setUpdate());
    }, 1000 * 60 * 5);
  }, []);

  useEffect(() => {
    if (update) {
      dispatch(fetchWeather(currentCityCoord));
    }
  }, [update]);

  // useEffect(() => {
  //   dispatch(fetchWeather(currentCityCoord));
  // }, [currentCityCoord]);

  return (
    <AppWrapper>
      <Flex height="100%">
        <Phone>
          <Switch>
            <Route path="/today" exact component={DashBoard} />
            <Route path="/tomorrow" exact component={TommorrowFrcst} />
            <Route path="*" exact component={PageNotFound} />
          </Switch>
        </Phone>
      </Flex>
    </AppWrapper>
  );
};

export default App;
