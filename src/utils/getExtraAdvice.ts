export function getExtraAdvice(
  relationship: string,
  mood: string
){

  if(relationship === "single"){
    return "Touch grass and drink water 😭";
  }

  if(relationship === "relationship"){
    return "Text them first today ❤️";
  }

  if(mood === "sad"){
    return "Avoid sad playlists tonight 💀";
  }

  return "Stay hydrated and emotionally stable ✨";
}