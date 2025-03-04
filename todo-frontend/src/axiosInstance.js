import axios from 'axios';

const axiosInstance = axios.create();

// Attach Datadog headers manually
axiosInstance.interceptors.request.use((config) => {
    return config;
});

export default axiosInstance;
