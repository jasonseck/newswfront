import React, {useContext, useRef, useEffect} from 'react';
import AppContext from '@/providers';
import header from '@/globalData/header.json';
import Image from 'next/image';
import Link from 'next/link'
import Locations from './locations';
import { MenuOutline, CloseOutline } from 'react-ionicons'
import { useRouter

 } from 'next/router';

export default function Header() {
    const { location, setlocation, clearlocation, locationlist,openlist,closelist,mobilemenu, setmobilemenu } = useContext(AppContext);
    const router = useRouter()
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.header_wrap');
        const vpanel = document.querySelector('.rosw')
        const scrollTop = window.scrollY;
        scrollTop >= 58 ? header?.classList?.add('hw_fixed') : header?.classList?.remove('hw_fixed');
        scrollTop >= 58 ? vpanel?.classList?.add('hw_fixedv') : vpanel?.classList?.remove('hw_fixedv');
    };
    return (
        <div className='header_wrap container'>
            <div className="header_inner">
                    <div className="header_top">
                        <div className="header_left">
                        <div className="header_instagram">
                            <a href={header.instagram_link} target="_blank">
                                <img src={header.instagram_logo?.url} className='' />
                            </a>

                        </div>
                        </div>
                        <div className="header_logo">
                            <Link href={header.logolink}>
                                <img src={header.logo?.url}  className='' />
                            </Link>
                        </div>
                        <div className="header_right">
                            <Locations width={200}/>
                        </div>
                    </div>
                    <div className="header_bottom">
                        <ul className="header_links">
                            <li  className="header_link">
                                <Link href="/locations">LOCATIONS</Link>
                            </li>
                            <li  className="header_link">
                                <Link href="/deals">DEALS</Link>
                            </li>
                            <li className="header_link">
                                <Link href="/loyalty">REWARDS</Link>
                            </li>
                            <li className="header_link">
                                <Link href="/faq">FAQ</Link>
                            </li>

                            <li  className="header_link">
                                <Link href={"/locations?store="+location.slug}>ORDER ONLINE</Link>
                            </li>

                            {/* {header.navLinks.map((link)=>{
                                return (
                                    <li key={link.id} className="header_link">
                                         <Link href={link.link}>{link.label}</Link>
                                    </li>
                                )
                            })} */}
                        </ul>
                    </div>
            </div>
            <div className="header_mobile">
                <MenuOutline
                onClick={()=>{
                    setmobilemenu(true)
                }}
                    color={'#ffffff'} 
                    height="50px"
                    width="50px"
                    />
                {mobilemenu ? (
                    <div className="mobile_menu">
                        <div className="mobile_menu_inner">
                            <ul className="mobile_header_links">
                                <li  className="mobile_header_link">
                                    <div className="mobile_header_link_push" href="/"
                                    onClick={()=>{
                                        router.push('/');
                                        setmobilemenu(false);
                                    }}
                                    >HOME</div>
                                </li>

                                <li  className="mobile_header_link">
                                    <div className="mobile_header_link_push" href="/locations"
                                    onClick={()=>{
                                        router.push('/locations');
                                        setmobilemenu(false);
                                    }}
                                    >LOCATIONS</div>
                                </li>
                                <li  className="mobile_header_link">
                                    <div className="mobile_header_link_push" href="/deals"
                                    onClick={()=>{
                                        router.push('/deals');
                                        setmobilemenu(false);
                                    }}
                                    
                                    >DEALS</div>
                                </li>
                                <li  className="mobile_header_link">
                                    <div className="mobile_header_link_push" href="/deals"
                                    onClick={()=>{
                                        router.push('/faq');
                                        setmobilemenu(false);
                                    }}
                                    
                                    >FAQ</div>
                                </li>

                                <li className="mobile_header_link">
                                    <div className="mobile_header_link_push" href="/loyalty"
                                    onClick={()=>{
                                        router.push('/loyalty');
                                        setmobilemenu(false);
                                    }}
                                    
                                    >REWARDS</div>
                                </li>
                                <li  className="mobile_header_link">
                                    <div className="mobile_header_link_push" href={"/locations?store="+location.slug}
                                    onClick={()=>{
                                        router.push("/locations?store="+location.slug);
                                        setmobilemenu(false);
                                    }}
                                    
                                    >ORDER ONLINE</div>
                                </li>
                            </ul>
                        </div>
                        <div className="mobile_menu_close"
                            onClick={()=>{
                                setmobilemenu(false)
                            }}
                        >
                            <CloseOutline
                                color={'#00000'} 
                                height="50px"
                                width="50px"
                                />
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </div>







        //     <div className="header_logo">
        //     </div>
        //     <div className="header_links">
        //         {header.navLinks.map((link)=>{
        //             console.log('a link is here!',link)
        //             return (
        //             <div key={link.id} className="header_link">
        //                 <Link href={link.link}>{link.label}</Link>
        //             </div>
        //             )
        //         })}
        //     </div>
        //     <div className="header_instagram">
        //         <a href={header.instagram_link} target="_blank">
        //         <img src={header.instagram_logo?.url} className='' />
        //         </a>

        //     </div>
        //     <Locations width={200}/>

        // </div>
    )
}