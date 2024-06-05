import React, {useContext, useRef, useEffect} from 'react';
import AppContext from '@/providers';

import footer from '@/globalData/footer.json'
import Link from 'next/link';
import leaf from '@/img/Leaflylogo3.png'
export default function Footer() {
    console.log('LEAF',leaf)
    const { location, setlocation, clearlocation, locationlist,openlist,closelist } = useContext(AppContext);

    return (
        <div className='sw_footer_wrap container'>
            <div className="sw_footer_inner">
                <div className="sw_footer_top vault">SOUTHWEST CANNABIS</div>
                <div className="sw_footer_bottom">
                    <div className="sw_footer_columns">
                    <div className="sw_footer_column sw_footer_location sw_footer_mobile_top" style={{marginRight:40}}>
                    <img src={leaf.src} style={{width:'50px',marginBottom:10}}/>

                                <div className="sw_footer_location_address"><Link href="/locations">LOCATIONS</Link></div>
                                <div className="sw_footer_location_address"><Link href="/deals">DEALS</Link></div>
                                <div className="sw_footer_location_address"><Link href="/loyalty">REWARDS</Link></div>
                                <div className="sw_footer_location_address"><Link href={"/locations?store="+location.slug}>ORDER ONLINE</Link></div>
                                <div className="sw_footer_location_address"><Link href="/faq">FAQ</Link></div>
                                <div className="sw_footer_location_address"><Link href="">CONTACT</Link></div>

                        </div>

                        <div className="sw_footer_column sw_footer_location">
                            <div className="sw_footer_location_title">
                                TAOS
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">1033 Paseo Del Pueblo Sur</div>
                                <div className="sw_footer_hours">Mon - Sat | 9am - 8pm</div>
                                <div className="sw_footer_hours">Sun | 11am - 6pm</div>
                                <a className="sw_footer_location_address" href="tel:5757703639">575-224-3254</a>
                                <div><Link className="sw_footer_location_button" href="/locations?store=taos">MAP</Link></div>
                            </div>

                        </div>
                        <div className="sw_footer_column sw_footer_location">
                            <div className="sw_footer_location_title">
                                ESPANOLA
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">1205 N. Riverside Drive</div>
                                <div className="sw_footer_hours">Mon | 9am - 8pm</div>
                                <div className="sw_footer_hours">Tue - Thu | 9am - 7pm</div>
                                <div className="sw_footer_hours">Fri | 9am - 8pm</div>
                                <div className="sw_footer_hours">Sat | 10am - 7pm</div>
                                <div className="sw_footer_hours">Sun | 10am - 6pm</div>
                                <a className="sw_footer_location_address" href="tel:5057472908">505-747-2908</a>
                                <div><Link className="sw_footer_location_button" href="/locations?store=espanolanorth">MAP</Link></div>
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">421 S. Riverside Drive</div>
                                <div className="sw_footer_hours">Mon | 9am - 8pm</div>
                                <div className="sw_footer_hours">Tue - Thu | 9am - 7pm</div>
                                <div className="sw_footer_hours">Fri | 9am - 8pm</div>
                                <div className="sw_footer_hours">Sat | 10am - 7pm</div>
                                <div className="sw_footer_hours">Sun | 10am - 6pm</div>
                                <a className="sw_footer_location_address" href="tel:5057472644">505-747-2644</a>
                                <div><Link className="sw_footer_location_button" href="/locations?store=espanolasouth">MAP</Link></div>
                            </div>

                        </div>
                        <div className="sw_footer_column sw_footer_location">
                            <div className="sw_footer_location_title">
                                SANTA FE
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">1899 Cerillos Rd.</div>
                                <div className="sw_footer_hours">Mon - Sat | 9am - 8pm</div>
                                <div className="sw_footer_hours">Sun | 10am - 6pm</div>
                                <a className="sw_footer_location_address" href="tel:5053727046">505-372-7046</a>
                                <div><Link className="sw_footer_location_button" href="/locations?store=sfcerillos">MAP</Link></div>
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">604 N. Guadalupe</div>
                                <div className="sw_footer_hours">Mon - Sat | 9am - 8pm</div>
                                <div className="sw_footer_hours">Sun | 9am - 6pm</div>
                                <a className="sw_footer_location_address" href="tel:5057808764">505-780-8764</a>
                                <div><Link className="sw_footer_location_button" href="/locations?store=sfguad">MAP</Link></div>
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">507 Old Santa Fe Trail</div>
                                <div className="sw_footer_hours">Mon - Sat | 9am - 6pm</div>
                                <div className="sw_footer_hours">Sun | Closed</div>
                                <a className="sw_footer_location_address" href="tel:5057805391">505-780-5391</a>
                                <div><Link className="sw_footer_location_button" href="/locations?store=sfoldsantafetrail">MAP</Link></div>
                            </div>

                        </div>
                        <div className="sw_footer_column sw_footer_location">
                            <div className="sw_footer_location_title">
                                ALBUQUERQUE
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">9132 Montgomery Blvd.</div>
                                <div className="sw_footer_hours">Mon | 10am - 7pm</div>
                                <div className="sw_footer_hours">Tue - Wed | 10am - 6pm</div>
                                <div className="sw_footer_hours">Thu - Sat | 10am - 7pm</div>
                                <div className="sw_footer_hours">Sun | Closed</div>
                                <a className="sw_footer_location_address" href="tel:5054048885">505-404-8885</a>
                                <div><Link className="sw_footer_location_button" href="/locations?store=abqmontgomery">MAP</Link></div>
                            </div>
                            <div className="sw_footer_location_place">
                                <div className="sw_footer_location_address">101 98th St SW</div>
                                <div className="sw_footer_hours">Mon - Fri | 9am - 8pm</div>
                                <div className="sw_footer_hours">Sat | 10am - 8pm</div>
                                <div className="sw_footer_hours">Sun | 10am - 7pm</div>
                                <a className="sw_footer_location_address" href="tel:5054334174">505-433-4174</a>
                                <div><Link className="sw_footer_location_button" href="/locations?store=abq98th">MAP</Link></div>
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


