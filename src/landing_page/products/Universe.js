import React from 'react'
function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 '>
                <h1>The StockZen Universe</h1>
                <p className='mt-3 '>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row text-center mt-5'>
            <div className='col-4 p-3 text-center text-muted'>
                <img src='media/images/smallcaseLogo.png' />
                <p className='text-small text-muted'>Thematic investing platform
                 that helps you invest in diversified
                 baskets of stocks on ETFs..</p>
            </div>
            <div className='col-4 p-3'>
                <img src='media/images/streakLogo.png' style={{width:"45%" , height:"45%"}}/>
                <p className='text-small text-muted'>Systematic trading platform
that allows you to create and backtest
strategies without coding..</p>
            </div>
            <div className='col-4 p-3'>
                <img src='media\images\sensibullLogo.svg' style={{width:"45%" , height:"45%"}}/>
                <p className='text-small text-muted'>Options trading platform that lets you
create strategies, analyze positions, and examine
</p>
            </div>
            </div>


            <div className='row text-center mt-5'>
            <div className='col-4 p-3 text-center text-muted'>
                <img src='media\images\zerodhaFundhouse.png' style={{width:"55%" , height:"55%"}}/>
                <p className='text-small'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
.</p>
            </div>
            <div className='col-4 p-3'>
                <img src='media/images/goldenpiLogo.png' style={{width:"60%" , height:"55%"}}/>
                <p className='text-small text-muted'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more..</p>
            </div>
            <div className='col-4 p-3'>
                <img src='media/images/dittoLogo.png' style={{width:"45%" , height:"50%"}}/>
                <p className='text-small text-muted'>Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free.</p>
            </div>
            </div>
            
            <div className='text-center mt-5 mb-3'>
            <button type="button" className="btn btn-primary p-20 fs-5 mb-5 " style={{width:"25%", margin:"0 auto"}}>Singup Now</button>
            </div>

        </div>
     );
}

export default Universe;