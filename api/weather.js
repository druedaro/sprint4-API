import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error calling OpenWeather:', error);
    res.status(500).json({ error: 'Error calling API' });
  }
}
