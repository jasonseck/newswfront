import React from 'react';
import announce from '@/globalData/announce.json';
import Image from 'next/image';
import Link from 'next/link'
export default function Announce() {
    return (
        <div className='container'>
            <div className="announce_wrap">
                <div className="announce_text vault">{announce.message}<Link className="announce_link" href={announce.link}>{announce.linktext}</Link>
                </div>
            </div>
        </div>
    )
}