export function getPersonalizedVibe(
  mood: string,
  relationship: string
){

  if(mood === "romantic"){
    return "Perfect weather for deep talks and emotional damage ❤️";
  }

  if(mood === "chaotic"){
    return "Today feels mentally unstable but aesthetically cool 😈";
  }

  if(relationship === "single"){
    return "Main character energy unlocked 🎬";
  }

  return "The weather feels emotionally cinematic today ✨";
}