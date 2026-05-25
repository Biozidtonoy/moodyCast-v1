import Navbar from "./Navbar"
import WeatherDisplay from './WeatherDisplay'
import useFetchWeather from "../hooks/useFetchWeather";


import '../styles/hero.css'

type HeroProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

function Hero({ city, setCity }: HeroProps) {
    
    const { weatherDetails, error, loading } = useFetchWeather(city);

  return (
    <>
    <div className="heroSection">
        <Navbar city={city} setCity={setCity}/>
        <WeatherDisplay weatherDetails= {weatherDetails} error={error} loading={loading} />
        
    </div>
    </>
  )
}

export default Hero