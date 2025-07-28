"use strict"

import { apiClient } from '../api-service/apiClient';
import { weatherApiLocalEndpoint } from '../config/endpoints';

export async function getWeather(lat: number, lon: number): Promise<any> {
  const url = `${weatherApiLocalEndpoint}?lat=${lat}&lon=${lon}`;
  return await apiClient(url);
}
