import axios from 'axios';

export const internalAxios = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        'Content-Type': 'application/json',
    }
});

export const externalAxios = axios.create({
    baseURL: "",
    headers: {
        'Content-Type': 'application/json',
    }
});