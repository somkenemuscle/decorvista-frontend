import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import '../../styles/navbar.css';
import { GiThreeLeaves } from "react-icons/gi";
import useUserStore from '../../stores/store';
import { useSnackbar } from 'notistack';

function Navbar() {
    const { foundUsername, setUsername } = useUserStore(); // Access global state and setter from Zustand
    const { enqueueSnackbar } = useSnackbar();
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage the navbar toggle
    const location = useLocation(); // Hook to detect route changes

    useEffect(() => {
        const username = localStorage.getItem('fullname');
        if (username) {
            setUsername(username); // Set global username state
        }
    }, [setUsername]); // Only run on component mount

    useEffect(() => {
        // Close the menu when the route changes
        setIsMenuOpen(false);
    }, [location]); // Runs every time the route changes

    function handleLogout() {
        localStorage.removeItem('fullname');
        setUsername('');
        enqueueSnackbar('Log Out Successful', { variant: 'success' });
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg">
                <div className="navbar-container container">
                    <Link className="navbar-brand" to="/">
                        <GiThreeLeaves />
                        <div className="main-text">DECOR</div>
                        <div className="sub-text">VISTA</div>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded={isMenuOpen}
                        aria-label="Toggle navigation"
                        onClick={toggleMenu}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/products">Products</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/products/curtain">Curtain</Link></li>
                                    <li><Link className="dropdown-item" to="/products/furniture">Furniture</Link></li>
                                    <li><Link className="dropdown-item" to="/products/lighting">Lighting</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/designer">Designers</Link>
                            </li>
                            {foundUsername ? (
                                <li className="nav-item">
                                    <Link className="nav-link" onClick={handleLogout} aria-current="page" to="/login">Logout</Link>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/login">Login</Link>
                                </li>
                            )}
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/cart">Cart</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default Navbar;
