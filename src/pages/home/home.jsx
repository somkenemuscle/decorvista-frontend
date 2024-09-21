import React from 'react'
import Carousel from '../../components/carousel/carousel';
import Footer from '../../components/footer/footer';
import ProductCards from '../../components/productCards/productCards';
import useSlideAnimation from '../../animation/useSlideAnimation';
import CategoryCard from '../../components/categorycard/categoryCard';
import '../../styles/home.css'
import Feedback from '../../components/feedback/feedback';
import { bestSellerProducts } from '../../database/bestsellers';
import { GiHouse, GiPaintBrush } from "react-icons/gi";


function Home() {
  //Fade in Animation
  useSlideAnimation();

  return (
    <div >
      {/* carousel section */}
      <section className='hidden'>
        <Carousel />
      </section>

      {/* shop by category */}
      <div className='container'>
        <section className='container hidden shop-by-category-container'>
          <CategoryCard />
        </section>
      </div>



      {/* best sellers section */}
      <section className='hidden' id='best-sellers-section'>
        <div className="container text-center">
          <h2>MEET OUR BEST SELLERS</h2>
          <div className="row">
            {bestSellerProducts.map((product, index) => (
              <div key={index} className="product-div col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                <ProductCards
                  src={product.imageSrc}
                  name={product.name}
                  price={product.price}
                  id={product.id}
                  category={product.category}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      <div id='imgg-p'>
        <h2 id='a'>Receive  custom proposals from multiple designers</h2>
        <p id='b'> Choose your favorite professional designer to help translate your vision.</p>
      </div>

      <div id='imgg-container'>

        <img id='imgg' alt="img" src="https://cdn.decorilla.com/imgp/png/a1ff2490-7b40-4dec-9f22-0d06b5e15c23/Online-interior-design-custom-proposals.png" />
      </div>



      {/* mission section */}
      <div className="hidden mission-container container text-center mt-6">
        <br />
        <br /><br /><br />
        <h4>About Our Products</h4>
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <span className='curtain-icon mission-icons'><GiHouse /></span>
            <p>Our curtains and blinds are crafted from premium, eco-friendly materials, designed to enhance both the style and energy efficiency of your home.</p>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <span className='design-icon mission-icons'><GiPaintBrush /></span>
            <p>Every product is customizable to fit your unique space, ensuring a perfect blend of functionality and aesthetic appeal that complements any room.</p>
          </div>
        </div>
      </div>



      {/* img section */}
      {/* <section className='img2-section hidden'>
        <div className="container">
          <div className="row">
            <div className="img2-text col-lg-6 col-md-6 col-sm-12">
              <h3>Our Upcoming Product </h3>
              <p>Our new hydration cream and serum set, which will be available from 2nd of june 2024, and would be going
                for a price of $132™.
              </p>
              <br />
              <button style={{
                marginTop: '16px'
              }}>SHOP SKINCARE</button>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 ' id='img-bg'>
            </div>
          </div>
        </div>
      </section> */}



      {/* feedback option */}
      <div className='hidden container'>
        <Feedback />
      </div>


      {/* footer section */}
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default Home