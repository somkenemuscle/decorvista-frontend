import React, { useState } from 'react';
import '../../styles/login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axiosInstance from '../../lib/axiosInstance';
import Loader from '../../components/Loader';
import useUserStore from '../../stores/store';
import axios from 'axios';
import { Eye, EyeOff } from 'react-feather'; // Import Eye and EyeOff icons

function Login() {
    const { setUsername } = useUserStore();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useNavigate();
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axiosInstance.post('/auth/signin', { email, password });
            const { fullname } = response.data;
            setUsername(fullname);
            if (fullname) {
                localStorage.setItem('fullname', fullname);
            }
            setEmail('');
            setPassword('');
            enqueueSnackbar(response.data.message, { variant: 'success' });
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
                {/* Left Side: Login Form */}
                <div className="col-lg-6 d-flex justify-content-center align-items-center">
                    <div className="card" style={{ width: '400px' }}>
                        <div className="card-body">
                            <h2 className="text-center" style={{ fontWeight: '800' }}>Welcome Back</h2>
                            <p className="text-center" style={{ color: 'grey', fontWeight: '300', marginBottom: '10%' }}>
                                We are glad to have you back here at Decorvista!
                            </p>

                            <form onSubmit={handleSubmit} className="w-100">
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
                                <button type="submit" style={{ padding: '10px' , fontSize: '14px' }} className="btn btn-dark w-100 d-flex justify-content-center align-items-center">
                                    Login
                                    {loading && <Loader />}
                                </button>
                            </form>

                            <p className="text-center mt-3 " style={{ padding: '4px', fontSize: '14px'}}>
                                Don't have an account? <Link to='/homeowner/signup'>SignUp</Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Side: Image */}
                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                    <img src="https://images.unsplash.com/photo-1615875221248-d4b820203f97?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Login Visual" className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    );
}

export default Login;
