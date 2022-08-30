import styled from "styled-components/macro";
import DashBoard from "./pages/DashBoard/DashBoard";
import Flex from "./shared/Flex/Flex";
import Phone from "./shared/Phone/Phone";
import { Redirect, Route, Switch } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { fetchWeather } from "./store/slices/weatherSlice";
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

function App() {


  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  return (
    <AppWrapper>
      <Flex height="100%">
        <Phone>
          <Switch>
            <Route path="/today" exact component={DashBoard} />
            <Route path="/tomorrow" exact component={TommorrowFrcst}/>
            <Route path="*" exact component={PageNotFound}/>
          </Switch>
        </Phone>
      </Flex>
    </AppWrapper>
  );
}

export default App;
