import React, {useContext, useState} from 'react';
import AppContext from '@/providers';


export default function Leafly({heading}) {
    const { location, setlocation, clearlocation, locationlist } = useContext(AppContext);

    return (
        <div className="leafly_panel_wrap container">
            <div className="leafly_panel_inner" style={{
            }}>
                <h2>{heading} - {location.name}</h2>
                <iframe id="leafly-embed-iframe" src="https://web-embedded-menu.leafly.com/e-menu/southwest-cannabis-98th-street?primary=%23000000&amp;secondary=%23899faf&amp;deals=%234a90e2" title="Leafly embedded menu" allow="geolocation" height="3954" style={{width:'100%',minWidth:'100%', overflowX:'hidden',border:'none'}}></iframe>

            </div>
        </div>
    )
}