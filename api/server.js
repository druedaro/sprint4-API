import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static('.'));

app.get('/api/weather', async (_req, res) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error calling OpenWeather:', error);
    res.status(500).json({ error: 'Error calling API' });
  }
});

app.listen(PORT, () => console.log(`API calling http://localhost:${PORT}`));
