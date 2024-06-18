import React from 'react';

export default function PageHeader({heading,subheading,reverse,image}) {
    return (
        <div className="page_heading">
            <div className="page_heading_inner">
                <div className="ph_image_wrap" style={{
                    backgroundImage:`url(${image.url})`,
                    backgroundSize:'cover',
                    backgroundPosition:'center'
                }}>
                <div className="ph_image_inside">
                    <div className={`ph_text_wrap ${reverse ? "ph_text_reverse" : null}`}>
                        <div className="ph_heading vault">{heading}</div>
                        {subheading &&
                        <div className="ph_subheading">{subheading}</div>
                        }
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}