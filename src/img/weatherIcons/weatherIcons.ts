import partyCloudy from '../weatherIcons/partyCloudy.png'
import overcast from '../weatherIcons/overcast.png'
import thunderstorm from '../weatherIcons/thunderstorm.png'

// const weatherIcons = {
//   partyCloudy,
//   overcast
// }


const weatherIcons : {[index: string] : any} = {

  2: partyCloudy,
  3: overcast,
  95: thunderstorm,
  99: thunderstorm,
};

export default weatherIcons