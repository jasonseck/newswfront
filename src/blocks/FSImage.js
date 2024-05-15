import React from 'react';

export default function FSImage({title,backgroundImage}) {
    console.log('WRHA UP',backgroundImage)
    return (
        <div style={{width:'100%',height:'100vh',background:'url("'+backgroundImage.url+'")',backgroundSize:'cover',backgroundPosition:'center',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h2 style={{fontSize:60,color:'white'}}>{title}</h2>
        </div>
    )
}