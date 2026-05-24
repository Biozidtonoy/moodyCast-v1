export function getVibeMessage(
  temp: number,
  humidity: number
){

  // HOT + HUMID
  if(temp >= 30 && humidity >= 70){
    return "It's hot, sticky and emotionally illegal outside 😭🥵";
  }

  // VERY HOT
  if(temp >= 35){
    return "The sun woke up angry today ☀️💀";
  }

  // COLD
  if(temp <= 18){
    return "Cold weather. Perfect for overthinking life choices ☕😔";
  }

  // FREEZING
  if(temp <= 10){
    return "Congratulations. You're living inside a refrigerator 🧊";
  }

  // RAINY
  if(humidity >= 85){
    return "Rainy vibes detected 🌧️. Main character energy unlocked 🎬";
  }

  // HUMID
  if(humidity >= 70){
    return "The air feels clingier than your ex today 💀";
  }

  // PERFECT WEATHER
  if(temp >= 22 && temp <= 28){
    return "This weather is illegally beautiful ✨";
  }

  // SUNNY
  if(temp >= 28 && humidity <= 40){
    return "Perfect weather for iced coffee and bad financial decisions 🧋";
  }

  // CHILL WEATHER
  if(temp >= 18 && temp <= 22){
    return "Sweater weather activated 🍂☕";
  }

  // NIGHT COZY
  if(temp <= 20 && humidity <= 50){
    return "Perfect night for music, deep thoughts and unnecessary nostalgia 🌙";
  }

  // DEFAULT
  return "The weather feels emotionally confusing today 😵‍💫";
}