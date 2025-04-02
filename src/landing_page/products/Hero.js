import React from 'react'
function Hero() {
    return (  
        <div className='contaner text-center p-5 mt-5 text-muted border-bottom mb-3'>
            <div className='row'>
                <h1>StockZen Products</h1>
                <h4 className='mt-3'>Sleek, modern, and intuitive trading platforms</h4>
                <p className='mt-3 mb-5'>Check out our investment <a href='.' style={{textDecoration:"none"}}>offerings →</a></p>
            </div>
        </div>
    );
}

export default Hero;