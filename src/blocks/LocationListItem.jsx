'use client';

import React, {useContext, useEffect,useState} from 'react';
import Image from 'next/image';
import {useSearchParams} from 'next/navigation';
import LocationView from './LocationView';
import AppContext from '@/providers';
import Link from 'next/link';

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
    const l = props.place
    console.log('from the component')
    return (
        <div className="ll_wrap">
            <div className="ll_name vault">{l.name}</div>
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
            <div className="ll_button">
            <Link className="sw_footer_location_button" href={"/locations?store="+props.slug}>MAP & SHOP</Link>
            </div>
        </div>
    )
}
