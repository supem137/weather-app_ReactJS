import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { env } from 'node:process';
import axios from 'axios';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('hi');
});

app.get('/currentdata', (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${env.OPEN_WEATHERMAP_API_KEY}&units=metric`
    )
    .then((respose) => res.json(respose.data));
});

app.get('/predicted', (req, res) => {
  const lat = req.query.lat;
  const lon = req.query.lon;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${env.OPEN_WEATHERMAP_FORECAST_API_KEY}&units=metric`
    )
    .then((respose) => res.json(respose.data));
});

app.get('/geocode', (req, res) => {
  const location = req.query.location;
  const options = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: { namePrefix: `${location}` },
    headers: {
      'X-RapidAPI-Key': `${env.WFT_GEO_DB_API_KEY}`,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  };

  try {
    axios.request(options).then((response) => {
      return res.json(response.data.data);
    });
  } catch (error) {
    console.error(error);
  }
});

app.listen(env.PORT, () => {
  console.log('Server is running ' + env.PORT);
});
