import React from 'react'
function LeftSection({
    imageURL,
    prouductName,
    ProductDiscribtion,
    tryDemo,
    learnMore,
    googlePlay,
    appStore
}) {
    return ( 
        <div className='container'>
            <div className='row '>
                <div className='col-8 p-4'>
                    <img src={imageURL} style={{width:"70%", height:"90%"}}/>
                </div>
                <div className='col-4 mt-5 p-3'>
                    <h2>{prouductName}</h2>
                    <p>{ProductDiscribtion}</p>
                    <div className='container'>
                        <div className='row'>
                        <div className='col'>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>   <br/>
                    <a href={googlePlay} ><img src='media/images/googlePlayBadge.svg' className='mt-4' /></a>
                    </div>
                    
                    <div className='col'>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn more </a><br />
                    <a href={appStore}><img src='media/images/appstoreBadge.svg' className='mt-4'/></a>
                    </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
     );
}

export default LeftSection;