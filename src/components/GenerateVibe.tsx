import "../styles/generateVibe.css";
import mood from "../assets/mood.png";
import love from '../assets/love.png';
import ageGroup from '../assets/ageGroup.png';

function GenerateVibe() {
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
              <img src={mood} alt="mood" className="h-10" />
              <h1 className="font-bold">1.Mood</h1>
            </div>
            <div className="middle">
              <form>
                <select className="border border-gray-300 rounded-sm bg-gray-50 px-4 py-2 text-black w-full">
                  <option value="">Select mood</option>

                  <option value="romantic">Romantic ❤️</option>

                  <option value="sad">Sad 😔</option>

                  <option value="chaotic">Chaotic 😈</option>

                  <option value="productive">Productive 💻</option>

                  <option value="sleepy">Sleepy 😴</option>
                </select>

                <div className="smallDes">
                  Tell us your emotional damage level 😭
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
                <select className="border border-gray-300 rounded-sm bg-gray-50 px-4 py-2 text-black w-full">
                  <option value="">Relationship status</option>

                  <option value="single">Single 😎</option>

                  <option value="relationship">In Relationship ❤️</option>

                  <option value="situationship">Situationship 🤡</option>

                  <option value="married">Married 💍</option>

                  <option value="heartbroken">Heartbroken 💀</option>
                </select>

                <div className="smallDes">We promise not to judge 👀</div>
              </form>
            </div>
          </div>

          <div className="card3 px-4 py-2">
            <div className="top flex items-center gap-2 py-2">
              <img src={ageGroup} alt="mood" className="h-10" />
              <h1 className="font-bold">3. Age Group</h1>
            </div>
            <div className="middle">
              <form>
                <select className="border border-gray-300 rounded-sm bg-gray-50 px-4 py-2 text-black w-full">
                  <option value="">Select age group</option>

                  <option value="teen">Teen (13-19)</option>

                  <option value="youngAdult">Young Adult (20-35)</option>

                  <option value="adult">Adult (36-50)</option>

                  <option value="legend">Legendary Human 50+</option>
                </select>

                <div className="smallDes">
                  Emotional maturity not included 😭
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="generateBtns flex justify-center items-center">
          <button className="generateBtn bg-purple-900 text-white font-bold p-5 rounded-2xl hover:scale-103 duration-300">
            Generate my vibe
          </button>
        </div>
      </div>
    </>
  );
}

export default GenerateVibe;
