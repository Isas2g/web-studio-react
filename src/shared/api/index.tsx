import axios from 'axios';
// import https from 'https';

const instance = axios.create({
  baseURL: 'https://poly-web.ru:8443/api/v1/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false,
  // }),
  withCredentials: true,
  proxy: {
    host: 'https://poly-web.ru:8443/api/v1/',
    port: 443,
    protocol: 'https',
  },
});

export default instance;
