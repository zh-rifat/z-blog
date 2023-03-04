import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://zblog-api.adaptable.app/api/'
});

export default instance;
