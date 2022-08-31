import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components/macro";
import WeatherSliderCard from "./WeatherSliderCard/WeatherSliderCard";
import { useAppSelector } from "../../../hooks/hooks";



const StyledSwiper = styled.div<any>`
cursor: grab;
`;
const Swiper1 = () => {
  const {dailyForecast : {dayTime, dayTemp, weathercode} } = useAppSelector(state => state.weather)


  return (
    <StyledSwiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        grabCursor={true}
      >
        {dayTime?.map((val : string, index : number) => {
          return (
            <SwiperSlide key={index}>
              <WeatherSliderCard time={val} temp={dayTemp[index]} index={weathercode[index]}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledSwiper>
  );
};

export default Swiper1;
