import axios from "axios"
// import { z } from "zod"
import { SearchType } from "../types"
import { object, string, number, Output, parse } from "valibot"

/* const Weather = z.object({
  name: z.string(),
  main: z.object({
    temp: z.number(),
    temp_max: z.number(),
    temp_min: z.number(),
  })
})
export type Weather = z.infer<typeof Weather> */

const WeatherSchema = object({
  name: string(),
  main: object({
    temp: number(),
    temp_max: number(),
    temp_min: number()
  })
})
type Weather = Output<typeof WeatherSchema>

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
      /* const result = Weather.safeParse(weatherResult)
      if (result.success) {
        console.log(result.data)
      } */
      const result = parse(WeatherSchema, weatherResult)
      if (result) {
        console.log(result.name)
      }

    } catch (error) {
      console.log(error)
    }
  }

  return {
    fetchWeather
  }
}