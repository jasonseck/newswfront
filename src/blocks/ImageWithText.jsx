import React from 'react';
import { useRouter } from 'next/router';
export default function ImageWithText({
    preheading,
    heading,
    text,
    showbutton,
    buttonlabel,
    buttonlink,
    image,
    reverse
}) {
    const router = useRouter();
    return (
        <div className="iwt_wrap container">
            <div className="iwt_inner">
                <div className={`iwt_row ${reverse ? "iwt_reverse" : "iwt_normal"}`}>
                    <div className="iwt_image">
                        <div className="iwt_image_wrap">
                            <div className="iwt_image_display" style={{
                                background:`url(${image.url})`,
                                backgroundSize:'cover',
                                backgroundPosition:'center'
                            }}></div>
                        </div>
                    </div>
                    <div className="iwt_text">
                            <div className="iwt_text_inner">
                                <div className="iwt_text_wrap" style={{
                                    textAlign: !reverse ? 'left' : 'right'
                                }}>
                                    <div className="iwt_text_subtitle subheader subhea">{preheading}</div>
                                    <div className={`iwt_text_title header vault ${!reverse ? "afterleft":"afterright"}`}>{heading}</div>
                                    <div className="iwt_text_body">{text}</div>
                                    {showbutton ? (
                                    <div className="iwt_text_button_wrap">
                                    <div className="iwt_text_button sw_button"
                                        onClick={()=>{
                                            router.push(buttonlink)
                                        }}         
                                    >
                                        {buttonlabel}
                                    </div>
                                </div>

                                    ) : null}

                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}