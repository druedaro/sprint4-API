
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { lat, lon } = req.query;
  const apiKey = process.env.WEATHER_API_KEY;

  if (!lat || !lon) {
    res.status(400).json({ error: 'Faltan coordenadas lat/lon' });
    return;
  }

  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    if (!weatherResponse.ok) {
      res.status(weatherResponse.status).json({ error: 'Error al obtener clima' });
      return;
    }

    const data = await weatherResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error en get-weather:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
