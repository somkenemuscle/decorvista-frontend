// utils/axiosInstance.js
import axios from 'axios';


// Create an instance of axios with default settings
const axiosInstance = axios.create({
    baseURL: 'https://decorvista-backend.vercel.app/api',
    withCredentials: true,
});

// Handle responses or errors globally
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const { response } = error;
        const originalRequest = response?.config;

        // Check if the error status is 401 and if it is related to token expiration
        if (response?.status === 401 && !originalRequest?._retry) {
            originalRequest._retry = true;
            const errorCode = response.data?.code;

            // Only handle token refresh if the error message indicates token expiration on unauthorized
            if (errorCode === 'UNAUTHORIZED_ISLOGGEDIN_ACCESS') {
                try {
                    await axios.post('https://decorvista-backend.vercel.app/api/auth/token', {}, { withCredentials: true });
                    return axiosInstance(originalRequest);
                } catch (refreshError) {
                    console.error('Token refresh error:', refreshError);

                    // If the refresh fails, reject the original error and possibly redirect to login
                    return Promise.reject(refreshError);
                }
            }
        }
        // If it is another type of error or the refresh failed, reject the promise with the error
        return Promise.reject(error);
    }
);

export default axiosInstance;