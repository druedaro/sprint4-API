import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static('.')); // o tu carpeta build/dist si la tienes

app.get('/api/weather', async (_req, res) => {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Barcelona&units=metric&appid=${process.env.OPENWEATHER_API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error al llamar a OpenWeather:', error);
    res.status(500).json({ error: 'Error al llamar a la API' });
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
