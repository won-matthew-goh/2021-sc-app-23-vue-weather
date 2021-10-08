import axios from 'axios'

const appid = '53b05316a1479340176f6468860d6864'
const url = 'https://api.openweathermap.org/data/2.5/weather'
// const icons = ['http://openweathermap.org/img/wn/', '@2x.png'];
const params = { units: 'metric', appid }

const apiDaily = (options) => {
  params.lat = options.lat
  params.lon = options.lon
  return axios.get(url, { params })
}

export default apiDaily
