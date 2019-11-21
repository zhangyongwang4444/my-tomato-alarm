import axios from 'axios';
// import {createBrowserHistory} from 'history';

// const history = createBrowserHistory();
const appID = "eAQ5N5BM2iodni56TESfj2SW";
const appSecret = "Jq5sRZ5KBubwTBrGwYNhbsHi";

const instance = axios.create({
    baseURL: 'https://gp-server.hunger-valley.com/',
    // tslint:disable-next-line:object-literal-sort-keys
    headers: {
        't-app-id': appID,
        't-app-secret': appSecret
    }
});

// Add a request interceptor
instance.interceptors.request.use(config => {
    const xToken = localStorage.getItem('x-token');
    if (xToken) {
        config.headers.Authorization = `Bearer ${xToken}`
    }
    return config;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(response => {
    if (response.headers['x-token']) {
        localStorage.setItem('x-token', response.headers['x-token'])
    }
    return response;
}, error => {
    if (error.response.status === 401) {
        console.log("重定向");
        window.location.href = '/login'
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;