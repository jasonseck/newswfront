import AppContext from '@/providers';

import React, {useContext, useState} from 'react';
import AgeCheck from '@/age/agecheck';
import Announce from '@/blocks/global/Announce';
import Header from '@/blocks/global/Header';
import Footer from '@/blocks/global/Footer';

export default function Inside({Component, pageProps}) {
    const { agecheck } = useContext(AppContext);
    const { location, setlocation, clearlocation, locationlist,listopen, togglelist, openlist, closelist } = useContext(AppContext);
    return (
        <div>
                {!agecheck ? (
      <AgeCheck/>
    ) : (
      <>
      <Announce/>
      <Header/>
      <div className="rosw">
      <Component {...pageProps} />
      </div>
      <Footer/>
      </>
    )}

        </div>
    )
} 