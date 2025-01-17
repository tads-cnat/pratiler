import axios from 'axios';

export const internalAxios = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        'Content-Type': 'application/json',
    }
});

// const externalAxios = axios.create({
//     baseURL: ""
// })