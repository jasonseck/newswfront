import React from 'react';

export default function About({title,subtitle,body,justify,buttontext}) {
    console.log("JUSTIFY",justify)
    return (
        <div className="about_panel_wrap container">
            <div className="about_panel_inner">
                <div className="about_panel_textbox" style={{
                    alignItems:justify == "left" ? "flex-start" : justify == "right" ? "flex-end" : justify == "center" ? "center" : null
                    }}>
                            <div className="about_panel_subheader subheader">{subtitle}</div>
                            <div className="about_panel_header header">{title}</div>
                            <div className="about_panel_body" style={{textAlign:justify}}>{body}</div>
                            <div className="iwt_text_button_wrap">
                            <div className="iwt_text_button">
                                {buttontext}
                            </div>
                        </div>

                    </div>
                    </div>
        </div>
    )
}