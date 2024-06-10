import React from 'react';
import { useForm } from 'react-hook-form';

export default function FormBlock({form}) {
    const onSubmit = (data) => {
      
    }
    const {id,title,fields, submitButtonLabel,confirmationType,confirmationMessage} = form;
    console.log('THE FORM IS HERE',id,title,fields,confirmationType)
    return (
        <div className="fb_wrap">
          <div className="fb_info">
            <div>{title}</div>
          </div>
          <div className="fb_fields">
            {fields.map(f=>{
              return (
                <div className="formItem">
                  <div className="formLabel">{f.name}</div>
                  <input className="formInput"></input>
                 </div>
              )
            })}
          </div>
        </div>
    )
}