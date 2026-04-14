
import axios from "axios";
import { config } from "process";

const api = axios.create({
    baseURL : process.env.VITE_API_URL,

    headers : {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Redirect to login page
            // window.location.href = '/login';
            window.location.href = '/Auth/login?redirect=' + encodeURIComponent(window.location.pathname);
        }
        return Promise.reject(error);
    }
);

export const AuthApi = axios.create({
    baseURL : process.env.VITE_API_URL ,
    headers : {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default api;

