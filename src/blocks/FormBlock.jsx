import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { Puff } from 'react-loader-spinner';
export default function FormBlock({form,message}) {

  const [success,setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone:"",
    message:""
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
    setLoading(true)
    const temp = {
      email:formData.email,
      firstname:formData.firstname,
      lastname:formData.lastname,
      phone:formData.phone,
      message:formData.message
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
        setSuccess(true)
        setLoading(false)
      }).catch(error=>{
      })
      

  }

    const {id,title,fields, submitButtonLabel,confirmationType,confirmationMessage} = form;
    console.log('THE FORM IS HERE',id,title,fields,confirmationType)
    return (
        <div className="fb_wrap">
          <div className="fb_info">
            <div className="form_title vault">{title}</div>
            <div className="form_message">{message}</div>
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
                  <div className="formItem">
                    <div className="formLabel">Phone</div>
                    <input
                      className="formInput" 
                      type="text" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="formItem2">
                    <div className="formLabel">Message</div>
                    <textarea
                      className="formInput2" 
                      type="text" 
                      name="message" 
                      value={formData.message}
                      onChange={handleInput}
                    />
                  </div>

        </div>
        <div className="form_button vault" onClick={submitform}>submit</div>
        {loading ? (
          <div className="spin_loader">
          <Puff
                  height="35"
                  width="35"
                  color="red"
                  />
            </div>
        ) : null}
        {success ? (
              <div className="contact_success">Your message has been received! Please allow us up to 24 hours to respond</div>

            ) : null
            }

        </div>
    )
}