import React from 'react'
function CreateTicket() {
    return ( 
        <div className='container mt-5'>
            <div className='row '>
                <h4 className='text-muted'>To create a ticket, select a relevant topic</h4>
            </div>
            <div className='row p-3 mt-3 border-top fs-6   ' style={{ lineHeight: "1.8" }}>
                <div className='col p-4'>
                   <h5><i className="fa-solid fa-circle-plus"></i> Account Opening</h5>
                  
                       <div className='p-4 fs-9'>
                       <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}> Getting started</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Online</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Offline</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Charges</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Company, Partnership and HUF</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Non Resident Indian (NRI)</a><br/>
                       </div>
                </div>
                <div className='col p-4 text-left'>
                 <h5><i class="fa-solid fa-user"></i>Your Zerodha Account</h5>
                 <div className='p-4 fs-9 text-muted'>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Login credentials</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Your Profile</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Account modification and  addition</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>CMR & DP ID</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Nomination</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Transfer and conversion of shares</a><br/>
                       </div>
                </div>
                <div className='col p-4'>
                <h5><i class="fa-solid fa-chart-bar"></i>Trading and Markets</h5>
                <div className='p-4 fs-9'>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Trading FAQs</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Kite</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Margins</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Product and order types</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Corporate actions</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Kite features</a><br/>
                       </div>
                </div>


            </div>

            <div className='row p-3   fs-6 mb-5  border-bottom' style={{ lineHeight: "1.8" }}>
                <div className='col p-4'>
                   <h5><i class="fa-regular fa-file"></i> Funds</h5>
                  
                       <div className='p-4 fs-9'>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}> Fund withdrawal</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Adding funds</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Adding bank accounts</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>eMandates</a><br/>
                       </div>
                </div>
                <div className='col p-4 text-left'>
                 <h5><i class="fa-solid fa-circle-notch"></i> Console</h5>
                 <div className='p-4 fs-9 text-muted'>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>IPO</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Portfolio</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Funds statement</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Profile</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Reports</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Referral program</a><br/>
                       </div>
                </div>
                <div className='col p-4'>
                <h5><i class="fa-solid fa-coins"></i>Coin</h5>
                <div className='p-4 fs-9'>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Understanding mutual funds and Coin</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Coin app</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Coin web</a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>Transactions and reports </a><br/>
                 <a href='.' style={{textDecoration:"none" ,lineHeight:"2"}}>
                 National Pension Scheme (NPS)</a><br/>
                       </div>
                </div>


            </div>
            

        </div>
     );
}

export default CreateTicket;