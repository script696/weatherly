import { MONTH_INDEX } from "../constants";

const getCurrentDateData = (currentTime: string) => {
  const currentMonth = MONTH_INDEX[currentTime.split("-")[1]];
  const currentDay = currentTime.split("-")[2].slice(0, 2);

  return { currentMonth, currentDay };
};

export default getCurrentDateData;
