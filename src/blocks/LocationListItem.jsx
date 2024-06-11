'use client';

import React, {useContext, useEffect,useState} from 'react';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';
import LocationView from './LocationView';
import AppContext from '@/providers';
import Link from 'next/link';
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


export default function LocationListItem(props) {
    const { location, setlocation, clearlocation, locationlist,listopen, togglelist, openlist, closelist } = useContext(AppContext);
    const router = useRouter();
    const l = props.place
    console.log('from the component')
    return (
        <div className="ll_wrap">
            <div className="ll_name">{l.name}</div>
            <div className="ll_address">
                <div className="ll_address_line">
                {l.address}
                </div>
                <div className="ll_address_line">
                {l.city}, {l.state} {l.zip}
                </div>

            </div>
            <div className="ll_hours">
                {l.hours.map(h=>{
                    return (
                        <div className="ll_hour_line">
                            {h}
                        </div>
                    )
                })}
            </div>
            <div className="ll_phone">
                <a href={"tel:"+l.tel}>{l.tel}</a>
            </div>
            <div className="ll_button" onClick={()=>{
                setlocation(l);
                router.push("/locations?store="+props.slug)
            }}>
            MAP & SHOP
            </div>
        </div>
    )
}
