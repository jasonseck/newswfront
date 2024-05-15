import React from 'react';
import Link from 'next/link';
export default function Values({values,showbutton,buttontext,buttonlink}) {
    console.log("JUSTIFY",values)
    return (
        <div className="values_panel_wrap container">
            <div className="values_inner">
                <div className="values_header vault">NEW MEXICO'S FINEST</div>
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
                         <Link href={buttonlink} className="vault">{buttontext}</Link>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}