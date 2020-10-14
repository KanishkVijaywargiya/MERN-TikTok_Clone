import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tiktok-mern-01.herokuapp.com/'
});

export default instance;