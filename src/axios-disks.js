import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://diskscatalog.firebaseio.com/',
});

export default instance;
