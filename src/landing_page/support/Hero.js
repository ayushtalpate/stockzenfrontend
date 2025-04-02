import React from 'react'
function Hero() {
    return ( 
        <div className='container-fluid text-light' id='supportHero'>
            <div className='row p-5 mt-5 mb-5'>
                <h4 className='mb-5'>Support Portal</h4>

                <div className='col-7'> 
                  <h4>Search for an answer or browse help topics to create a ticket</h4>
                  <div className="input-group mt-5" style={{height:"25%" ,border:"none"}}>
           
                       <input type="text" className="form-control " style={{border:"none"}} placeholder="Eg: How do i activivate F&O , why my order is rejected..."/>
                       <span className="input-group-text">
                         <i className="fas fa-search"></i>
                       </span>
                 </div>

                         <div className='mt-5 mb-5 '>
                             <a style={{textDecoration:"underline"}}>Track account opening  </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <a style={{textDecoration:"underline"}}>Track segment activation</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                             <a style={{textDecoration:"underline"}}>Intraday margins</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/>
                              <a style={{textDecoration:"underline"}} >Kite user manual</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                         </div>

                 </div>
                 <div className='col-1'></div>
            <div className='ml-4 col-4'> 
            <h4>Featured</h4>
               <ol className='fs-5'>
                  <li style={{textDecoration:"underline"}}>Rights Entitlements listing in February 2025</li>
                  <li className='mt-4' style={{textDecoration:"underline"}}>Latest Intraday leverages and Square-off timings</li>
               </ol>
            </div>
               
            </div>

            


        </div>
     );
}

export default Hero;