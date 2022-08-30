import styled from "styled-components/macro";
import { useAppSelector } from "../../../../hooks/hooks";
import Li from "../../../../shared/Li/Li";
import RowItem from "../RowItem/RowItem";

const StyledWeeklyForecast = styled.ul<any>`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 15px 0 0 0;
`;

const WeeklyForecast = () => {
  const {
    weeklyForecast: {
      dayName,
      temperatureMax,
      temperatureMin,
      weathercode,
      weatherCommon,
    },
  } = useAppSelector((state) => state.weather);


  
  return (
    <StyledWeeklyForecast>
      {dayName.map((val: string, index: number) => {
        return (
          <Li key={index}>
            <RowItem
              dayName={val}
              maxTemp={temperatureMax[index]}
              minTemp={temperatureMin[index]}
              weathercode={weathercode[index]}
              weatherCommon={weatherCommon[index]}
            />
          </Li>
        );
      })}
    </StyledWeeklyForecast>
  );
};

export default WeeklyForecast;
