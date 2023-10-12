import axios from 'axios';
// import https from 'https';

const instance = axios.create({
  baseURL: 'http://viotrina.ru/api/v1/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false,
  // }),
  withCredentials: true,
  proxy: {
    host: 'http://45.141.78.221/api/v1/',
    port: 443,
    protocol: 'http',
  },
});

export default instance;
