import React from 'react';
import moment from 'moment';

export default function Deals({deals,backgroundimage}) {
var currentday = moment(new Date(),"YYYY-MM-DD HH:mm:ss").format("dddd").toLowerCase();
//currentday = "tuesday"
const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
]
const colors = {
    monday:'#B52C1F',
    tuesday:'#3C8DC7',
    wednesday:'#182028',
    thursday:'#DE9D32',
    friday:'#3C8DC7',
    saturday:'#B52C1F',
    sunday:'#DE9D32'

}
const co = [
    '#3C8DC7',
    '#3C8DC7',
    '#B52C1F',
    '#3C8DC7',
    '#B52C1F',
    '#3C8DC7',
    '#B52C1F',

    '#182028',
    '#3C8DC7',
    '#B52C1F',
    '#DE9D32',

    '#B52C1F',
    '#3C8DC7',

    '#DE9D32'

]
console.log('COLORME',colors['monday'])
    return (
        <div className="deals_panel_wrap container">
            <div className="deals_panel">
                <div className="deals_inner">
                <div className="deals_inner_wrap">
                    <div className="deals_top" style={{background:`url(${backgroundimage.url})`,backgroundSize:'cover',backgroundPosition:'center'}}>
                        <div className="deals_top_inner">
                            <div className="bigdeal">TODAY'S DEALS</div>
                            {days.filter(e=>e == currentday).map(day=>{
                                return deals.map(d=>{
                                    return d.daysactive.map(a=>{
                                        if(a.day == day) {
                                            return (
                                                <div className="deals_everyday_item_major" >
                                                    <div className="deals_everyday_line_big">{d.lineone}</div>
                                                    <div className="deals_everyday_line_big">{d.linetwo}</div>
                                                    <div className="deals_everyday_line_big">{d.linethree}</div>
                                                </div>
                                            )
                                        }
                                    })

                                })
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="deals_bottom">
                        {days.filter(e=>e != currentday).map(day=>{
                        return deals.map((d,i)=>{
                            return d.daysactive.map(a=>{
                                if(a.day == day) {
                                    return (
                                        <div className="bottom_deal_item" style={{backgroundColor:co[i]}}>
                                            <div className="deals_item_header">{d.lineone}</div>
                                            <div className="deals_everyday_line">{d.linetwo}</div>
                                            <div className="deals_everyday_line">{d.linethree}</div>
                                        </div>
                                    )
                                }
                            })

                        })
                        })}
                    </div>
                    <div className="deals_everyday">
                        <div className="aded_wrap">
                            <div className="aded_left">ALL DAY EVERY DAY</div>
                            <div className="aded_right">ALL DAY EVERY DAY</div>
                        </div>
                        <div className="deals_everyday_inner">
                            {deals.map(d=>{
                                return d.daysactive.map(a=>{
                                    if(a.day == 'all') {
                                        return (
                                            <div className="deals_everyday_item">
                                                <div className="deals_item_header">{d.lineone}</div>
                                                <div className="deals_everyday_line">{d.linetwo}</div>
                                                <div className="deals_everyday_line">{d.linethree}</div>
                                            </div>
                                        )
                                    }
                                })

                            })}
                        </div>
                        <div className="aded_wrap">
                            <div className="aded_left">ALL DAY EVERY DAY</div>
                            <div className="aded_right">ALL DAY EVERY DAY</div>
                        </div>

                    </div>

                </div>
                </div>
        </div>
    )
}