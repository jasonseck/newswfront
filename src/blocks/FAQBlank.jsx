import React from 'react';

export default function FAQBlank({faqs,heading}) {
    return (
        <div className="faq_panel_wrap">
            <div className="faq_inner">
                <div className="faq_heading vault">{heading}</div>
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
            </div>
        </div>
    )
}