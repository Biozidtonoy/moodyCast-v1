import { useEffect, useState } from "react";


function useFetchGif(query: string){

  const [gifUrl, setGifUrl] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);


  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;


  useEffect(() => {

    if(!query) return;

    const fetchGif = async () => {

      try {

        setLoading(true);

        const response = await fetch(
          `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=${query}`
        );


        if(!response.ok){
          throw new Error("gif failed")
        }


        const data = await response.json();


        setGifUrl(data.data.images.original.url);

      } catch(error){

        if(error instanceof Error){
          setError(error.message)
        }

      } finally {
        setLoading(false)
      }

    }

    fetchGif();

  }, [query, API_KEY])


  return {
    gifUrl,
    loading,
    error
  }
}
export default useFetchGif;