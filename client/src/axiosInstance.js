import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://zblog-api.adaptable.app/api/'
  // baseURL: 'http://localhost:5000/api/'
});

export default instance;
