import React, {useEffect} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function FAQ({faqsection}) {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const router = useRouter();
    const isSticky = (e) => {
        const box = document.querySelector('.faq_right_inner');
        const scrollTop = window.scrollY;
        scrollTop >= 58 ? box?.classList?.add('faq_right_fixed') : box?.classList?.remove('faq_right_fixed');
    };
    const offsetscroll = (e) => {
        console.log('OFFSET', e)
        var c = document.getElementById(e)
        const rect = c.getBoundingClientRect();
        var top = rect.top + window.scrollY;
        console.log('TOP',top)
        window.scrollTo({
            top:top - 160,
            left:0,
            behavior:'smooth'
        })


    }
    console.log('FAQ SECTIONS',faqsection)
    return (
        <div className="faq_panel_wrap">
            <div className="faq_inner">
                <div className="faq_panels">
                    <div className="faq_left">
                        {faqsection.map(s=>{
                            const {linkid,heading,faqs} = s;
                            return (
                                <>
                                <div className="faq_heading vault" id={linkid}>{heading}</div>
                                <div className="faqs_wrap">
                                    {faqs.map(f=>{
                                        return (
                                            <div className="faq_item">
                                                <div className="faq_question">{f.question}</div>
                                                <div className="faq_answer">{f.answer}</div>
                                            </div>
                                        )
                                    })}
                                </div>
                                    </>
                            )
                        })}                    

                    </div>
                    <div className="faq_right">
                        <div className="faq_right_inner">
                        <div className="faq_right_box">
                        {faqsection.map(s=>{
                            return (
                                <div className="faq_menu_link"
                                    onClick={()=>{
                                        offsetscroll(s.linkid);
                                    }}
                                >
                                    {s.heading}
                                </div>
                            )
                        })}
                        </div>
                        <div className="faq_right_box">
                            <div>More Questions?</div>
                            <div>Click below to get in touch with us</div>
                            <div className="faq_button vault" onClick={()=>{
                                router.push('/contact')
                            }}>
                                CONTACT US
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}