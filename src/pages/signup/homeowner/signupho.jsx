import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles/signupH.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axiosInstance from '../../../lib/axiosInstance';
import Loader from '../../../components/Loader';


function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const router = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (e) => {
        setLoading(true);

        e.preventDefault();
        try {
            const response = await axiosInstance.post('/auth/home-owner/signup', {
                fullname: fullName,
                email,
                password,
            });
            setPassword('')
            setEmail('')
            setPassword('')
            enqueueSnackbar(response.data.message)
            router('/')

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
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
            <div className="card" style={{ width: '400px' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">Sign Up as Homeowner</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 mt-4">
                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>
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
                        <button type="submit" className="btn btn-dark w-100">Sign Up  {loading && <span className="ml-3"> <Loader /> </span>}</button>
                    </form>
                    <p>Are you a designer? <Link to='/designer/signup'>Signup here</Link> </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
