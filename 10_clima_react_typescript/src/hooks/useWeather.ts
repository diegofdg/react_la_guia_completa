import axios from "axios"
import { SearchType, Weather } from "../types"

function isWeatherResponse(weather: unknown) {
  return (
    Boolean(weather) &&
    typeof weather === "object" &&
    typeof (weather as Weather).name === "string" &&
    typeof (weather as Weather).main.temp === "number" &&
    typeof (weather as Weather).main.temp_max === "number" &&
    typeof (weather as Weather).main.temp_min === "number"
  )

}

export default function useWeather() {

  const fetchWeather = async (search: SearchType) => {
    try {
      const appId = import.meta.env.VITE_API_KEY
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
      const { data } = await axios(geoUrl)

      const lat = data[0].lat
      const lon = data[0].lon
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

      const { data: weatherResult } = await axios(weatherUrl)
      const result = isWeatherResponse(weatherResult)
      if (result) {
        console.log(weatherResult.name)
      } else {
        console.log("Respuesta mal formada")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return {
    fetchWeather
  }
}