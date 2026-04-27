const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `You are ShopMart's AI shopping assistant. You help customers find products, plan events (like birthday parties), suggest gifts, compare items, and answer shopping-related questions.

Keep your responses concise, friendly, and helpful. Use emojis sparingly for visual appeal. Format lists with bullet points when suggesting multiple items.

If a user asks about something unrelated to shopping, gently guide them back to shopping topics.

Our store categories include: Party Supplies, Costumes, Decorations, Electronics, Clothing, Shoes, Accessories, Birthday Cakes, Return Gifts, and Party Treats.`;

// POST /api/chat — Send message and get Gemini response
router.post('/', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ message: 'Message is required' });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Build conversation history for context
    const chatHistory = (history || []).map(msg => ({
      role: msg.role === 'bot' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const chat = model.startChat({
      history: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model', parts: [{ text: "Understood! I'm ShopMart's AI assistant, ready to help with shopping, product recommendations, and event planning. How can I help you today?" }] },
        ...chatHistory
      ]
    });

    const result = await chat.sendMessage(message);
    const response = result.response.text();

    res.status(200).json({ reply: response });
  } catch (err) {
    console.error('Gemini API error:', err.message);
    res.status(500).json({
      message: 'Failed to get AI response',
      reply: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment!"
    });
  }
});

module.exports = router;
