'use client';

import React, {useContext, useEffect,useState, useRef} from 'react';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';
import AppContext from '@/providers';
import Map, { Marker, Popup, NavigationControl, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


const lmap = [
    "taos",
    "espanolanorth",
    "espanolasouth",
    "sfcerillos",
    "sfoldsantafetrail",
    "sfguad",
    "abq98th",
    "abqmontgomery"
]

export default function LocationView(props) {
    const { location, setlocation, clearlocation, locationlist,openlist,closelist } = useContext(AppContext);
    const {place} = props;

    // useEffect(()=>{
    // const locationindex = lmap.findIndex(e=>e == props.store);
    // const p = locationlist[locationindex];
    // setPlace(p)
    // mapRef?.current?.flyTo({ center: [p.location.long, p.location.lat], zoom: 10 });
    // },[props])


    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    const mapRef = useRef(null);

    console.log('THE P PLACE',place)
    return (
        <div className="location_view_wrap">
            <div className="location_view_inner">
                <div className="location_name vault">{place?.name}</div>
                <div className="location_hours">
                    <div className="location_hours_line">Mon - Sat | 9am - 8pm</div>
                    <div className="location_hours_line">Sun | 11am - 6pm</div>
                </div>
                <div className="location_map">
                    <div className="location_map_inner">
                    <Map
                        ref={mapRef}
                        mapboxAccessToken={mapboxToken}
                        mapStyle="mapbox://styles/mapbox/streets-v12"
                        style={{width:'100%',height:'100%'}}
                        initialViewState={{ latitude: place?.location?.lat, longitude: place?.location?.long, zoom: 16 }}
                        maxZoom={20}
                        minZoom={3}
    			    />
                    </div>
                </div>
                <div className="location_leafly_wrap">
                <iframe id="leafly-embed-iframe" src="https://web-embedded-menu.leafly.com/e-menu/southwest-cannabis-98th-street?primary=%23000000&amp;secondary=%23899faf&amp;deals=%234a90e2" title="Leafly embedded menu" allow="geolocation" height="3954" style={{width:'100%',minWidth:'100%', overflowX:'hidden',border:'none'}}></iframe>
                </div>
            </div>
        </div>
    )
}
