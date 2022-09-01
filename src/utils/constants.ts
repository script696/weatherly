interface IcitysCoord {
  [key : string] : {
    latitude: string;
    longitude: string;
  }
}

export const citysCoord: IcitysCoord = {
  Moscow: {
    latitude: "55.75",
    longitude: "37.62",
  },
  SaintP: {
    latitude: "59.94",
    longitude: "30.31",
  },
  Berlin: {
    latitude: "52.52",
    longitude: "13.41",
  },
  Kiev: {
    latitude: "50.45",
    longitude: "30.52",
  },
  Rome: {
    latitude: "41.89",
    longitude: "12.51",
  },
  Paris: {
    latitude: "48.85",
    longitude: "2.35",
  },
};


export const WEATHER_CODES: { [n: string]: string } = {
  "0": "Clear sky",
  "1": "Mainly clear",
  "2": "Party Cloud",
  "3": "Overcast",
  "45": "Fog",
  "48": "Fog",
  "51": "Drizzle (light)",
  "53": "Drizzle (moderate)",
  "55": "Drizzle (dense)",
  "56": "Freezing Drizzle (light)",
  "57": "Freezing Drizzle (heavy)",
  "61": "Rain (slight)",
  "63": "Rain (moderate)",
  "65": "Rain (heavy)",
  "66": "Freezing Rain (light)",
  "67": "Freezing Rain (heavy)",
  "71": "Snow fall (slight)",
  "73": "Snow fall (moderate)",
  "75": "Snow fall (heavy)",
  "77": "Snow grains",
  "80": "Rain showest (slight)",
  "81": "Rain showest (moderate)",
  "82": "Rain showest (heavy)",
  "85": "Snow showers (slight)",
  "86": "Snow showers (heavy)",
  "95": "Thunderstorm",
  "99": "Thunderstorm (hail)",
};

export const MONTH_INDEX: { [n: string]: string } = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "Jule",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December",
};
export const WEEKS_DAYS = [
  "Sun",
  "Mon",
  "Tues",
  "Wed",
  "Thurs",
  "Fri",
  "Satur",
];