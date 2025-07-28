"use strict"

import { apiClient } from '../api-service/apiClient.js';
import { weatherApiLocalEndpoint } from '../config/endpoints.js';

export async function getWeather(lat: number, lon: number): Promise<any> {
  const url = `${weatherApiLocalEndpoint}?lat=${lat}&lon=${lon}`;
  return await apiClient(url);
}
