import "@/styles/globals.scss";
import "@/styles/home.css";
import "@/styles/fonts.css";
import "@/styles/Home.modules.scss";

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

export default function App({ Component, pageProps }) {
  return (
    <div style={{padding:0}}>
      <Head>
        <title>Southwest Cannabis</title>
      </Head>
    <AppProvider>
    <Announce/>
    <Header/>
    <Component {...pageProps} />
    <Footer/>
    </AppProvider>
    </div>
  )
}
