'use client';

import React, {useContext, useEffect,useState} from 'react';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';
import LocationView from './LocationView';
import AppContext from '@/providers';

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
        setLoading(false)
        },[])
    
    return loading ? null : (
        <div>
            <LocationView place={place}/>
        </div>
    )
}
