import React, {useContext, useState, useEffect} from 'react';
import AppContext from '@/providers';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { LocationOutline } from 'react-ionicons'
export default function Locations(props) {
    const { location, setlocation, clearlocation, locationlist,listopen, togglelist, openlist, closelist } = useContext(AppContext);
    useEffect(()=>{
        return;
    },[])
    return (
        <div className="location_selector_wrap" style={{width:props.width}}>
            <div class="location_selector_inside">
                <div class="ls_left">
                    <LocationOutline className="location_marker" style={{color:'#f0efef'}}/>
                </div>
                <div class="ls_right">
                    <div className="ls_name">{location.name}</div>
                    <div className="ls_click" onClick={() => togglelist()}>(change)</div>
                </div>
            </div>
            <SlidingPane
                from="left"
                className="location_class"
                overlayClassName="location_overlay_class"
                isOpen={listopen}
                title="Hey, it is optional pane title.  I can be React component too."
                subtitle="Optional subtitle."
                width="50%"
                hideHeader={true}
                onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                closelist();
                }}
              >
                    <div className="locations_panel">
                    {locationlist.map((l,i)=>{
                        return (
                            <div className="ls_wrap">
                            <div className="ls_modal_name">{l.name}</div>
                            <div className="ls_address">{l.address}</div>
                            <div className="ls_citystatezip">{l.city}, {l.state} {l.zip}</div>
                            <div className="ls_button"
                                onClick={()=>{
                                    setlocation(locationlist[i]);
                                    closelist();
                                }}
                            >
                                select
                            </div>
                            </div>
                        )
                    })}
                    </div>

              </SlidingPane>
        </div>
    )
}

