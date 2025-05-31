function analyzeSentiment() {
  const text = document.getElementById("text-input").value.toLowerCase();
  const resultText = document.getElementById("result-text");

  const positiveWords = [
    "love", "like", "great", "awesome", "happy", "joy", "excellent", "wonderful", "amazing", "fantastic", "superb", 
    "nice", "good", "blessed", "pleased", "satisfied", "excited", "enjoyed", "grateful", "beautiful", "fun", "positive",
    "outstanding", "perfect", "fabulous", "cool", "cheerful", "smile", "delight", "content", "best"
  ];

  const negativeWords = [
    "hate", "dislike", "bad", "worst", "terrible", "awful", "sad", "angry", "upset", "horrible", "disappointed", 
    "annoyed", "pain", "sucks", "depressed", "tired", "bored", "negative", "poor", "ugly", "cry", "miserable",
    "frustrated", "mad", "lonely", "jealous", "worried", "pathetic", "sorry", "unhappy"
  ];

  let score = 0;

  // Tokenize the input into words
  const words = text.split(/\s+/);

  words.forEach(word => {
    if (positiveWords.includes(word)) score++;
    else if (negativeWords.includes(word)) score--;
  });

  if (score > 0) {
    resultText.innerText = "😊 Positive Sentiment";
    resultText.className = "result-positive";
  } else if (score < 0) {
    resultText.innerText = "😞 Negative Sentiment";
    resultText.className = "result-negative";
  } else {
    resultText.innerText = "😐 Neutral Sentiment";
    resultText.className = "result-neutral";
  }
}
