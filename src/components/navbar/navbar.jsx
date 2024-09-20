import React from 'react'
import { Outlet, Link } from "react-router-dom";
import '../../styles/navbar.css'
import { GiThreeLeaves, GiShoppingCart } from "react-icons/gi";


function navbar() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-lg">
                <div className="navbar-container container">
                    <Link className="navbar-brand" to="/">
                        <GiThreeLeaves />
                        <div className="main-text">DECOR</div>
                        <div className="sub-text">VISTA</div>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <Link className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/products">Shop Products</Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/products/hair">Hair</Link></li>
                                    <li><Link className="dropdown-item" to="/products/jewellry">Jewellry</Link></li>
                                    <li><Link className="dropdown-item" to="/products/makeup">Makeup Kits</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about">Designers</Link>
                            </li>


                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about">Blogs</Link>
                            </li>




                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="#">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/cart">
                                    <GiShoppingCart /> </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export default navbar