import { useEffect, useState } from "react";
import type { WeatherData } from "../utils/weather";

function useFetchWeather(city : string) {

  const [weatherDetails, setWeatherDetails] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "137dc645711002b7976d16e091af2736";

  useEffect(() => {
    if(!city) return;

    const fetchWeather = async () => {
        setLoading(true);
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`, {
          headers: {
            "User-Agent": "moodyCast-v1",
          },
        });
        if (response.status >= 400) {
          throw new Error("Server down");
        }
        if(!response.ok){
            throw new Error(" city not found")
        }
        const data = await response.json();
        setWeatherDetails(data);


      } catch (error ) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong");
        }

      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return {city, weatherDetails, error, loading };
}

export default useFetchWeather;
