import { WEEKS_DAYS } from "../constants";

const getDay = (whatDay: string): string => {
  const dayIndex = new Date().getDay();

  switch (whatDay) {
    case "today":
      return WEEKS_DAYS[dayIndex];
    case "tomorrow":
      return WEEKS_DAYS[dayIndex + 1];
    default:
      return "";
  }
};

export default getDay