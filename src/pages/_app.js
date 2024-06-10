import "@/styles/globals.scss";
import "@/styles/home.css";
import "@/styles/fonts.css";
import "@/styles/Home.modules.scss";

import React, {useContext, useState} from 'react';
import axios from 'axios';
import { Just_Me_Again_Down_Here } from "next/font/google";
import Header from '@/blocks/global/Header';
import Footer from '@/blocks/global/Footer';
import Announce from '@/blocks/global/Announce';
import { AppProvider } from "@/providers";
import Head from 'next/head';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.patch["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
import RewardsSignup from "./rewardssignup2";
import Inside from "./inside";
import SideNews from "./SideNews";
export default function App({ Component, pageProps }) {
  return (
    <div style={{padding:0}}>
      {/* <div className="mobile_message">not mobile ready. please view on desktop</div>
      <div className="mobile_gate"> */}
          <Head>
            <title>Southwest Cannabis</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
          </Head>
          <AppProvider>
            <Inside Component={Component} pageProps={pageProps}/>
            <RewardsSignup/>
            <SideNews/>
          </AppProvider>
    {/* </div> */}
    </div>
  )
}
