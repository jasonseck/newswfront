import React from 'react';
import Image from 'next/image';

export default function Slider({gallery}) {
    console.log('gallery',gallery);
    return (
        <div className="flex flex-row items-center justify-center w-full py-40 relative text-white z-10">
            {gallery.map(g=>{
                return (
                    <Image src={g.image.url} height={g.image.height} width={g.image.width}/>
                )
            })}
        </div>
    )
}
