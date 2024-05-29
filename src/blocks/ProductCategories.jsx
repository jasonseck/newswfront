"use client";

import React, {useContext, useRef, useEffect} from 'react';
import AppContext from '@/providers';
import Map, { Marker, Popup, NavigationControl, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Link from 'next/link';
export default function ProductCategories({header,description,productcategory,mapimage}) {
    function usePrevious(value) {
        const ref = useRef();
        useEffect(() => {
          ref.current = value;
        });
        return ref.current;
      }
    const { location, setlocation, clearlocation, locationlist,openlist,closelist } = useContext(AppContext);
    const prevAmount = usePrevious({location});
    console.log('BLING BLING',location)
    const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    const mapRef = useRef(null);
    const zoomToSelectedLoc = (e, airport, index) => {
		// stop event bubble-up which triggers unnecessary events
		e.stopPropagation();
		setSelectedMarker({ airport, index });
		mapRef.current.flyTo({ center: [airport.lon, airport.lat], zoom: 10 });
	};

    const changemap = (location) => {
        if(mapRef.current !=null) {
        mapRef.current.flyTo({
            center:[
                location.long,
                location.lat
            ],
            zoom:16
        })
    } else {
        return;
    }
    }
    useEffect(()=>{
        console.log('PROCESS THIS LOCATION',locationlist)
        changemap(location.location);
        console.log(mapRef.current)
    },[location])
    return (
        <div className="product_categories_wrap container">
            <div className="pc_top">
                <div className="pc_top_left">
                    <div className="pc_store">
                        <div className="pc_title vault">{header}</div>

                        <div className="pc_store_name">You are shopping <b>{location.name}</b></div>
                        <div className="pc_store_name">{location.address}, {location.city} {location.zip}</div>
                        <div className="iwt_text_button_wrap">
                        <div onClick={()=>{openlist()}} className="product_text_button vault">change location</div>

                        </div>
                        <div className="iwt_text_button_wrap">
                        <Link href={"/locations?store="+location.slug} className="product_text_button vault">Shop</Link>

                        </div>

                    </div>
                </div>
                <div className="pc_top_right">
                    <div className="pc_map_wrap">
                        <div className="pc_map_inside"
                        style={{
                            background:'#fdfdfd',
                            backgroundSize:'cover',
                            backgroundPosition:'center'
                        }}
                        >
			<Map
                ref={mapRef}
				mapboxAccessToken={mapboxToken}
				mapStyle="mapbox://styles/mapbox/streets-v12"
				style={{width:'100%',height:'100%'}}
				initialViewState={{ latitude: location.location.lat, longitude: location.location.long, zoom: 16 }}
				maxZoom={20}
				minZoom={3}
                scrollZoom={false}
			>
                {locationlist.map((l,i)=>{
                    return (
						<Marker key={i} longitude={l.location.long} latitude={l.location.lat}>
								<img src={mapimage.url} style={{width:45}}/>
						</Marker>
					);
                })}

            </Map>

                        </div>
                        {/* <img src={mapimage.url}/> */}
                    </div>
                </div> 
            </div>
            <div className="pc_box_wrap">
            {productcategory.map(c=>{
                console.log('LCATION!!!!',location)
                return (
                    <div className="pc_box">
                        <div className="pc_box_inner">
                            <div className="pc_box_image">
                                <img src={c.image.url}/>
                                <div className="pc_box_title">
                                <a href={location.link} target="_blank" className="pc_link">{c.categoryname}</a>
                            </div>

                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

