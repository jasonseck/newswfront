import React from 'react';
import Image from 'next/image';

export default function Signup({preheading, heading, text}) {
    return (
        <div className="signup_wrap">
            <div className="signup_inner">
                <div className="signup_text">
                <div className="iwt_text_subtitle subheader_secondary" >{preheading}</div>
                <div className="signup_text_title vault header header_secondary" >{heading}</div>

                </div>
                <div className="signup_form">
                    <div className="signup_form_inner">
                        <div className="signup_input"><input/></div>
                        <div className="signup_button">submit</div>
                    </div>
                </div>
                <div className="signup_body_text text_secondary">{text}</div>
            </div>
        </div>
    )
}
