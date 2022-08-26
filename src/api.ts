import axios from "axios";


const  key = '90371869547ecdc2d9db00c78d78411b'



const  getWeather = async () => {
  const res = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6176&hourly=temperature_2m')
  return res
}


export default getWeather

