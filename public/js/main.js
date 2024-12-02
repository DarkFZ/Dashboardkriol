async function fetchSensores() {
  try {
    // Buscar os dados reais do servidor
    const response = await fetch('/sensores');
    const data = await response.json();

    if (data.length === 0) {
      console.log('Nenhum dado encontrado.');
      return;
    }

    // Atualizar os gráficos
    const tempChartLabels = [];
    const tempChartData = [];
    const humidChartData = [];

    // Iterar pelos dados recebidos
    data.forEach(sensor => {
      const time = new Date(sensor.timestamp).toLocaleTimeString(); // Formatar horário

      tempChartLabels.push(time); // Adicionar horário como label no gráfico
      tempChartData.push(sensor.temperature); // Adicionar temperatura
      humidChartData.push(sensor.humidity); // Adicionar umidade
    });

    // Atualizar os datasets dos gráficos
    tempChart.data.labels = tempChartLabels;
    tempChart.data.datasets[0].data = tempChartData;
    tempChart.update(); // Atualizar gráfico de temperatura

    humidChart.data.labels = tempChartLabels;
    humidChart.data.datasets[0].data = humidChartData;
    humidChart.update(); // Atualizar gráfico de umidade

    console.log('Gráficos atualizados com dados reais!');
  } catch (error) {
    console.error('Erro ao carregar sensores:', error);
  }
}

async function fetchSensores() {
  try {
    const response = await fetch('/sensores');
    const data = await response.json();

    if (data.length === 0) {
      console.log('Nenhum dado encontrado.');
      return;
    }

    // Último registro (supondo que os dados estão ordenados do mais antigo para o mais recente)
    const latestSensor = data[data.length - 1];

    // Atualizar valores atuais
    const tempElement = document.querySelector('.card .sensor-value');
    const humidElement = document.querySelectorAll('.card .sensor-value')[1];

    tempElement.textContent = `${latestSensor.temperature}°C`;
    humidElement.textContent = `${latestSensor.humidity}%`;

    console.log('Valores atualizados com dados reais!');

    // Atualizar os gráficos com base nos dados
    const tempChartLabels = [];
    const tempChartData = [];
    const humidChartData = [];

    data.forEach(sensor => {
      const time = new Date(sensor.created_at).toLocaleTimeString();
      tempChartLabels.push(time);
      tempChartData.push(sensor.temperature);
      humidChartData.push(sensor.humidity);
    });

    tempChart.data.labels = tempChartLabels;
    tempChart.data.datasets[0].data = tempChartData;
    tempChart.update();

    humidChart.data.labels = tempChartLabels;
    humidChart.data.datasets[0].data = humidChartData;
    humidChart.update();
  } catch (error) {
    console.error('Erro ao carregar sensores:', error);
  }
}


setInterval(fetchSensores, 0); // Atualiza a cada 0 segundos


//===========================================================================
// async function fetchSensores() {
//   try {
//     const response = await fetch('/sensores');
//     const data = await response.json();

//     // Supondo que você queira exibir os dados na tela
//     console.log(data);
//     const sensoresList = document.getElementById('sensores-list');
//     data.forEach(sensor => {
//       if (sensor.temperature) {
//         const tempElement = document.querySelector('.card .sensor-value');
//         tempElement.textContent = `${sensor.temperature}°C`;
//       }
//       if (sensor.humidity) {
//         const tempElement = document.querySelectorAll('.card .sensor-value')[1];
//         tempElement.textContent = `${sensor.humidity}%`;
//       }


//       // const listItem = document.createElement('li');
//       // listItem.textContent = `Sensor ID: ${sensor.id}, Temp: ${sensor.temperature}, Hum: ${sensor.humidity}`;
//       // sensoresList.appendChild(listItem);
//     });
//   } catch (error) {
//     console.error('Erro ao carregar sensores:', error);
//   }
// }
//===========================================================================


// Chamar a função ao carregar a página
document.addEventListener('DOMContentLoaded', fetchSensores);

let isDarkMode = false;

function toggleTheme() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  updateCharts();
}

let currentButton = null; // Track current button being toggled

function confirmLightToggle(button) {
  const confirmation = window.confirm("Você tem certeza que deseja alternar o estado da luz?");
  if (confirmation) {
    currentButton = button;
    executeLightToggle();
  }
}


// async function fetchStatesFromDB() {
//   try {
//     const response = await fetch('https://your-api-endpoint/states');
//     const data = await response.json();
//     updateDeviceStates(data);
//   } catch (error) {
//     console.error('Error fetching states:', error);
//   }
// }

// import supabase  from './supabase.js';

// async function fetchStatesFromDB() {
//   try {
//     // Query para obter os estados dos dispositivos
//     const { data, error } = await supabase
//       .from('sensores') // Nome da sua tabela no Supabase
//       .select('*'); // Ajuste os campos necessários

//     if (error) {
//       throw new Error(error.message);
//     }

