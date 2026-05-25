import '../styles/generateVibeDisplay.css'

import useFetchGif from "../hooks/useFetchGif";

import { generateGifQuery } from "../utils/generateGifQuery";

import { getOutfitSuggestion } from "../utils/getOutfitSuggestion";

import { getExtraAdvice } from "../utils/getExtraAdvice";

import { getPersonalizedVibe } from "../utils/getPersonalizedVibe";

type GenerateVibeDisplayProps = {
  mood: string;
  relationship: string;
  ageGroup: string;
}

function GenerateVibeDisplay({
  mood,
  relationship,
  ageGroup
}: GenerateVibeDisplayProps) {

  const query = generateGifQuery(
    mood,
    relationship
  )

  const {gifUrl, loading, error} = useFetchGif(query)

  const outfitSuggestion = getOutfitSuggestion(
    mood,
    relationship,
    ageGroup
  )


  const advice = getExtraAdvice(
    relationship,
    mood
  )


  const vibeMessage = getPersonalizedVibe(
    mood,
    relationship
  )


  if(loading) return <p>Loading vibe...</p>

  if(error) return <p>Vibe failed 😭</p>

  return (
    <>
      <div className="container p-4 mt-4">
        <div className="gifContainer flex justify-center items-center">
          <img src={gifUrl} alt="date" className="h-100 rounded-2xl" />
        </div>
        <div className="yourWetherVibeContainer p-4">
          <div className="tops ">
            <h1 className="text-pink-400">❤ Your Weather Vibe</h1>
            <p className="text-3xl py-3 font-bold">
              {vibeMessage}
            </p>
          </div>
          <div className="bottoms flex gap-2 ">
            <div className="lefts">
              <h1 className="text-xl text-amber-300"> 💡Outfit Suggestion</h1>
              <p>
                {outfitSuggestion}
              </p>
            </div>
            <div className="rights ">
              <h1 className='text-xl text-amber-300'> 📝 Extra Advice</h1>
              <p>
              {advice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GenerateVibeDisplay