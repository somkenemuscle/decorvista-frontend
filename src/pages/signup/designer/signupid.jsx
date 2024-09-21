import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import axiosInstance from '../../../lib/axiosInstance';
import axios from 'axios';
import Loader from '../../../components/Loader';
import useUserStore from '../../../stores/store';
import '../../../styles/signupD.css';
import { Eye, EyeOff } from 'react-feather'
// Assuming you have a CSS file for additional styles
import { Link } from 'react-router-dom';



function Signupid() {
    const { setUsername } = useUserStore();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [about, setAbout] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
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
            enqueueSnackbar(response.data.message, { variant: 'success' });
            setUsername("yessssssss");
            router('/');
        } catch (error) {
            console.error('Error occurred during signup:', error);
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
                    <div className="card" style={{ width: '100%', maxWidth: '500px' }}>
                        <div className="card-body">
                            <h2 className="text-center" style={{ fontWeight: '800' }}>Sign Up </h2>
                            <p className="text-center" style={{ color: 'grey', fontWeight: '300', marginBottom: '10%' }}>
                                Register as a designer with us here at Decorvista!
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control small-placeholder"
                                        style={{ padding: '12px' }}
                                        id="fullName"
                                        value={fullName}
                                        placeholder='Enter fullname'
                                        onChange={(e) => setFullName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control small-placeholder"
                                        style={{ padding: '12px' }}
                                        id="email"
                                        placeholder='Enter email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3 position-relative">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        className="form-control small-placeholder"
                                        id="password"
                                        value={password}
                                        style={{ padding: '12px' }}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder='Enter password'
                                        required
                                    />
                                    <button
                                        type="button"
                                        className="position-absolute end-0 bottom-40 translate-middle-y border-0 bg-transparent"
                                        style={{ cursor: 'pointer', right: '10px', top: '50%', transform: 'translateY(-50%)' }}

                                        onClick={() => setShowPassword(!showPassword)}

                                    >
                                        {showPassword ? (
                                            <EyeOff size={15} color="grey" />
                                        ) : (
                                            <Eye size={15} color="grey" />
                                        )}
                                    </button>
                                </div>
                                <div className="row">
                                    <div className="col-6 mb-3">
                                        <input
                                            type="tel"
                                            className="form-control small-placeholder"
                                            placeholder='Enter Phonenumber'
                                            style={{ padding: '12px' }}
                                            id="phoneNumber"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-6 mb-3">
                                        <input
                                            type="text"
                                            className="form-control small-placeholder"
                                            style={{ padding: '12px' }}
                                            placeholder='Enter Specialization'
                                            id="specialization"
                                            value={specialization}
                                            onChange={(e) => setSpecialization(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="url"
                                        className="form-control small-placeholder"
                                        style={{ padding: '12px' }}
                                        placeholder='Portfolio Link (Optional)'
                                        id="portfolioLink"
                                        value={portfolioLink}
                                        onChange={(e) => setPortfolioLink(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        className="form-control small-placeholder"
                                        placeholder='About'
                                        style={{ padding: '12px' }}
                                        id="about"
                                        rows="3"
                                        value={about}
                                        onChange={(e) => setAbout(e.target.value)}
                                    />
                                </div>

                                <button type="submit" className="btn btn-dark w-100 d-flex justify-content-center align-items-center" style={{ padding: '12px' }} >
                                    Sign Up {loading && <span className="ml-3"><Loader /></span>}
                                </button>
                            </form>
                            <p className="text-center mt-3 " style={{ padding: '4px', fontSize: '14px'}}>
                                Already have an account? <Link to='/login'>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Right Side: Image */}
                <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center">
                    <img src="https://images.unsplash.com/photo-1615875221248-d4b820203f97?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Design" className="img-fluid" style={{ height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>


    );
}

export default Signupid;
