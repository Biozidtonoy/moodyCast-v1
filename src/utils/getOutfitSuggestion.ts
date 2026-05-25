export function getOutfitSuggestion(
  mood: string,
  relationship: string,
  ageGroup: string
){

  // ❤️ Romantic mood
  if(mood === "romantic"){

    if(relationship === "relationship"){
      return "Soft hoodie + light jacket + white sneakers ❤️";
    }

    if(relationship === "single"){
      return "Clean oversized tshirt + perfume + fake confidence 😭";
    }

    return "Cozy cardigan + aesthetic sneakers ✨";
  }


  // 😈 Chaotic mood
  if(mood === "chaotic"){

    if(ageGroup === "teen"){
      return "Baggy hoodie + cargo pants + messy headphones 😈";
    }

    return "All black outfit + sunglasses + emotionally unstable energy 🖤";
  }


  // 😔 Sad mood
  if(mood === "sad"){

    if(relationship === "heartbroken"){
      return "Blanket burrito + oversized hoodie + no social interaction 💀";
    }

    return "Dark hoodie + comfy joggers + coffee therapy ☕";
  }


  // 😴 Sleepy mood
  if(mood === "sleepy"){
    return "Pajama-core outfit + fluffy hoodie + zero responsibilities 😴";
  }


  // 💻 Productive mood
  if(mood === "productive"){

    if(ageGroup === "youngAdult"){
      return "Minimal clean fit + smartwatch + locked-in mindset 💻";
    }

    return "Simple tshirt + jeans + main character productivity ✨";
  }


  // 👑 Married
  if(relationship === "married"){
    return "Comfortable matching outfit + responsible adult vibes 💍";
  }


  // 🤡 Situationship
  if(relationship === "situationship"){
    return "Dress nice but emotionally prepare for confusion 🤡";
  }


  // 🎧 Teen
  if(ageGroup === "teen"){
    return "Oversized tshirt + cargo pants + cool sneakers 🎧";
  }


  // 🚀 Young adult
  if(ageGroup === "youngAdult"){
    return "Clean casual fit + confidence + iced coffee energy 🚀";
  }


  // 🧓 Legendary Human
  if(ageGroup === "legend"){
    return "Elite comfort fit + wisdom aura + weather immunity 🧓";
  }


  // default
  return "Casual clean outfit + survive the weather vibes ✨";
}