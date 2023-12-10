import axios from "axios";

const tgBotInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  proxy: {
    host: 'http://localhost',
    port: 8080,
    protocol: 'http',
  },
});

export default tgBotInstance;