import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://45.141.78.221/api/v1/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export default instance;
