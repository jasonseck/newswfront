import AppContext from '@/providers';

import React, {useContext, useState} from 'react';

export default function RewardsSignup({Component, pageProps}) {
    const { agecheck } = useContext(AppContext);
    const { showsignup, setsignup } = useContext(AppContext);
    return showsignup ? (
        <div className="rewardssignup_wrapper">
            <div className="rewardssignup_inner">
                <div className="rs_box">
                    <div className="rs_title vault">Daily Deals</div>
                    <div className="rt_more vault">Check out our $70 ounces as well as our other <span className="dd_red">daily deals</span></div>
                    <div className="rs_email_signup">
                        <div className="rs_signup_row">
                            <input/><button>submit</button>
                        </div>
                        <div className="rs_signup_text vault">
                            sign up for weekly specials and more!
                        </div>
                    </div>
                    <div className="rs_signup_close"
                        onClick={()=>{
                            setsignup(false);
                        }}
                    >X</div>
                </div>
            </div>
        </div>
    ) : null
} 