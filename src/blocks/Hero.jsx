import React from 'react';

export default function Hero({preheading,heading,text,backgroundImage,showbutton,buttonlabel,fullimage,buttonlink}) {
    const theobj = {__html:heading}
    return (
        <div className="hero_panel_wrap container">
            {fullimage ? (
                <div className="hero_panel_fullimage">
                    <img src={backgroundImage.url} />
                    {showbutton ? (
                    <div className="hero_panel_fullimage_button">
                    <div className="hero_panel_button">
                                <a className="hero_button_inner vault" href={buttonlink} target="_blank">
                                    {buttonlabel}
                                </a>
                            </div>

                    </div>

                    ) : null}
                </div>
            ) : (
                <div className="hero_panel_inner" style={{
                    background:`url(${backgroundImage.url})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center'
                }}>
                    <div className="hero_panel_content_container">
                        <div className="hero_panel_content_wrap">
                            <div className="hero_panel_preheader">{preheading}</div>
                            <div className="hero_panel_header" dangerouslySetInnerHTML={theobj} />
                            {text?.root?.children?.map(r=>{
                                console.log('THE R',r)
    return (
                                    <div className="hero_panel_subtext">{r.children[0].text}</div>
    
                                )
                            })}
                            <div className="hero_panel_button">
                                <div className="hero_button_inner">
                                    {buttonlabel}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    
            )}
        </div>
    )
}