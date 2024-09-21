import React, { useState } from 'react';
import '../../styles/login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axiosInstance from '../../lib/axiosInstance';
import axios from 'axios';
import Loader from '../../components/Loader';
import useUserStore from '../../stores/store';


function Login() {
    const { setUsername } = useUserStore(); // Access global state and setter from Zustand

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useNavigate();
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (e) => {
        // Show loader before making the request
        setLoading(true);
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/signin', {
                email,
                password,
            });
            const { fullname } = response.data
            setUsername('fullname')
            if (fullname) {
                localStorage.setItem('fullname', fullname)
            }
            setEmail('')
            setPassword('')
            enqueueSnackbar(response.data.message)
            router('/')



            console.log(response.data); // Handle success (e.g., redirect, show a message)
        } catch (error) {
            console.error('Error occurred during signin:', error);

            // Default error message
            let errorMessage = 'An error occurred. Please try again.';

            // Check if the error is an Axios error
            if (axios.isAxiosError(error)) {
                // Check for a response error
                if (error.response) {
                    // Extract message from response if available
                    const responseMessage = error.response.data?.error;
                    if (responseMessage) {
                        errorMessage = responseMessage;
                    } else {
                        errorMessage = error.response.data?.message || errorMessage;
                    }
                } else {
                    // Handle cases where no response is available (e.g., network errors)
                    errorMessage = 'Network error. Please try again.';
                }
            } else {
                // Handle unexpected error types
                errorMessage = 'An unexpected error occurred. Please try again later.';
            }
            enqueueSnackbar(errorMessage, { variant: 'error' })

        } finally {
            // Hide the loader after request is complete (either success or error)
            setLoading(false);
        }

    }




    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
            <div className="card" style={{ width: '400px' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Login</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-dark w-100 d-flex justify-content-center align-items-center">
                            Login
                            {loading && <Loader />}
                        </button>

                    </form>
                    <p id='fff'>Don't have an account? <Link to='/homeowner/signup'>SignUp</Link> </p>
                </div>
            </div>
        </div>
    );

}
export default Login;
