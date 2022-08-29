import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components/macro";
import WeatherSliderCard from "./WeatherSliderCard/WeatherSliderCard";
import { useAppSelector } from "../../../hooks/hooks";
import { useEffect } from "react";


const weatherCode = {
  0 : 'clearSky',
  1 : 'mainlyClear',
  2 : 'partyCloudy',
  3 : 'overcast',
}


const StyledSwiper = styled.div<any>``;
const Swiper1 = () => {
  const { currentWeather, temperature2m, time, weatherCode } = useAppSelector(
    (state) => state.weather
  );


  
  useEffect(() => {
    const currentTime = currentWeather.time;
    const startIndex = time.indexOf(currentTime);

    const dayTime = time?.slice(startIndex, startIndex + 24);
    const dayTemp = temperature2m?.slice(startIndex, startIndex + 24);
    const dayWeatherCode = weatherCode?.slice(startIndex, startIndex + 24);

    console.log(dayWeatherCode);
  }, [currentWeather]);

  return (
    <StyledSwiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <WeatherSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard />
        </SwiperSlide>
      </Swiper>
    </StyledSwiper>
  );
};

export default Swiper1;
