'use client';

import React, {useContext, useEffect,useState} from 'react';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';
import LocationView from './LocationView';
import AppContext from '../providers';
import LocationListItem from './LocationListItem';

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

export default function Locations({}) {
    const { location, setlocation, clearlocation, locationlist,openlist,closelist } = useContext(AppContext);
    const params = useSearchParams().get('store')
    const [place,setPlace] = useState({});
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        const locationindex = lmap.findIndex(e=>e == params);
        const p = locationlist[locationindex];
        setPlace(p)
        console.log('THE P',p)
        setLoading(false)
        },[params])
    
    return loading ? null : place ? (
        <div>
            <LocationView place={place}/>
        </div>
    ) : (
        <div className="location_list_wrap">
            {locationlist.map((l,i)=>{
                return (
                        <LocationListItem place={l} slug={lmap[i]}/>
                )
            })}
        </div>
    )
}
