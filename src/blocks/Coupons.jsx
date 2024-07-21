import React from 'react';
const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
]
import moment from 'moment';


export default function Coupons({coupons}) {
    var currentday = moment(new Date(),"YYYY-MM-DD HH:mm:ss").format("dddd").toLowerCase();
    console.log('WRHA UP',coupons)
    return (
        <div className="coupon_wrap">
            <div className="dm_wrap">
                <div className="dm_top_header">
                    <img src="/deals3@2x.png"/>
                </div>

            <div className="dm_inner">
                <div className="dm_section">
                    <div className="dm_header vault">TODAY'S DEAL</div>
                    {days.filter(e=>e == currentday).map(day=>{
                                return deals.map(d=>{
                                    return d.daysactive.map(a=>{
                                        if(a.day == day) {
                                            return (
                                                <div className="dm_group" >
                                                    <div className="dm_line_title">{d.lineone}: </div>
                                                    <div className="dm_line">{d.linetwo}&nbsp;</div>
                                                    <div className="dm_line">{d.linethree}</div>
                                                </div>
                                            )
                                        }
                                    })

                                })
                                })}

                </div>
                <div className="dm_section">
                    <div className="dm_header vault">ALL DAILY DEALS</div>
                    {days.filter(e=>e != currentday).map(day=>{
                        return deals.map((d,i)=>{
                            return d.daysactive.map(a=>{
                                if(a.day == day) {
                                    return (
                                        <div className="dm_group" >
                                        <div className="dm_line_title">{d.lineone}: </div>
                                        <div className="dm_line">{d.linetwo}&nbsp;</div>
                                        <div className="dm_line">{d.linethree}</div>
                                    </div>
                        )
                                }
                            })

                        })
                        })}

                </div>
                        {coupons ? (
                <div className="dm_section">

<div className="dm_header vault">THIS WEEKS SPECIALS</div>

<div className="coupon_inner">
<div className="coupon_flex">
    {coupons.map(c=>{
        return (
            <div className="coupon_item">
                <img src={c?.image?.url}/>
            </div>
        )
    })}
</div>
</div>

</div>

                        ):null
                        }

                <div className="dm_section">
                    <div className="dm_header vault">ALL DAY EVERY DAY DEALS</div>
                    <div className="dm_group" >
                                        <div className="dm_line_title_ed">All first time customers:&nbsp;</div>
                                        <div className="dm_line">PENNY PRE-ROLL or $5 OFF PURCHASE OF $25 OR MORE </div>

                    </div>
                    <div className="dm_group" >
                                        <div className="dm_line_title_ed">Seniors & Vets:&nbsp;</div>
                                        <div className="dm_line">15% OFF ANY ORDER</div>

                    </div>
                    
                </div>

            </div>
        </div>

        </div>
        
    )
}


const deals = [
    {
        "image": {
            "id": "662abb5f35327424692885c6",
            "alt": "tincture",
            "filename": "tincture.jpg",
            "mimeType": "image/jpeg",
            "filesize": 113476,
            "width": 700,
            "height": 700,
            "createdAt": "2024-04-25T20:21:51.991Z",
            "updatedAt": "2024-04-25T20:21:51.991Z",
            "url": "http://localhost:4001/media/tincture.jpg"
        },
        "lineone": "Medical Monday",
        "linetwo": "15% off",
        "linethree": "for medical patients",
        "daysactive": [
            {
                "day": "monday",
                "id": "662af403bb77547161aa8f77"
            }
        ],
        "id": "662af3e8bb77547161aa8f76"
    },
    {
        "lineone": "Tier 1 Tuesday",
        "linetwo": "$2 Off",
        "linethree": "All Tier 1 Flower",
        "daysactive": [
            {
                "day": "tuesday",
                "id": "662afd9fb4472a2e2d2b6ffc"
            }
        ],
        "id": "662afd89b4472a2e2d2b6ffb"
    },
    {
        "lineone": "Wax Wednesday",
        "linetwo": "20% Off",
        "linethree": "Concentrates & Vapes",
        "daysactive": [
            {
                "day": "wednesday",
                "id": "662afdf6b4472a2e2d2b6fff"
            }
        ],
        "id": "662afdb5b4472a2e2d2b6ffd"
    },
    {
        "lineone": "ThursJays",
        "linetwo": "$1 Slim",
        "linethree": "with any purchase",
        "daysactive": [
            {
                "day": "thursday",
                "id": "662afdfcb4472a2e2d2b7000"
            }
        ],
        "id": "662afddbb4472a2e2d2b6ffe"
    },
    {
        "lineone": "Flower Friday",
        "linetwo": "$5 Grams - All T3 Flower",
        "linethree": "$7 Grams - All T2 Flower",
        "daysactive": [
            {
                "day": "friday",
                "id": "662afe2db4472a2e2d2b7002"
            }
        ],
        "id": "662afe01b4472a2e2d2b7001"
    },
    {
        "lineone": "Shake & Bake Saturday",
        "linetwo": "20% Off all flower",
        "linethree": "with a purchase of $25 or more",
        "daysactive": [
            {
                "day": "saturday",
                "id": "662afe55b4472a2e2d2b7004"
            }
        ],
        "id": "662afe33b4472a2e2d2b7003"
    },
    {
        "lineone": "Funday Sunday",
        "linetwo": "20% ",
        "linethree": "All edibles & drinks",
        "daysactive": [
            {
                "day": "sunday",
                "id": "662aff13b4472a2e2d2b7006"
            }
        ],
        "id": "662afe5ab4472a2e2d2b7005"
    },
    {
        "lineone": "Select Strains",
        "linetwo": "$15 1/8ths & $100 oz",
        "daysactive": [
            {
                "day": "all",
                "id": "662aff4fb4472a2e2d2b7008"
            }
        ],
        "id": "662aff3ab4472a2e2d2b7007"
    },
    {
        "lineone": "First Time & Birthdays",
        "linetwo": "Penny Pre-Roll or",
        "linethree": "$5 off purchase of $25 or more",
        "daysactive": [
            {
                "day": "all",
                "id": "662aff83b4472a2e2d2b700a"
            }
        ],
        "id": "662aff63b4472a2e2d2b7009"
    },
    {
        "lineone": "15% Off",
        "linetwo": "Seniors and Vets",
        "daysactive": [
            {
                "day": "all",
                "id": "662aff9bb4472a2e2d2b700c"
            }
        ],
        "id": "662aff91b4472a2e2d2b700b"
    }
]