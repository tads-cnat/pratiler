import axios from 'axios';
import { getCsrf, setCsrf } from './authStore';

// export const internalAxios = axios.create({
//     baseURL: "http://localhost:8000/api/"
// });

const token = await getCsrf();
axios.interceptors.request.use(
    async (config) => {
        console.log(config)
        if(!token || token !== config.headers["X-Csrftoken"]) await setCsrf();
        return config;
    }
)

// const externalAxios = axios.create({
//     baseURL: ""
// })