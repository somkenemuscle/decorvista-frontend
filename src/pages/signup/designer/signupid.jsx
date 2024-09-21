import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {  useSnackbar } from 'notistack';
import axiosInstance from '../../../lib/axiosInstance';
import axios from 'axios';
import Loader from '../../../components/Loader';
import useUserStore from '../../../stores/store';
function Signupid() {
    const {  setUsername } = useUserStore(); // Access global state and setter from Zustand
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [loading, setLoading] = useState(false);

    const [about, setAbout] = useState('');
    const router=useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (e) => {
        setLoading(true);

        e.preventDefault();
        try {

            const response = await axiosInstance.post('/auth/designer/signup', {
                fullname: fullName,
                email,
                password,
                portfolio: portfolioLink,
                phoneNumber,
                specialization,
                about,
            });
            setAbout('')
            setEmail('')
            setFullName('')
            setPassword('')
            setPhoneNumber('')
            setPortfolioLink('')
            setSpecialization('')
            enqueueSnackbar(response.data.message, { variant: 'success' })
            setUsername("yessssssss")
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
            enqueueSnackbar(errorMessage,{variant:'error'})

        } finally {
        setLoading(false);

            // Hide the loader after request is complete (either success or error)
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '130vh' }}>
            <div className="card" style={{ width: '400px' }}>
                <div className="card-body">
                    <h4 className="text-center">Sign Up As A Designer</h4>
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
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="portfolioLink" className="form-label">Portfolio Link (Optional)</label>
                            <input
                                type="url"
                                className="form-control"
                                id="portfolioLink"
                                value={portfolioLink}
                                onChange={(e) => setPortfolioLink(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="specialization" className="form-label">Specialization</label>
                            <input
                                type="text"
                                className="form-control"
                                id="specialization"
                                value={specialization}
                                onChange={(e) => setSpecialization(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="about" className="form-label">About You</label>
                            <textarea
                                className="form-control"
                                id="about"
                                rows="3"
                                value={about}
                                onChange={(e) => setAbout(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-dark w-100 d-flex justify-content-center align-items-center">Sign Up  {loading && <span className="ml-3"> <Loader /> </span>}</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signupid;
