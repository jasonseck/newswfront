import React from 'react';
import Link from 'next/link';
import RichTextParser from '@/utils/RichTextParser';
export default function TextBlock({heading,text,paddingtop,paddingbottom}) {
    return (
        <div className="textblock_wrap">
            <div className="textblock_inner" style={{
                paddingTop:paddingtop ? paddingtop : 0,
                paddingBottom:paddingbottom ? paddingbottom : 0
            }}>
            <h2 className="textblock_heading">{heading}</h2>
            <RichTextParser content={text} />
            </div>
        </div>
    )
}