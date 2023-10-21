import axios from 'axios';
// import https from 'https';

const instance = axios.create({
  baseURL: 'http://45.141.78.221/api/v1/',
  timeout: 5000,
  headers: { 
    'Content-Type': 'application/json',
  },
  // httpsAgent: new https.Agent({
  //   rejectUnauthorized: false,
  // }),
  insecureHTTPParser: true
});

export default instance;
