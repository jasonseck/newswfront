import AppContext from '@/providers';

import React, {useContext, useState} from 'react';
import { CloseCircleOutline } from 'react-ionicons'
import Link from 'next/link'



export default function SideNews({Component, pageProps}) {
    const { sidenews, setsidenews } = useContext(AppContext);
    return sidenews ? (
        <div className="sidenews_wrapper">
            <div className="sidenews_inner">
                <Link href="/deals">
                <img src="/teaser@2x.png"/>
                </Link>
            </div>
        </div>
    ) : null
} 