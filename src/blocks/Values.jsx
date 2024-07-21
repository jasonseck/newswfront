import React, {useContext, useRef, useEffect} from 'react';
import AppContext from '../providers';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Values({values,showbutton,buttontext,buttonlink}) {
    const { location, setlocation, clearlocation, locationlist,openlist,closelist } = useContext(AppContext);
    console.log('THE LOCATIONS IS HERE',location)
    return (
        <div className="values_panel_wrap container">
            <div className="values_inner">
                <div className="values_header_wrap">
                <div className="values_header vault">OLD SCHOOL STRAINS, NEW SCHOOL CUTS</div>
                <div className="about_panel_body" style={{textAlign:'center',maxWidth:750,margin:'auto'}}>
                Founded over a decade ago, Southwest Cannabis has long been a pioneering force in New Mexico's cannabis industry. With a focus on quality, integrity, and community, Southwest Cannabis remains committed to providing “seed to sale” cannabis products while advocating for social equity and responsible consumption.
                </div>
                </div>
                <div className="values_row">
                    {values.map(v=>{
                        return (
                            <div className="values_item">
                                <div className="values_item_image">
                                    <img src={v.image.url}/>
                                </div>
                                <div className="values_item_title vault">{v.valuetitle}</div>
                                <div className="values_item_description">{v.valuedescription}</div>
                            </div>
                        )
                    })}
                </div>
                {showbutton &&
                    <div className="values_button_row">
                        <div className="sw_button_solid">
                         {/* <Link href={"/locations?store="+location.slug} className="vault">{buttontext}</Link> */}
                         <Link href={`/locations?store=${location.slug}`} className="vault">{buttontext}</Link>

                        </div>
                    </div>
                }
            </div>
        </div>
    )
}