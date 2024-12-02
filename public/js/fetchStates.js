// Gráfico de temperatura
const tempChart = new Chart(document.getElementById('tempChart'), {
  type: 'line',
  data: {
    labels: [], // Os horários serão preenchidos pela função
    datasets: [{
      label: 'Temperature (°C)',
      data: [], // Dados reais de temperatura serão preenchidos
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      tension: 0.3,
      fill: true,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      x: { title: { display: true, text: 'Time' } },
      y: { title: { display: true, text: 'Temperature (°C)' } }
    }
  }
});

// Gráfico de umidade
const humidChart = new Chart(document.getElementById('humidChart'), {
  type: 'line',
  data: {
    labels: [], // Os horários serão preenchidos pela função
    datasets: [{
      label: 'Humidity (%)',
      data: [], // Dados reais de umidade serão preenchidos
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      tension: 0.3,
      fill: true,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      x: { title: { display: true, text: 'Time' } },
      y: { title: { display: true, text: 'Humidity (%)' } }
    }
  }
});

// async function fetchSensores() {
//   try {
//     const response = await fetch('/sensores');
//     const data = await response.json();

//     // Atualizar os valores dos gráficos
//     const currentTime = new Date().toLocaleTimeString();

//     data.forEach(sensor => {
//       if (sensor.temperature) {
//         // Atualizar gráfico de temperatura
//         tempChart.data.labels.push(currentTime);
//         tempChart.data.datasets[0].data.push(sensor.temperature);

//         // Limitar o número de pontos no gráfico
//         if (tempChart.data.labels.length > 10) {
//           tempChart.data.labels.shift();
//           tempChart.data.datasets[0].data.shift();
//         }
//         tempChart.update();
//       }

//       if (sensor.humidity) {
//         // Atualizar gráfico de umidade
//         humidChart.data.labels.push(currentTime);
//         humidChart.data.datasets[0].data.push(sensor.humidity);

//         // Limitar o número de pontos no gráfico
//         if (humidChart.data.labels.length > 10) {
//           humidChart.data.labels.shift();
//           humidChart.data.datasets[0].data.shift();
//         }
//         humidChart.update();
//       }
//     });
//   } catch (error) {
//     console.error('Erro ao carregar sensores:', error);
//   }
// }


