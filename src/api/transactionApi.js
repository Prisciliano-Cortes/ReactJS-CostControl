import axios from 'axios';

const uri = 'https://nodejs-costcontrol-production.up.railway.app/api'

const transactionApi = axios.create({
    baseURL: uri
});

//* Create interceptors
transactionApi.interceptors.request.use(config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config
});

export default transactionApi;