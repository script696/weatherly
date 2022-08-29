import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components/macro";
import WeatherSliderCard from "./WeatherSliderCard/WeatherSliderCard";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { useEffect, useState } from "react";



const StyledSwiper = styled.div<any>``;
const Swiper1 = () => {
  const {dailyForecast : {dayTime, dayTemp, dayWeatherCode} } = useAppSelector(state => state.weather)


  return (
    <StyledSwiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        grabCursor={true}
        onSlideChange={() => console.log("slide change")}
      >
        {dayTime?.map((val : string, index : number) => {
          return (
            <SwiperSlide key={index}>
              <WeatherSliderCard time={val} temp={dayTemp[index]} index={dayWeatherCode[index]}/>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledSwiper>
  );
};

export default Swiper1;
