import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://45.141.78.221:3000/api/v1/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
