import AppContext from '@/providers';

import React, {useContext, useState} from 'react';
import { CloseCircleOutline } from 'react-ionicons'




export default function RewardsSignup({Component, pageProps}) {
    const { agecheck } = useContext(AppContext);
    const { showsignup, setsignup } = useContext(AppContext);
    return showsignup ? (
        <div className="rewardssignup_wrapper">
            <div className="rewardssignup_inner">
                <div className="rs_box2">
                    <div className="rs_box_top">
                        <img src="/ds_top@2x.jpg"/>
                    </div>
                    <div className="rs_box_bottom">
                    <div className="rs_email_signup">
                        <div className="rs_signup_text vault">
                            sign up for weekly specials and more!
                        </div>

                        <div className="rs_signup_row">
                            <input/><a className="rs_button"
                                                    onClick={()=>{
                                                        setsignup(false);
                                                    }}
                            
                            >submit</a>
                        </div>
                    </div>
                    <div className="rs_signup_close"
                        onClick={()=>{
                            setsignup(false);
                        }}
                    >
                        <CloseCircleOutline
                            color={'#f0f0f0'} 
                            height="25px"
                            width="25px"
                            />
                    </div>

                    </div>
                </div>
            </div>
        </div>
    ) : null
} 