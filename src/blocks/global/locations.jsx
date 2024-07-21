import React, {useContext, useState, useEffect} from 'react';
import AppContext from '../../providers';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { LocationOutline } from 'react-ionicons'
export default function Locations(props) {
    const { location, setlocation, clearlocation, locationlist,listopen, togglelist, openlist, closelist } = useContext(AppContext);

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });

      useEffect(() => {
        // only execute all the code below in client side
        // Handler to call on window resize
        function handleResize() {
          // Set window width/height to state
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
        
        // Add event listener
        window.addEventListener("resize", handleResize);
         
        // Call handler right away so state gets updated with initial window size
        handleResize();
        
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
      }, []);

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
                hideHeader={true}
                width={windowSize.width > 767 ? "50%" : "100%"}
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

