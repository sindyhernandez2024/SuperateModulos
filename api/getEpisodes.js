// api/getEpisodes.js
import axios from 'axios';
import baseUrl from '../utils/baseUrl.js'; // Ajusté la ruta para que sea relativa

async function getAllEpisodes() {
  try {
    const response = await axios.get(`${baseUrl}/episode`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching episodes:', error);
    throw error;
  }
}

export { getAllEpisodes };
