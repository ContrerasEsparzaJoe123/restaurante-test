import axios from 'axios';
//Kx9DcW20pU1EooeDOtMwC0iiZm9nRds84eseaa5jJNzzpX7atnGfS-DlGlykySilI80EjmCX4wJQvHT7dvvLfBH87xattu63oPcanIgst3XwkRUm2CrbtpTYoEioX3Yx
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer H5DJvA1rZjuZIM6NrMOaXlR-4M2jj8QA-0BVPSNsVUWiCd-HlbDcbh6mzT-SlevODnjN9OCGMCNOx10QfQKs3_jENeEFBx7D7jIYZ6_f4ZFqOiqbrwOv6chpp8hOXXYx',
  },
});
