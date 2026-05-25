import "../styles/generateVibe.css";
import moods from "../assets/mood.png";
import love from '../assets/love.png';
import AgeGroup from '../assets/ageGroup.png';
import type {Dispatch, SetStateAction} from "react";

type GenerateVibeProps = {

  mood: string;
  setMood: Dispatch<SetStateAction<string>>;

  relationship: string;
  setRelationship: Dispatch<SetStateAction<string>>;

  ageGroup: string;
  setAgeGroup: Dispatch<SetStateAction<string>>;

  setGenerateVibe: Dispatch<SetStateAction<boolean>>;
}

function GenerateVibe({

  mood,
  setMood,

  relationship,
  setRelationship,

  ageGroup,
  setAgeGroup,

  setGenerateVibe

}: GenerateVibeProps) {


    const handleGenerate = () => {

    if(!mood || !relationship || !ageGroup){
      return;
    }

    setGenerateVibe(true);
  }


  return (
    <>
      <div className="vibeContainer">
        <div className="title py-2">
          <h1 className="text-2xl font-bold">Tell me about you</h1>
          <h2>I'll give you perfect weather advice based on your vibe!</h2>
        </div>

        <div className="selectorCard flex gap-6 py-6">
          <div className="card1 border-r-2 border-gray-300 px-4 py-2">
            <div className="top flex items-center gap-2 py-2">
              <img src={moods} alt="mood" className="h-10" />
              <h1 className="font-bold">1.Mood</h1>
            </div>
            <div className="middle">
              <form>
                <select
                  className="border border-gray-300 rounded-sm bg-gray-50 px-4 py-2 text-black w-full"
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                >
                  <option value="">Select mood</option>

                  <option value="romantic">Romantic ❤️</option>

                  <option value="sad">Sad 😔</option>

                  <option value="chaotic">Chaotic 😈</option>

                  <option value="productive">Productive 💻</option>

                  <option value="sleepy">Sleepy 😴</option>
                </select>

                <div className="smallDes">
                  {mood === "romantic" &&
                    "Love is in the air... or maybe just delusion ❤️"}

                  {mood === "sad" &&
                    "Today's playlist probably hurts 😔"}

                  {mood === "chaotic" &&
                    "Mentally unstable but aesthetically cool 😈"}

                  {mood === "productive" &&
                    "Locked in. Nobody disturb 🚀"}

                  {mood === "sleepy" &&
                    "This weather was made for naps 😴"}
                </div>
              </form>
            </div>
          </div>

          <div className="card2 border-r-2 border-gray-300 px-4 py-2">
            <div className="top flex items-center gap-2 py-2">
              <img src={love} alt="mood" className="h-10" />
              <h1 className="font-bold">2. Relationship Status</h1>
            </div>
            <div className="middle">
              <form>
                <select
                  className="border border-gray-300 rounded-sm bg-gray-50 px-4 py-2 text-black w-full"
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                >
                  <option value="">Relationship status</option>

                  <option value="single">Single 😎</option>

                  <option value="relationship">In Relationship ❤️</option>

                  <option value="situationship">Situationship 🤡</option>

                  <option value="married">Married 💍</option>

                  <option value="heartbroken">Heartbroken 💀</option>
                </select>

                <div className="smallDes">
                  {relationship === "single" && "Freedom level: MAX 😎"}

                  {relationship === "relationship" &&
                    "Cute. Let's see how long it lasts ❤️"}

                  {relationship === "situationship" &&
                    "Emotionally sponsored confusion 🤡"}

                  {relationship === "married" &&
                    "Shared Netflix account unlocked 💍"}

                  {relationship === "heartbroken" &&
                    "Character development arc begins 💀"}
                </div>
              </form>
            </div>
          </div>

          <div className="card3 px-4 py-2">
            <div className="top flex items-center gap-2 py-2">
              <img src={AgeGroup} alt="mood" className="h-10" />
              <h1 className="font-bold">3. Age Group</h1>
            </div>
            <div className="middle">
              <form>
                <select
                  className="border border-gray-300 rounded-sm bg-gray-50 px-4 py-2 text-black w-full"
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                >
                  <option value="">Select age group</option>

                  <option value="teen">Teen (13-19)</option>

                  <option value="youngAdult">Young Adult (20-35)</option>

                  <option value="adult">Adult (36-50)</option>

                  <option value="legend">Legendary Human 50+</option>
                </select>

                <div className="smallDes">
                  {ageGroup === "teen" &&
                    "Still discovering life and bad decisions 🎧"}

                  {ageGroup === "youngAdult" &&
                    "Running on caffeine and stress ☕"}

                  {ageGroup === "adult" && "Back pain loading slowly 📈"}

                  {ageGroup === "legend" && "Wisdom level over 9000 👑"}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="generateBtns flex justify-center items-center">
          <button className="generateBtn bg-purple-900 text-white font-bold p-5 rounded-2xl hover:scale-103 duration-300" onClick={handleGenerate}>
            Generate my vibe
          </button>
        </div>
      </div>
    </>
  );
}

export default GenerateVibe;
