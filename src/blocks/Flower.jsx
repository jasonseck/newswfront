import React from 'react';

export default function FullImage({flower}) {
    console.log('FLOWER',flower)
    return (
        <div className="flower_page">
            <div className="flower_inner">
                <div className="flower_wrap">
                    {flower.map(f=>{
                        return (
                            <div className="flower_item">
                                <div className="flower_image">
                                    <img src={f.image.url} />
                                </div>
                                <div className="flower_title vault">
                                    {f.name}
                                </div>
                                <div className="flower_description">
                                    {f.description}
                                </div>
                            </div>
                        )
                    })}
                    {flower.map(f=>{
                        return (
                            <div className="flower_item">
                                <div className="flower_image">
                                    <img src={f.image.url} />
                                </div>
                                <div className="flower_title vault">
                                    {f.name}
                                </div>
                                <div className="flower_description">
                                    {f.description}
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}