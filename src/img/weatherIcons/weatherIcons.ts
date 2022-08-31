import clearSky from "../weatherIcons/clearSky.png";
import mainlyClear from "../weatherIcons/mainlyClear.png";
import partyCloudy from "../weatherIcons/partyCloudy.png";
import overcast from "../weatherIcons/overcast.png";
import fog from "../weatherIcons/fog.png";
import drizzle from "../weatherIcons/drizzle.png";
import rain from "../weatherIcons/rain.png";
import snow from "../weatherIcons/snow.png";
import rainShowest from "../weatherIcons/rainShowest.png";
import snowShowest from "../weatherIcons/snowShowest.png";
import thunderstorm from "../weatherIcons/thunderstorm.png";



const weatherIcons: { [index: string]: any } = {
  0: clearSky,
  1: mainlyClear,
  2: partyCloudy,
  3: overcast,
  45: fog,
  48: fog,
  51: drizzle,
  53: drizzle,
  55: drizzle,
  56: drizzle,
  57: drizzle,
  61: rain,
  63: rain,
  65: rain,
  66: rain,
  67: rain,
  71: snow,
  73: snow,
  75: snow,
  77: snow,
  80: rainShowest,
  81: rainShowest,
  82: rainShowest,
  85: snowShowest,
  86: snowShowest,
  95: thunderstorm,
  99: thunderstorm,
};

export default weatherIcons;
