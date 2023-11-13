// app.js
import { getAllEpisodes } from './api/getEpisodes.js'; // Añadí la extensión del archivo
import { filterEpisodes } from './api/filterEpisodes.js'; // Añadí la extensión del archivo

async function main() {
  try {
    // Obtener todos los episodios
    const allEpisodes = await getAllEpisodes();
    console.log('Todos los episodios:', allEpisodes);

    // Filtrar episodios por nombre y estado
    const filteredEpisodes = await filterEpisodes('rick', 'alive');
    console.log('Episodios filtrados:', filteredEpisodes);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Ejecutar el ejemplo
main();