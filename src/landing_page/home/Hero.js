import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='homehero' className='mb-5'/>
                <h1 className='mt-5'>Invest is Everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                
                {/* Correcting the Link */}
                <Link to="/singup" className="btn btn-primary p-20 fs-5 mb-5" style={{width:"25%", margin:"0 auto"}}>
                    Signup Now
                </Link>
            </div>
        </div>
    );
}

export default Hero;
