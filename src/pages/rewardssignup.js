import AppContext from '@/providers';

import React, {useContext, useState} from 'react';
import { CloseCircleOutline } from 'react-ionicons'



export default function RewardsSignup({Component, pageProps}) {
    const { agecheck } = useContext(AppContext);
    const { showsignup, setsignup } = useContext(AppContext);
    return showsignup ? (
        <div className="rewardssignup_wrapper">
            <div className="rewardssignup_inner">
                <div className="rs_box">
                    <div className="rs_title vault">Daily Deals</div>
                    <div className="rs_more vault">Check out our $70 ounces as well as our other <span className="dd_red">daily deals</span></div>
                    <div className="rs_email_signup">
                        <div className="rs_signup_row">
                            <input/><a className="rs_button">submit</a>
                        </div>
                        <div className="rs_signup_text vault">
                            sign up for weekly specials and more!
                        </div>
                    </div>
                    <div className="rs_signup_close"
                        onClick={()=>{
                            setsignup(false);
                        }}
                    >
                        <CloseCircleOutline
                            color={'#00000'} 
                            height="25px"
                            width="25px"
                            />
                    </div>
                </div>
            </div>
        </div>
    ) : null
} 