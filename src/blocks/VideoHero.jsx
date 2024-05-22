import React from 'react';

export default function VideoHero({video,logo,text,textoverride}) {
    return (
        <div className="video_panel_wrap container">
            <div className="video_panel_inner">
                <div className="video_panel_content_container">
                    <video src={video.url} autoPlay loop muted playsInline className="/sw_facility_3.mp4" poster="/facility_poster_blur.jpg"/>
                    {textoverride ? (
                    <div className="video_text vault">HIGH ALTITUDE,<br/>HANDCRAFTED IN TAOS</div>

                    ) : (
                        <img src={logo.url} className="video_panel_logo"/>

                    )}
                </div>
            </div>
        </div>
    )
}