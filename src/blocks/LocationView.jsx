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
    const {place} = props;

    useEffect(()=>{
    mapRef?.current?.flyTo({ center: [place.location.long, place.location.lat], zoom: 16 });
    },[props])


    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    const mapRef = useRef(null);

    console.log('THE P PLACE',place)
    var link = place?.link?.slice(39);
    console.log('THE LINK',link)
    return (
        <div className="location_view_wrap">
            <div className="location_view_inner">
                <div className="location_name vault">{place?.name}</div>
                <div className="location_hours">
                    {place?.hours?.map(m=>{
                        return (
                            <div className="location_hours_line">{m}</div>
       
                        )
                    })}
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
                <iframe id="leafly-embed-iframe" src={"https://web-embedded-menu.leafly.com/e-menu/" + link + "?primary=%23000000&amp;secondary=%23899faf&amp;deals=%234a90e2"} title="Leafly embedded menu" allow="geolocation" height="3954" style={{width:'100%',minWidth:'100%', overflowX:'hidden',border:'none'}}></iframe>
                </div>
            </div>
        </div>
    )
}
