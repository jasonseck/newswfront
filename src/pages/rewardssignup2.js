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
                        <div className="rs_top_left">
                            <div className="rs_item">
                                <div className="rs_item_title">MEDICAL <span className="rs_item_day">MONDAY</span></div>
                                <div className="rs_item_desc">15% Off For Medical Patients</div>
                            </div>
                            <div className="rs_item">
                                <div className="rs_item_title">TIER 1 <span className="rs_item_day">TUESDAY</span></div>
                                <div className="rs_item_desc">$2 Off</div>
                            </div>
                            <div className="rs_item">
                                <div className="rs_item_title">WAX <span className="rs_item_day">WEDNESDAY</span></div>
                                <div className="rs_item_desc">20% Off Concentrates & Vapes</div>
                            </div>
                            <div className="rs_item">
                                <div className="rs_item_title">THURS<span className="rs_item_day">JAYS</span></div>
                                <div className="rs_item_desc">$1 Slim Pre-Roll w/ Any Purchase</div>
                            </div>

                        </div>
                        <div className="rs_top_right">
                        <div className="rs_item">
                                <div className="rs_item_title">FLOWER <span className="rs_item_day">FRIDAY</span></div>
                                <div className="rs_item_desc">$5/G All T3 | $7/G All T2</div>
                            </div>
                            <div className="rs_item">
                                <div className="rs_item_title">SHAKE & BAKE <span className="rs_item_day">SATURDAY</span></div>
                                <div className="rs_item_desc">20% Off All Flower</div>
                                <div className="rs_item_desc">With a Purchase of $25 or More</div>

                            </div>
                            <div className="rs_item">
                                <div className="rs_item_title">SUNDAY <span className="rs_item_day">FUNDAY</span></div>
                                <div className="rs_item_desc">20% Off All Edibles & Drinks</div>
                            </div>

                        </div>

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