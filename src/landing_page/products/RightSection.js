import React from 'react'
function RightSection({
    imageURL,
    prouductName,
    ProductDiscribtion,
    tryDemo,
    
}) {
    return ( 
        <div className='container'>
            <div className='row '>
                
                <div className='col-4 mt-5 p-3 '>
                    <h2>{prouductName}</h2>
                    <p>{ProductDiscribtion}</p>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
                </div>
                <div className='col-1'></div>

                <div className='col-7  '>
                    <img src={imageURL} style={{width:"90%", height:"80%" }} className='mr-5'/>
                </div>

            </div>
        </div>
     );
}

export default RightSection;