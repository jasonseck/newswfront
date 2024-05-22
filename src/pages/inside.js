import AppContext from '@/providers';

import React, {useContext, useState} from 'react';
import AgeCheck from '@/age/agecheck';
import Announce from '@/blocks/global/Announce';
import Header from '@/blocks/global/Header';
import Footer from '@/blocks/global/Footer';

export default function Inside({Component, pageProps}) {
    const { agecheck } = useContext(AppContext);
    const { location, setlocation, clearlocation, locationlist,listopen, togglelist, openlist, closelist } = useContext(AppContext);
    console.log('HOME SCREE',locationlist)
    console.log('homescreen 2',locationlist)
    return (
        <div>
                {!agecheck ? (
      <AgeCheck/>
    ) : (
      <>
      <Announce/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
      </>
    )}

        </div>
    )
} 