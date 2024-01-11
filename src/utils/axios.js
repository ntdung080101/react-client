import axios from 'axios';

const GLOGBAL_AXIOS = axios.create({
    baseURL: 'http://127.0.0.1:3500'
});

if(localStorage.getItem('authToken') !== undefined && localStorage.getItem('AuthToken') !== ''){
    GLOGBAL_AXIOS.defaults.headers.common['Authorization'] = 'Bearer '+ localStorage.getItem('authToken');
}

export default GLOGBAL_AXIOS;