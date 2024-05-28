import React from 'react';

export default function FullImage({image}) {
    return (
        <div className="full_image_wrap">
            <img src={image.url}/>
        </div>
    )
}