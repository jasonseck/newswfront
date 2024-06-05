import AppContext from '@/providers';

import React, {useContext, useState} from 'react';
import { CloseCircleOutline } from 'react-ionicons'
import Link from 'next/link'
import {CloseCircle} from 'react-ionicons';

import { useRouter } from 'next/router';

export default function SideNews({Component, pageProps}) {
    const router = useRouter();
    const { sidenews, setsidenews } = useContext(AppContext);
    return sidenews ? (
        <div className="sidenews_wrapper">
            <div className="sidenews_inner">
                <div className="sidenews_inner_wrap" onClick={()=>{
                    router.push('/deals')
                    setsidenews(false);

                    }}>
                <img src="/teaser@2x.png"/>
                <div className="sidenews_close"
                    onClick={()=>{
                        setsidenews(false);
                    }}
                >
                    <CloseCircle
                    color={'#303030'}
                    width="35px"
                    height="35px"
                    />
                </div>
                </div>
            </div>
        </div>
    ) : null
} 