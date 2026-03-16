const Document = require('../models/Document');
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Optional fallback responses if OpenAI is unavailable
const fallbackResponses = [
  "Sorry, I can't access the AI service right now. Please try again later.",
  "The AI is temporarily unavailable. You can try again soon.",
  "I'm unable to answer at the moment, but I'll be back shortly!"
];

function getFallbackResponse() {
  // Pick a random fallback response
  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

async function answerQuestion(question) {
  try {
    const docs = await Document.find().limit(5);
    const context = docs.map(d => d.content).join("\n");

    const prompt = `
Answer the question using the context below.

Context:
${context}

Question:
${question}
`;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    });

    return completion.choices[0].message.content;

  } catch (error) {
    console.error('OpenAI API error:', error.message);

    // Fallback if the API key is invalid or request fails
    if (error.code === 'invalid_api_key' || error.status === 401) {
      return getFallbackResponse();
    }

    // Optional: handle other errors with a generic fallback
    return "An unexpected error occurred. Please try again.";
  }
}

module.exports = { answerQuestion };