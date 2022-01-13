import React from 'react'
import google_play from "./assets/img/google-play-badge.svg";
import app_store from "./assets/img/app-store-badge.svg";

const Part6 = () => {
    return (
    <div className='some_text2'>

        <div>
            <h3>Get the app now!</h3>

            <div className="btns" id='buttons'>

                    <div className='google_play '>
                        <img src={google_play} alt=""/>
                    </div>
                
                    <div>
                        <img src={app_store} alt="" className='app_store'/>
                    </div>

            </div> 
        </div>  
    </div>
    )
}

export default Part6
