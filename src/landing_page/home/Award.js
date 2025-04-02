import React from 'react';

function   Award() {
    return (
        <div className='container mt-5 mb-5 '>
            <div className='row'>
              <div className='col-6  p-5' >
                <img src="media/images/largestBroker.svg" alt='imgoflargestBroker'/>
              </div>
              <div className='col-6 mt-3     p-5'>
                <h1>Largest Broker In India</h1>
                <p>2+ million Zerodha client cntribute to over 15% of all raintal ordr
                  volumes in India daily by tranding and investing in: </p>
                  <div className='row mt-5'>
                    <div className='col-6'>
                    <ul>
                    <li><p>Future and opstions</p></li>
                    <li><p>Compative Derivatives</p></li>
                    <li><p>Currency Derivatives</p></li>
                  </ul>
                    </div>
                    <div className='col-6'>
                    <ul>
                    <li><p>Stock and IPOs</p></li>
                    <li><p>Direct mutual fund</p></li>
                    <li><p>Bonds and Grows</p></li>
                  </ul>
                    </div>
                  </div>
                 <img src='media/images/pressLogos.png' alt='pressLogo' className='mt-5'style={{width:"90%"}}/> 
                  
              </div>

            </div>
        </div>
      );
}

export default   Award;

