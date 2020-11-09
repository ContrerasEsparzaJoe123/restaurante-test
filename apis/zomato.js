import axios from 'axios';
export default axios.create({
  baseURL: 'https://developers.zomato.com/api/v2.1',
  headers: {
    'user-key': '7815c7d4dd4ad6c3ec0279f84688c95c',
  },
});
