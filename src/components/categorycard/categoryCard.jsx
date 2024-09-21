import React from 'react';
import '../../styles/categoryCard.css';
import { Link } from 'react-router-dom';

function CategoryCard() {
    return (
        <div className='category-container text-center'>
            <h3>SHOP BY CATEGORY</h3>
            <div className='row justify-content-center'>
                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                    <Link to='products/furniture'>
                        <img
                            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxhcmNoaXRlY3R1cmUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Curtains"
                            style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                marginBottom: '10px'
                            }}
                        />
                    </Link>
                    <h5 className='category-text'>Stairs</h5>
                </div>

                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                    <Link to='products/curtain'>
                        <img
                            src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVjb3J8ZW58MHx8MHx8fDA%3D"
                            alt="Blinds"
                            style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                marginBottom: '10px'
                            }}
                        />
                    </Link>
                    <h5 className='category-text'>Sofas</h5>
                </div>

                <div className='col-xl-3 col-lg-4 col-md-6 col-sm-6'>
                    <Link to='products/lighting'>
                        <img
                            src="https://images.unsplash.com/photo-1523575708161-ad0fc2a9b951?w=600&h=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGludGVyaW9yJTIwZGVjb3J8ZW58MHx8MHx8fDA%3D"
                            alt="Decor"
                            style={{
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                                borderRadius: '50%',
                                marginBottom: '10px'
                            }}
                        />
                    </Link>
                    <h5 className='category-text'>Home Decor</h5>
                </div>
            </div>
        </div>

    )
}

export default CategoryCard