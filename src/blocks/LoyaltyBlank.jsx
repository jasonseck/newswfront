import React from 'react';

export default function LoyaltyBlank({}) {
    return (
        <div className="dm_wrap">
                <div className="dm_top_header">
                    <img src="/loyalty@2x.png"/>
                </div>
                <div className="dm_inner">
                    <div className="dm_section">
                        <div className="loy_header vault yellow">EARN 1 POINT FOR EVERY $1 SPENT</div>
                            <div className="loy_group" >
                                <div className="loy_line_title">150 POINTS = </div>
                                <div className="loy_line">$5 OFF</div>
                            </div>
                            <div className="loy_group" >
                                <div className="loy_line_title">300 POINTS = </div>
                                <div className="loy_line">$10 OFF</div>
                            </div>
                            <div className="loy_group" >
                                <div className="loy_line_title">450 POINTS = </div>
                                <div className="loy_line">$15 OFF</div>
                            </div>
                            <div className="loy_group" >
                                <div className="loy_line_title">700 POINTS = </div>
                                <div className="loy_line">$20 OFF</div>
                            </div>
                            <div className="loy_group" >
                                <div className="loy_line_title">1000 POINTS = </div>
                                <div className="loy_line">$30 OFF</div>
                            </div>

                    </div>
                </div>
        </div>
    )
}