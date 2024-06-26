"use client"

import { createContext, useContext, useState } from 'react';
import { getCookie } from 'cookies-next';
const AppContext = createContext(null);

export default AppContext;
let icv = getCookie('swagegate') || false;
export const AppProvider = ({ children }) => {
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
    const locationlist = [
        {
            name:"Southwest Cannabis Taos",
            address:"1033 Paseo Del Pueblo Sur Suite A",
            city:"Taos",
            state:"NM",
            zip:87571,
            link:"https://www.leafly.com/dispensary-info/southwest-cannabis-taos",
            location: {
                lat: 36.38373617626738, 
                long: -105.58640403253914
            },
            hours : [
                "Mon - Sat | 9am - 8pm",
                "Sun | 11am - 6pm"
            ],
            tel : "575-224-3254",
            slug:"taos"
        },
        {
            name:"Española - N. Riverside",
            address:"1205 N Riverside Dr",
            city:"Española",
            state:"NM",
            zip:87532,
            link:"https://www.leafly.com/dispensary-info/southwest-cannabis-n-riverside",
            location: {
                lat:36.00843893221038,
                long:-106.06462839614142
            },
            hours : [
                "Mon | 9am - 8pm",
                "Tue - Thu | 9am - 7pm",
                "Fri | 9am - 8pm",
                "Sat | 10am - 7pm",
                "Sun | 10am - 6pm"

            ],
            tel:"505-747-2908",
            slug:"espanolanorth"
        },

        {
            name:"Española - S. Riverside",
            address:"421 S Riverside Drive",
            city:"Española",
            state:"NM",
            zip:87532,
            link:"https://www.leafly.com/dispensary-info/southwest-cannabis-s-riverside",
            location: {
                lat:35.98903947885728,
                long:-106.06509450012506
            },
            hours : [
                "Mon | 9am - 8pm",
                "Tue - Thu | 9am - 7pm",
                "Fri | 9am - 8pm",
                "Sat | 10am - 7pm",
                "Sun | 10am - 6pm"
            ],
            tel:"505-747-2644",
            slug:"espanolasouth"
        },
        {
            name:"Santa Fe - Cerrillos",
            address:"1829 Cerrillos Rd",
            city:"Santa Fe",
            state:"NM",
            zip:87505,
            link:"https://www.leafly.com/dispensary-info/southwest-cannabis-cerrillos",
            location: {
                lat:35.66516659849491,
                long:-105.97310497801428
            },
            hours : [
                "Mon - Sat | 9am - 8pm",
                "Sun | 10am - 6pm"
            ],
            tel:"505-372-7046",
            slug:"sfcerillos"
        },
        {
            name:"Santa Fe - Old Santa Fe Trail",
            address:"507 Old Santa Fe Trl.",
            city:"Santa Fe",
            state:"NM",
            zip:87505,
            link:"https://www.leafly.com/dispensary-info/southwest-wellness-center-old-santa-fe",
            location : {
                lat:35.68109833308655,
                long:-105.93751140319796
            },
            hours : [
                "Mon - Sat | 9am - 6pm",
                "Sun | Closed"
            ],
            tel:"505-780-5391",
            slug:"sfoldsantafetrail"
        },
        {
            name:"Santa Fe - Guadalupe & Sabino",
            address:"604 N. Guadalupe",
            city:"Santa Fe",
            state:"NM",
            zip:87501,
            link:"https://www.leafly.com/dispensary-info/southwest-cannabis-guadalupe",
            location : {
                lat:35.69496440507486,
                long:-105.95094557826191
            } ,
            hours : [
                "Mon - Sat | 9am - 8pm",
                "Sun | 9am - 6pm"
            ],
            tel:"505-780-8764",
            slug:"sfguad"
        },
        {
            name:"Albuquerque 98th",
            address:"101 98th St SW",
            city:"Albuquerque",
            state:"NM",
            zip:87121,
            link:"https://www.leafly.com/dispensary-info/southwest-cannabis-98th-street",
            location: {
                lat:35.073227821038785,
                long:-106.743252129912
            },
            hours : [
                "Mon - Fri | 9am - 8pm",
                "Sat | 10am - 8pm",
                "Sun | 10am - 7pm"
            ],
            tel:"505-433-4174",
            slug:"abq98th"
        },
        {
            name:"Albuquerque Montgomery & Eubank",
            address:"9132 Montgomery Blvd NE",
            city:"Albuquerque",
            state:"NM",
            zip:87111,
            link:"https://www.leafly.com/dispensary-info/southwest-cannabis-montgomery",
            location: {
                lat:35.130310244536545,
                long:-106.54097653101272
            },
            hours : [
                "Mon | 10am - 7pm",
                "Tue - Wed | 10am - 6pm",
                "Thu - Sat | 10am - 7pm",
                "Sun | Closed"
            ],
            tel:"505-404-8885",
            slug:"abqmontgomery"
        }



    ] 
    const [location, setLocation] = useState(locationlist[2]);
    const setlocation = (location) => {
        setLocation(location);
    };

    const clearlocation = () => {
        setLocation(null);
    };
    const [listopen, toggleList] = useState(false);
    const togglelist = (listopen) => {
        toggleList(!listopen)
    }
    const openlist = () => {
        toggleList(true)
    }
    const closelist = () => {
        toggleList(false)
    }
    // const [agecheck,setagecheck] = useState(false);
    // const ageverified = (agecheck) => {
    //     setagecheck(true)
    // }
    const [agecheck, setAgeCheck] = useState(false);
    const setagecheck = () => {
        setAgeCheck(true)
    }
    const [agedeclined, setAgeDeclined] = useState(false);
    const setagedeclined = () => {
        setAgeDeclined(true)
    }
    const [showsignup, SetSignup] = useState(false);
    const setsignup = (e) => {
        SetSignup(e)
    }

    const [sidenews, SetSideNews] = useState(false);
    const setsidenews = (e) => {
        SetSideNews(e)
    }
    const [mobilemenu, SetMobileMenu] = useState(false);
    const setmobilemenu = (e) => {
        if(e) {
            SetMobileMenu(e);
        } else {
            SetMobileMenu(!mobilemenu)
        }

    }

    
    return (
        <AppContext.Provider value={{
            location,
            setlocation,
            clearlocation,
            locationlist,
            listopen,
            togglelist,
            listopen,
            openlist,
            closelist,
            agecheck,
            setagecheck,
            agedeclined,
            setagedeclined,
            showsignup,
            setsignup,
            sidenews,
            setsidenews,
            mobilemenu,
            setmobilemenu
            }}>
            {children}
        </AppContext.Provider>
    );
};