//     // Atualizar estados na interface
//     updateDeviceStates(data);
//   } catch (error) {
//     console.error('Error fetching states:', error);
//   }
// }

async function updateSensorValues() {
  try {
    // Requisição para obter os dados mais recentes dos sensores
    const response = await fetch('/sensores'); // Ajuste a URL conforme sua API
    const data = await response.json();

    // Supondo que você tenha um array de sensores, você pode pegar os dados de cada um
    const sensor = data; // Primeiro sensor da lista (ajuste conforme seu caso)

    // Atualiza a temperatura
    if (sensor.temperature) {
      const tempElement = document.querySelector('.card .sensor-value');
      tempElement.textContent = `${sensor.temperature}°C`;
    }

    // Atualiza a umidade
    if (sensor.humidity) {
      const humidElement = document.querySelectorAll('.card .sensor-value')[1]; // Segunda .sensor-value
      humidElement.textContent = `${sensor.humidity}%`;
    }

    // Atualiza o estado do ventilador
    if (sensor.fan) {
      const fanElement = document.querySelectorAll('.card .sensor-value')[2]; // Terceira .sensor-value
      fanElement.textContent = sensor.fan === '1' ? 'On' : 'Off';
    }

    // Caso você tenha outros controles, pode seguir a mesma lógica
    // Exemplo para atualizar o status de um outro controle
    if (sensor.light) {
      const lightElement = document.querySelector('.card .sensor-value'); // Ajuste o índice conforme sua estrutura
      lightElement.textContent = sensor.light === '1' ? 'On' : 'Off';
    }

  } catch (error) {
    console.error('Erro ao atualizar os sensores:', error);
  }
}


// Modify the sendToESP function to update database
async function sendToESP(sensor, value) {
  try {
    const response = await fetch('https://your-api-endpoint/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sensor,
        value
      })
    });

    if (!response.ok) {
      throw new Error('Failed to update state');
    }

    // Fetch latest states after update
    fetchStatesFromDB();

  } catch (error) {
    console.error('Error updating state:', error);
  }
}

// Add periodic state updates
function startStateUpdates() {
  fetchStatesFromDB(); // Initial fetch
  setInterval(fetchStatesFromDB, 5000); // Update every 5 seconds
}

// Call this when page loads
document.addEventListener('DOMContentLoaded', startStateUpdates);

function updateCharts() {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: isDarkMode ? '#e0e0e0' : '#2c3e50'
        }
      },
      x: {
        grid: {
          color: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          color: isDarkMode ? '#e0e0e0' : '#2c3e50'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  };

  new Chart(document.getElementById('tempChart'), {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        data: [],
        borderColor: isDarkMode ? '#2980b9' : '#3498db',
        tension: 0.4,
        fill: false
      }]
    },
    options: chartOptions
  });

  new Chart(document.getElementById('humidChart'), {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        data: [],
        borderColor: isDarkMode ? '#27ae60' : '#2ecc71',
        tension: 0.4,
        fill: false
      }]
    },
    options: chartOptions
  });
}

// Initial setup
updateCharts();

function toggleVideoFeed(active) {
  const videoFeed = document.getElementById('videoFeed');
  if (active) {
    videoFeed.innerHTML = '<img src="http://esp8266-camera-url/stream" style="max-width: 100%; height: auto;" alt="Live video feed">';
  } else {
    videoFeed.innerHTML = 'Video Feed';
  }
}

function executeLightToggle() {
  if (currentButton) {
    currentButton.classList.toggle('active');
    const isActive = currentButton.classList.contains('active');
    const control = currentButton.dataset.control;
    currentButton.closest('.card').querySelector('.button-status').textContent = isActive ? 'ON' : 'OFF';

    if (control === 'camera') {
      toggleVideoFeed(isActive);
    } else if (control === 'fan') {
      const speedSlider = document.getElementById('fanSpeed');
      speedSlider.disabled = !isActive;
      if (!isActive) {
        speedSlider.value = 0;
        sendToESP('fan-speed', 0);
      }
    } else {
      sendToESP(control, isActive ? '1' : '0');
      return;
    }
  }
  cancelLightToggle();
}

// Add to fan speed control
document.getElementById('fanSpeed').addEventListener('change', function (e) {
  const speed = parseInt(e.target.value);
  sendToESP('fan-speed', speed);
});

// Update location time every second
function updateLocationTime() {
  const now = new Date();
  const options = {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  };
  document.getElementById('locationTime').textContent =
    `${now.toLocaleDateString('en-US', options)}`;
}

// Simulate motion detection
function simulateMotion() {
  const motionDot = document.getElementById('motionDot');
  const hasMotion = Math.random() > 0.5;
  motionDot.classList.toggle('motion-active', hasMotion);
}

setInterval(updateLocationTime, 1000);
setInterval(simulateMotion, 3000);

// Initial calls
updateLocationTime();
simulateMotion();