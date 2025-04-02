import React from 'react'
import {Link} from 'react-router-dom'

function Hero() {
    return (
        <div className='container'>
            <div className='row '>
                <h1 className='p-3 fs-2 text-center mb-3 mt-5'>We pioneered the discount broking model in India.
                    <br />Now, we are breaking ground with our technology.</h1>
            </div>
            <div className='row p-3 mt-4 border-top fs-6 text-muted  ' style={{ lineHeight: "1.8" }}>
                <div className='col p-5'>
                    <p>
                        We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                    <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.
                    </p>
                </div>
                <div className='col p-3'>
                    <p>
                        In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                    <p>Rainmatter, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                    <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.
                    </p>
                </div>


            </div>
            <div className='row border-top '>
                <h1 className='mt-5  text-center  '>People</h1>
            </div>
            <div className='row p-3  fs-6   ' style={{ lineHeight: "1.8" }}>
                <div className='col p-3 text-center'>
                     <img src='\media\images\illustration-businessman_53876-5856.avif'alt='photo'
                     style={{borderRadius:"100%", width:"40%"}}
                     />
                     <h4 className='mt-3'>Ayush Talpate</h4>
                     <h5 className='text-muted mt-3'>Founder, CEO</h5>
                </div>
                <div className='col p-3 text-muted mt-2'>
                    <p>
                        Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.</p>

                    <p>Connect on  <Link to={"/"}>Homepage</Link>  / TradingQnA / Twitter</p>


                </div>


            </div>

        </div>
    );
}

export default Hero;