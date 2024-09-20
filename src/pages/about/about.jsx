import React from 'react';
import '../../styles/about.css';
import Footer from '../../components/footer/footer';
import useSlideAnimation from '../../animation/useSlideAnimation';
import { Link } from 'react-router-dom';

function About() {
  useSlideAnimation();
  return (
    <div>
      <div id='about-hd-img'>
        <h3>ABOUT US</h3>
      </div>

      <div style={{ textAlign: 'center' }} className="about-bg hidden ">
        <div className="text">
          <nav className='about-breadcrumb' aria-label="breadcrumb">
            <ol className=" breadcrumb">
              <li className="breadcrumb-item active" aria-current="page"><Link to='/'>Home</Link></li>
              <li className="breadcrumb-item">About Us</li>
            </ol>
          </nav>

          <h4>OUR STORY</h4>
          <p>DecorVista is your ultimate destination for all things home decor, offering an exquisite range of curtains, blinds, wall art, lighting, furniture, and more.
            Since its founding in 1985, DecorVista has been a trailblazer in the world of interior design, synonymous with creativity and quality.
          </p>
          <p>
            Expanding into homes and businesses across multiple cities, DecorVista remains committed to delivering premium decor solutions and personalized design services.
            At DecorVista, we believe in transforming spaces to reflect your unique style, creating environments that inspire comfort and elegance.
          </p>
          <p>
            Discover DecorVista for an enchanting selection of home decor essentials and the latest trends. Each visit to our store promises inspiration and transformation.
            Our team of design experts is dedicated to helping you curate your dream space, ensuring that every customer leaves with the perfect touch of decor to enhance their surroundings.
          </p>

          <h4>OUR MISSION</h4>
          <p className="mission">Our mission at DecorVista is to revolutionize the home decor industry by offering top-tier products and services. Since our establishment in 1985,
            we have expanded to numerous cities, driven by the loyalty and trust of our customers. We aim to provide an extensive collection of high-quality decor items, setting the standard
            for creativity and innovation. Our commitment to excellent customer service ensures every experience with DecorVista is nothing short of exceptional. We strive to empower individuals
            to transform their living and working spaces, making each visit a journey of style and comfort.</p>

          <h4>ABOUT RETURNS</h4>
          <p className="return">
            DecorVista offers a 45-day return policy on all products. You may return any item within 45 days of purchase by visiting any of our locations.
            Once we receive your return, we will process it within 1-3 business days and send you a confirmation email. Please allow up to 14 days for your bank
            or credit card company to post the refund to your account.
          </p>

          <h4>ABOUT GETTING IN TOUCH</h4>
          <p className="return">
            We'd love to hear from you! Visit our contact page to find the best way to reach out with your inquiry.
            You can contact us via email or phone numbers listed on our contact page.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
