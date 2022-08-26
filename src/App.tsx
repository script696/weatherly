import styled from "styled-components/macro";
import DashBoard from "./pages/DashBoard/DashBoard";
import Flex from "./shared/Flex/Flex";
import Phone from "./shared/Phone/Phone";

import getWeather from "./api";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { setWeatherData } from "./store/slices/counterSlice";

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

function App() {

  const dispatch = useAppDispatch()

  useEffect (()=>{
    (async ()=>{
      const res = await getWeather()
      const {time, temperature_2m : temperature} = res.data.hourly
      dispatch(setWeatherData({time, temperature}))
    })()
  },[])

  
  return (
    <AppWrapper>
      <Flex height="100%">
        <Phone>
          <DashBoard />
        </Phone>
      </Flex>
    </AppWrapper>
  );
}

export default App;
