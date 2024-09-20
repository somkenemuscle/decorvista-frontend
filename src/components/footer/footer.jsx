import React from 'react';
import '../../styles/footer.css'

function Footer() {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-0.6"></i>DECORvista
                            </h6>
                            <p>
                                Decorvista is a company that provides a platform where homeowners and interior designers can 
                                reach out to one another and share common goals.
                            </p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Customer
                            </h6>
                            <p>
                                <a href="/contact" className="text-reset">Contact Us</a>
                            </p>

                            <p>
                                <a href="/about" className="text-reset">About Us</a>
                            </p>
                            <p>
                                <a href="/feedback" className="text-reset">Feedback</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Reach Us</h6>
                            <p><i className="fas fa-home me-1"></i>10b Rock, Ikoyi Nigeria</p>
                            <p><i className="fas fa-envelope me-1"></i>simplonbeauty@gmail.com</p>
                            <p><i className="fas fa-phone me-1"></i>+234 806 454 3589</p>

                        </div>
                    </div>
                </div>
            </section>
            <div className="footer-copyright text-center p-4">
                Copyright © 2024
                <br />
                <span>SIMPLON BEAUTY CARE</span>
            </div>
        </footer>
    );
}

export default Footer;
