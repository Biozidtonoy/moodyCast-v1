import Hero from "./components/Hero";
import GenerateVibe from "./components/GenerateVibe";
import GenerateVibeDisplay from "./components/GenerateVibeDisplay";
import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");

  const [relationship, setRelationship] = useState("");

  const [ageGroup, setAgeGroup] = useState("");

  const [generateVibe, setGenerateVibe] = useState(false);

  const [city, setCity] = useState("Dhaka");

  return (
    <>
      <Hero city={city} setCity={setCity} />
      <GenerateVibe
        mood={mood}
        setMood={setMood}
        relationship={relationship}
        setRelationship={setRelationship}
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup}
        setGenerateVibe={setGenerateVibe}
      />
      {generateVibe && (
        <GenerateVibeDisplay
          mood={mood}
          relationship={relationship}
          ageGroup={ageGroup}
        />
      )}
    </>
  );
}

export default App;
