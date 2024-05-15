import React from 'react';
import Link from 'next/link';
import RichTextParser from '@/utils/RichTextParser';
export default function TextBlock({heading,text}) {
    return (
        <div className="py-10 px-6">

            <h2>{heading}</h2>
            <RichTextParser content={text} />
            <Link href="/about">about</Link>
            <Link href="/">home</Link>

        </div>
    )
}