import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signupid() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [portfolioLink, setPortfolioLink] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [about, setAbout] = useState('');
    const router=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('http://localhost:4000/api/auth/designer/signup', {
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
            router('/')

            console.log(response.data); // Handle success
        } catch (error) {
            console.error('Error signing up:', error); // Handle error
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
                        <button type="submit" className="btn btn-dark w-100">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signupid;
