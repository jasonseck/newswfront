'use client';

import React, {useContext, useEffect,useState, useRef} from 'react';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';
import AppContext from '@/providers';
import Map, { Marker, Popup, NavigationControl, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import logo from '@/img/Leaflylogo3.png'
import { useRouter } from 'next/router';
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
    console.log('THE LOGO',logo)
    useEffect(()=>{
    mapRef?.current?.flyTo({ center: [place.location.long, place.location.lat], zoom: 16 });
    },[props])
    const router = useRouter();
    const { location, setlocation, clearlocation, locationlist,openlist,closelist } = useContext(AppContext);
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
                <div className="location_change">
                    <select className="lc_select"
                        onChange={(e=>{
                            var temp = locationlist.find(x=>x.slug == e.target.value);
                            console.log('THE TEMP!!!!',temp)
                            setlocation(temp)
                            console.log("the e value",e.target.value)
                            router.push("/locations?store="+e.target.value)
                        })}
                    >
                        <option>change location</option>
                        {locationlist.map(l=>{
                            return (
                                <option value={l.slug}>{l.name}</option>
                            )
                        })}
                    </select>
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
                        scrollZoom={false}
    			    >
                        						<Marker key={1} longitude={place.location.long} latitude={place.location.lat}>
								<img src={logo.src} style={{width:45}}/>
						</Marker>

                        </Map>
                    </div>
                </div>
                <div className="location_leafly_wrap">
                <iframe id="leafly-embed-iframe" src={"https://web-embedded-menu.leafly.com/e-menu/" + link + "?primary=%23000000&amp;secondary=%23899faf&amp;deals=%234a90e2"} title="Leafly embedded menu" allow="geolocation" height="3954" style={{width:'100%',minWidth:'100%', overflowX:'hidden',border:'none'}}></iframe>
                </div>
            </div>
        </div>
    )
}
