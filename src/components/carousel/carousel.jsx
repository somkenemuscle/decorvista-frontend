import React from 'react';
import '../../styles/home.css';

function carousel() {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img src='https://images.unsplash.com/photo-1493857671505-72967e2e2760?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2>Bring Your Vision to Life</h2>
                            <p>Your designs deserve to be showcased, and we are here to help you turn your creativity into a lasting impact</p>
                            <button>JOIN AS A DESIGNER</button>

                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <div className="row">
                        <div className="col-xl-8 col-md-7 col-sm-12">
                            <img src='https://images.unsplash.com/photo-1533779283484-8ad4940aa3a8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className="img-fluid small-image d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-text-bg col-xl-4 col-md-5 col-sm-12">
                            <h2>Transform Your Space</h2>
                            <p>Find the perfect designs to create a home that reflects your style and personality.</p>
                            <button>EXPLORE DESIGNS</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default carousel