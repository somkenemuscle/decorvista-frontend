import React, { useState } from 'react';
import axios from 'axios';
import '../../../styles/signupH.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {  useSnackbar } from 'notistack';


function SignUp() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router =useNavigate();
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/api/auth/home-owner/signup', {
                fullname:fullName,
                email,
                password,
            });
            setPassword('')
            setEmail('')
            setPassword('')
            enqueueSnackbar(response.data.message)
            router('/')
           
        } catch (error) {
            console.error('Error signing up:', error); // Handle error (e.g., show a message)
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
                        <button type="submit" className="btn btn-dark w-100">Sign Up</button>
                    </form>
                    <p>Are you a designer? <Link to='/designer/signup'>Signup here</Link> </p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
