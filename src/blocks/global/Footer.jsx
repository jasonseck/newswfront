import React from 'react';
import footer from '@/globalData/footer.json'
import Link from 'next/link';
export default function Footer() {
    return (
        <div className='sw_footer_wrap container'>
            <div className="sw_footer_inner">
                <div className="sw_footer_top vault">SOUTHWEST CANNABIS TAOS, NM</div>
                <div className="sw_footer_bottom">
                    <div className="sw_footer_columns">
                    <div className="sw_footer_column sw_footer_location" style={{marginRight:40}}>
                                <div className="sw_footer_location_address">CONTACT</div>
                                <div className="sw_footer_location_address">ABOUT</div>
                                <div className="sw_footer_locaiton_button">EVENTS</div>
                                <div className="sw_footer_location_address">LOCATIONS</div>
                                <div className="sw_footer_location_address">FAQ</div>
                                <div className="sw_footer_locaiton_button">CAREERS</div>

                        </div>

                        <div className="sw_footer_column sw_footer_location">
                            <div className="sw_footer_location_title">
                                TAOS
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">1033 Paseo Del Pueblo Sur</div>
                                <div className="sw_footer_location_address">575-770-3639</div>
                                <div className="sw_footer_locaiton_button">MAP</div>
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">970 Paseo Del Pueblo Sur</div>
                                <div className="sw_footer_location_address">575-770-3639</div>
                                <div className="sw_footer_locaiton_button">MAP</div>
                            </div>

                        </div>
                        <div className="sw_footer_column sw_footer_location">
                            <div className="sw_footer_location_title">
                                ESPANOLA
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">1033 Paseo Del Pueblo Sur</div>
                                <div className="sw_footer_location_address">575-770-3639</div>
                                <div className="sw_footer_locaiton_button">MAP</div>
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">970 Paseo Del Pueblo Sur</div>
                                <div className="sw_footer_location_address">575-770-3639</div>
                                <div className="sw_footer_locaiton_button">MAP</div>
                            </div>

                        </div>
                        <div className="sw_footer_column sw_footer_location">
                            <div className="sw_footer_location_title">
                                SANTA FE
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">1033 Paseo Del Pueblo Sur</div>
                                <div className="sw_footer_location_address">575-770-3639</div>
                                <div className="sw_footer_locaiton_button">MAP</div>
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">970 Paseo Del Pueblo Sur</div>
                                <div className="sw_footer_location_address">575-770-3639</div>
                                <div className="sw_footer_locaiton_button">MAP</div>
                            </div>

                        </div>
                        <div className="sw_footer_column sw_footer_location">
                            <div className="sw_footer_location_title">
                                ALBUQUERQUE
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">1033 Paseo Del Pueblo Sur</div>
                                <div className="sw_footer_location_address">575-770-3639</div>
                                <div className="sw_footer_locaiton_button">MAP</div>
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">970 Paseo Del Pueblo Sur</div>
                                <div className="sw_footer_location_address">575-770-3639</div>
                                <div className="sw_footer_locaiton_button">MAP</div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            <div className="footer_copyright">©2024 Southwest Cannabis Taos, NM</div>
        </div>
    )
                {/* <div className="sw_footer_links">
                {footer.bottomNavLinks.map((link)=>{
                    return (
                    <div className="footer_link">
                        <Link href={link.link}>{link.label}</Link>
                    </div>
                    )
                })}
                </div>
                <div className="footer_copy">
                Founded over a decade ago, Southwest Cannabis has long been a pioneering force in New Mexico's cannabis industry. With a focus on quality, integrity, and community, Southwest Cannabis remains committed to providing “seed to sale” cannabis products while advocating for social equity and responsible consumption.
                </div> */}


}


