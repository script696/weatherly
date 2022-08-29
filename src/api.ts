import axios from "axios";


const  key = '90371869547ecdc2d9db00c78d78411b'

const URL = 'https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6176&hourly=temperature_2m,relativehumidity_2m,showers&daily=weathercode&current_weather=true&timezone=Europe%2FMoscow'

const  getWeather = async () => {
  const res = await axios.get(URL)
  return res
}


export default getWeather

