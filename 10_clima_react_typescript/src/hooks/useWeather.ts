import axios from "axios"
import { SearchType } from "../types"

export default function useWeather() {

  const fetchWeather = async (search: SearchType) => {
    try {
      const appId = "c45b5dd4c6b0c916817eed3d608c4b11"
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
      
      const {data} = await axios(geoUrl)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    fetchWeather
  }
}