import React from 'react';
import '../../styles/categoryCard.css';
import { Link } from 'react-router-dom';

function CategoryCard() {
    return (
        <div className='category-container text-center'>
            <h3 style={{
                fontWeight: '800',
                marginTop: '15%',
                fontFamily: 'monospace',
                fontSize: '20px'

            }}>SHOP BY CATEGORY</h3>
            <div className='row justify-content-center'>
                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                    <Link to='products/curtain'>
                        <img
                            src="https://images.unsplash.com/photo-1505903601354-f92df1e5834b?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGN1cnRhaW58ZW58MHx8MHx8fDA%3D"
                            alt="Curtains"
                            className="image-hover"
                            style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                marginBottom: '10px'
                            }}
                        />
                    </Link>
                    <h5 className='category-text'>Curtains</h5>
                </div>

                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                    <Link to='products/furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVjb3J8ZW58MHx8MHx8fDA%3D"
                            alt="Furniture"
                            className="image-hover"
                            style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                marginBottom: '10px'
                            }}
                        />
                    </Link>
                    <h5 className='category-text'>Furnitures</h5>
                </div>

                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                    <Link to='products/lighting'>
                        <img
                            src="https://images.unsplash.com/photo-1496688519089-de7d4b5c05d7?w=&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGlnaHR8ZW58MHx8MHx8fDA%3D"
                            alt="Home Decor"
                            className="image-hover"
                            style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                marginBottom: '10px'
                            }}
                        />
                    </Link>
                    <h5 className='category-text'>Lightings</h5>
                </div>
            </div>

        </div>

    )
}

export default CategoryCard