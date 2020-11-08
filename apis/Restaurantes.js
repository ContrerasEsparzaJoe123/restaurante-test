import axios from 'axios';

export default axios.create({
  baseURL: 'https://get-restaurantes.herokuapp.com/',
});
