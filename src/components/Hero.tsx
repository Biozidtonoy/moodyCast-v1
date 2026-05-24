import Navbar from "./Navbar"
import WeatherDisplay from './WeatherDisplay'
import useFetchWeather from "../hooks/useFetchWeather";
import { useState } from "react";

import '../styles/hero.css'


function Hero() {
    const [city , setCity ] = useState('Dhaka');
    
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