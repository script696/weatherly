import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components/macro";
import WeatherSliderCard from "./WeatherSliderCard/WeatherSliderCard";

const StyledSwiper = styled.p<any>``;
const Swiper1 = () => {
  return (
    <StyledSwiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <WeatherSliderCard/>
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard/>
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard/>
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard/>
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard/>
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard/>
        </SwiperSlide>
        <SwiperSlide>
          <WeatherSliderCard/>
        </SwiperSlide>
      </Swiper>
    </StyledSwiper>
  );
};

export default Swiper1;
