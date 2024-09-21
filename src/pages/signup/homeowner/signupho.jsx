import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles/signupH.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axiosInstance from '../../../lib/axiosInstance';
import Loader from '../../../components/Loader';
import useUserStore from '../../../stores/store';
import { Eye, EyeOff } from 'react-feather'; // Import Eye and EyeOff icons

function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setUsername } = useUserStore();

    const router = useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosInstance.post('/auth/home-owner/signup', {
                fullname: fullName,
                email,
                password,
            });
            setFullName('');
            setEmail('');
            setPassword('');
            enqueueSnackbar(response.data.message, { variant: 'success' });
            setUsername("yeahhhhh");
            router('/');
        } catch (error) {
            let errorMessage = 'An error occurred. Please try again.';
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    errorMessage = error.response.data?.error || error.response.data?.message || errorMessage;
                } else {
                    errorMessage = 'Network error. Please try again.';
                }
            }
            enqueueSnackbar(errorMessage, { variant: 'error' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row h-100">
                {/* Left Side: Sign Up Form */}
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div className="card" style={{ width: '400px' }}>
                        <div className="card-body">
                            <h2 className="text-center" style={{ fontWeight: '800' }}>Sign Up</h2>
                            <p className="text-center" style={{ color: 'grey', fontWeight: '300', marginBottom: '10%' }}>
                                Register with us as a  <span style={{ fontWeight: '500' }}>Home owner </span>!
                            </p>
                            <form onSubmit={handleSubmit} className="w-100">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        placeholder='Enter your full name'
                                        className="form-control small-placeholder"
                                        id="fullName"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        style={{ padding: '12px' }}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        placeholder='Enter your email'
                                        className="form-control small-placeholder"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        style={{ padding: '12px' }}
                                        required
                                    />
                                </div>
                                <div className="mb-3 position-relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Enter your password'
                                        className="form-control small-placeholder"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        style={{ padding: '12px' }}
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent"
                                        onClick={() => setShowPassword(!showPassword)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {showPassword ? (
                                            <EyeOff size={15} color="grey" />
                                        ) : (
                                            <Eye size={15} color="grey" />
                                        )}
                                    </button>
                                </div>
                                <button type="submit" className="btn btn-dark w-100 d-flex justify-content-center align-items-center" style={{ padding: '10px', fontSize: '14px' }}>
                                    Sign Up
                                    {loading && <Loader />}
                                </button>
                            </form>
                            <p className="text-center mt-3" style={{ padding: '4px', fontSize: '14px' }}>
                                Are you a designer? <Link to='/designer/signup'>Create an account here</Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Side: Image */}
                <div className="col-md-6 d-none d-md-block">
                    <img src="https://images.unsplash.com/photo-1615528650248-8630bcd26814?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sign Up Visual" className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    );
}

export default SignUp;
