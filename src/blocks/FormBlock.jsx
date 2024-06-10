import React, {useState} from 'react';
import { useForm } from 'react-hook-form';

export default function FormBlock({form}) {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: ""
  });
  const handleInput = (e) => {
    console.log(e)
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData((prevState)=> ({
      ...prevState,
      [fieldName]:fieldValue
    }))
  }
  const submitform = () => {
    const temp = {
      email:formData.email,
      firstname:formData.firstname,
      lastname:formData.lastname
  }
  const dataToSend = Object.entries(temp).map(([name, value]) => ({
    field: name,
    value,
  }))
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form-submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          form: form.id,
          submissionData: dataToSend
        }),
      }).then(res=>{
        console.log('did it',res)
      }).catch(error=>{
        console.log('THERE WAS ERRER',error)
      })
      

  }

    const {id,title,fields, submitButtonLabel,confirmationType,confirmationMessage} = form;
    console.log('THE FORM IS HERE',id,title,fields,confirmationType)
    return (
        <div className="fb_wrap">
          <div className="fb_info">
            <div>{title}</div>
          </div>
          <div className="fb_fields">
                  <div className="formItem">
                    <div className="formLabel">First Name</div>
                    <input
                      className="formInput" 
                      type="text" 
                      name="firstname" 
                      value={formData.firstname}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="formItem">
                    <div className="formLabel">Last Name Name</div>
                    <input
                      className="formInput" 
                      type="text" 
                      name="lastname" 
                      value={formData.lastname}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="formItem">
                    <div className="formLabel">Email</div>
                    <input
                      className="formInput" 
                      type="text" 
                      name="email" 
                      value={formData.email}
                      onChange={handleInput}
                    />
                  </div>
                  <button onClick={submitform}>submit</button>

        </div>
        </div>
    )
}