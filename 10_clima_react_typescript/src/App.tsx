import styles from "./App.module.css"
import Form from "./components/Form/Form"
import WeatherDetail from "./components/WeatherDetail/WeatherDetail"
import Spinner from "./components/Spinner/Spinner"
import useWeather from "./hooks/useWeather"

function App() {
  const { weather, loading, fetchWeather, hasWeatherData } = useWeather()
  return (
    <>
      <h1 className={styles.title}>Buscador de Clima</h1>
      <div className={styles.container}>
        <Form
          fetchWeather={fetchWeather}
        />
        {loading && 
          <Spinner />
        }
        {hasWeatherData &&
          <WeatherDetail
            weather={weather}
          />
        }
      </div>
    </>
  )
}

export default App
