import "../styles/weatherDisplay.css";
import type { WeatherData } from "../utils/weather";
import stars from '../assets/stars.png';
import { getVibeMessage } from "../utils/vibeLogic";

type weatherDetailsProps = {
    weatherDetails: WeatherData | null; 
    error: string | null; 
    loading: boolean; 
}

function WeatherDisplay({weatherDetails , error , loading} : weatherDetailsProps) {
    
    

    if(error) return <p>fetching is not possible</p>
    if(loading) return <p>Loading....</p>
    if (!weatherDetails) return null;

    const vibeMessage = getVibeMessage(
      weatherDetails.main.temp,
      weatherDetails.main.humidity,
    );
  return (
    <>
      <div className="card flex justify-around items-stretch gap-6 my-10 ">
        <div className="weatherCard p-4 ">

          <div className="top flex justify-between items-center gap-4 mb-6">
            <div className="left flex flex-col gap-2">
            <p>{weatherDetails.name}</p>
            <p className="temp text-6xl font-bold ">{weatherDetails.main.temp} °C</p>
            <p >{weatherDetails.weather[0].description}</p>
            <p>feels like {weatherDetails.main.feels_like} °C</p>

          </div>
          <div className="right">
            <img src ={`https://openweathermap.org/img/wn/${weatherDetails.weather[0].icon}@2x.png` } alt="weather icon" className="weatherIcon"></img>
          </div>
          </div>

          <div className="bottom flex justify-between items-center gap-4 ">
            <div className="humidity">
                <h2>humidity</h2>
                <p>{weatherDetails.main.humidity} °C</p>
            </div>
            <div className="wind">
                <h2>wind</h2>
                <p>{weatherDetails.wind.speed} km/h </p>
            </div>
            <div className="visibility">
                <h2>visibility</h2>
                <p>{weatherDetails.visibility / 1000} km</p>
            </div>
            
          </div>
        </div>

        <div className="vibeCheckCard p-4">
         <div className="vibeTitle flex items-center gap-1 mb-5">
        <img src={stars} alt="stars"  className="h-10"/>
          <h1 className="text-xl font-bold text-purple-700">vibe check</h1>
         </div>
        

          <p className="text-2xl font-bold text-gray-900 ">
            {vibeMessage}
          </p>
        </div>
      </div>
    </>
  );
}

export default WeatherDisplay;
