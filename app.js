const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Replace 'YOUR_API_KEY' with your actual OpenWeatherMap API key
const apiKey = 'YOUR_API_KEY';
const city = 'Columbus,us';

app.get('/', (req, res) => {
  axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then((response) => {
      const weatherData = response.data;
      const temperature = (weatherData.main.temp - 273.15).toFixed(2); // Convert temperature from Kelvin to Celsius
      const weatherDescription = weatherData.weather[0].description;

      res.send(`Columbus Weather:<br>Temperature: ${temperature}°C<br>Description: ${weatherDescription}`);
    })
    .catch((error) => {
      res.status(500).send('An error occurred.');
    });
});

app.listen(port, () => {
  console.log(`Weather app listening at http://localhost:${port}`);
});
