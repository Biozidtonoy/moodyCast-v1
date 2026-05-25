export function generateGifQuery(
  mood: string,
  relationship: string
){

  // ❤️ Romantic
  if(
    mood === "romantic" &&
    relationship === "relationship"
  ){
    return "romantic rainy couple";
  }

  // 💔 Sad + heartbroken
  if(
    mood === "sad" &&
    relationship === "heartbroken"
  ){
    return "sad lonely anime rain";
  }

  // 😎 Single energy
  if(
    relationship === "single"
  ){
    return "single main character vibes";
  }

  // 😈 Chaotic
  if(mood === "chaotic"){
    return "chaotic weather meme";
  }

  // 😴 Sleepy
  if(mood === "sleepy"){
    return "sleepy cozy rain";
  }

  return "cozy weather";
}