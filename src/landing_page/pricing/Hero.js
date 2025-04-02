import React from 'react'
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        
        <div className='container'>
            <div className='row text-center'>
                <h1 className='p-3 fs-2 text-center mb-3 mt-5 '>Pricing</h1>
                <p className='text-muted'>
                    Free equity investments and flats  20 traday and F&o trades.
                </p>
            </div>
            <div className='row p-3 mt-3 border-top fs-6 mb-5 text-center border-bottom' style={{ lineHeight: "1.8" }}>
                <div className='col p-4'>
                   <img src='media/images/pricingEquity.svg'/> 
                   <h1 className='fs-2'>Free equity delivery</h1>
                   <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col p-4'>
                <img src='media/images/intradayTrades.svg'/> 
                   <h1 className='fs-2'>Intraday and F&O trades</h1>
                   <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col p-4'>
                <img src='media/images/pricingEquity.svg'/> 
                   <h1 className='fs-2'>Free direct MF</h1>
                   <p className='text-muted'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>


            </div>
            

        </div>
     );
}

export default Hero;