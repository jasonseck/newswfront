import React, {useContext, useEffect} from 'react';
import { setCookie, getCookie,deleteCookie } from 'cookies-next';
import AppContext from '../providers';
const vid = require('../img/Leaflylogo3.png')
export default function AgeCheck() {
    const { agecheck, setagecheck, agedeclined, setagedeclined, setsignup } = useContext(AppContext);
    return (
        <div className="agecheck_wrapper">
            <div className="agecheck_inner">
                <video src="/amovie.mp4" autoPlay loop muted playsInline className="video_panel_video" poster="/facility_poster_blur.jpg"/>
                <div className="agecheckbox">
                    <div className="agechecklogo"><img src="/sw_logo_set_005.png"/></div>
                    <div className="agechecktitle vault">Please verify your age</div>
                    {!agedeclined ? (
                    <div className="agecheckquestion">Are you over the age of 21?</div>

                    ): (
                        <>
                        <div className="agecheckquestion">Sorry, you must be over 21 to access this website.</div>
                        {cs.get("swagegate") ? (<div>we have is</div>) : (<div>no cookie set</div>) }
                        </>
                    )}
                    <div className="agecheckbuttonswrap">
                    <div className="agecheckbutton vault"
                        onClick={()=>{
                            console.log('clicked')
                            setCookie('swagegate', true)
                            setagecheck();
                            setsignup(true);

                        }}
                    >
                        YES
                    </div>
                    <div className="agecheckbutton vault"
                        onClick={()=>{
                            setagedeclined();
                        }}
                    >
                        NO
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

