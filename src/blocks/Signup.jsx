import React, {useState} from 'react';
import Image from 'next/image';
import axios from 'axios';
export default function Signup({preheading, heading, text}) {
    const [email, setemail] = useState('jason');
    const submitform = () => {
        console.log('process')
        console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
            fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form-submissions`, {
            method: 'POST',
            mode:"no-cors",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              form: "6660cf6e389fe10948604e39",
              submissionData: {Email:email},
            }),
          }).then(res=>{
            console.log('did it',res)
          }).catch(error=>{
            console.log('THERE WAS ERRER',error)
          })
          

    }
    return (
        <div className="signup_wrap">
            <div className="signup_inner">
                <div className="signup_text">
                <div className="iwt_text_subtitle subheader_secondary" >{preheading}</div>
                <div className="signup_text_title vault header header_secondary" >{heading}</div>

                </div>
                <div className="signup_form">
                    <div className="signup_form_inner">
                        <div className="signup_input"><input
                        value={email}
                        onChange={(e)=>{
                            setemail(e.target.value)
                        }}
                        /></div>
                        <div className="signup_button"
                            onClick={()=>{
                               submitform();
                            }}
                        >submit</div>
                    </div>
                </div>
                <div className="signup_body_text text_secondary">{text}</div>
            </div>
        </div>
    )
}
