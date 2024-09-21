import React from 'react'
import '../../styles/feedback.css'
import { Link } from 'react-router-dom';
import { useFeedback } from '../../context/feedbackContext';


function Feedback() {
    const { feedback } = useFeedback();
    return (

        <div id="carouselExample" className="feedback-carousel carousel slide">
            <h4 id='fb-hd'>What Our Customers Say</h4>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: 'black' }}></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next" style={{ marginLeft: '10px', marginRight: '10px' }}>
                <span className="carousel-control-next-icon" aria-hidden="true" style={{ color: 'black' }}></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="feedb carousel-inner">
                <div className="carousel-item active">
                    <div className="d-block w-100">
                        <p>"I recently purchased custom blinds from DecorVista, and they completely transformed the look of my living room. The quality is outstanding, and they fit perfectly. I’ve already gotten so many compliments on how elegant and modern my space looks now!"</p>
                        <h6><strong>Alamin. I</strong></h6>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <p>"DecorVistas curtains have added such a cozy and stylish touch to my bedroom. The fabric is top-notch, and the installation was so easy. I love how they control the lighting perfectly while still looking gorgeous. I couldn’t be happier with my purchase!"</p>
                        <h6><strong>Lionel Messi</strong></h6>
                    </div>
                </div>


                {feedback.map((item, index) => (
                    <div key={index} className="carousel-item">
                        <div className="d-block w-100">
                            <p>{item.message}</p>
                            <h6><strong>{item.name}</strong></h6>
                        </div>
                    </div>
                ))}

            </div>
            <Link to='/feedback'>
                <button id='review-btn'>Leave Review</button>
            </Link>

        </div>
    )
}

export default Feedback