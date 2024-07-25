import React from 'react';

export default function FPDeals({title,subtitle,deals}) {
    return (
        <div className="fpdealswrap">
            <div className="fpdealsinner">
                <div className="fpdealstext">
                    <div className="fpdealstitle vault">{title}</div>
                    <div className="fpdealssub">{subtitle}</div>
                </div>
                <div className="fpdealsimages">
                    {deals.map(d=>{
                        console.log('deal',d)
                        return (
                        <div className="fpdealimage">
                            <img src={d?.dealimage?.url}/>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}