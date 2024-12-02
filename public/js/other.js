// fetchStates.js
import supabase from './supabase';

async function fetchStatesFromDB() {
  try {
    const { data, error } = await supabase
      .from('sensores')  // Substitua pelo nome da sua tabela
      .select('*');

    if (error) {
      throw new Error(error.message);
    }

    // Exibir os dados na página HTML
    updateDeviceStates(data);
  } catch (error) {
    console.error('Error fetching states:', error.message);
  }
}

function updateDeviceStates(data) {
  const statesContainer = document.getElementById('statesContainer');
  statesContainer.innerHTML = data.map(item => `<p>${item.name}: ${item.status}</p>`).join('');
}

fetchStatesFromDB();
