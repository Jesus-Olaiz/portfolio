import { useState, useRef } from "react";

import emailjs from '@emailjs/browser';



export default function Toolkit(props) {

  const [selected, setSelected] = useState("");

  const [formState, setFormState] = useState({user_name: '', user_number: '', user_email: '', message: ''})


  const form = useRef()

  const onClick = (e) => {
    setSelected(e.target.id);
    
  };

  const onSubmit = (e) => {
    e.preventDefault()

    if(formState.user_name.length < 1 || formState.user_email.length < 1 || formState.user_number.length < 1){

        console.log('no')
        return null
    }



    emailjs.sendForm('contact_service', 'portfolio_temp', form.current, '7_woN2HPrek4PAKnr' )
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        Error.log(err)
    })


  }

  return (
    <div className='toolkit'>
      <div className='tabs'>
        <div onClick={onClick} id='Footer' className='tab' to={"/"}>
        {selected === "Footer" ? <div className='border'></div> : null}
          TERMINUS
        </div>

        <div onClick={onClick} id='Contact' className='tab' to={"/"}>
        {selected === "Contact" ? <div className='border'></div> : null}
          CONTACT
        </div>
      </div>

      {
        selected === 'Contact' ? 
        <div className='contact'>
        <p>Contact me: </p>
        <form ref={form} id="contact-form" onSubmit={onSubmit}>


        <div className="formGroup">
            <label name="user_name">Name: </label>
            <input type="text" name="user_name" onChange={(e) => {
                setFormState({...formState, [e.target.name]: e.target.value})
            }}/>
        </div>

        <div className="formGroup">
            <label>Number: </label>
            <input type="tel" name="user_number" onChange={(e) => {
                setFormState({...formState, [e.target.name]: e.target.value})
            }}/>
        </div>

        <div className="formGroup">
            <label>Email: </label>
            <input type="email" name="user_email" onChange={(e) => {
                setFormState({...formState, [e.target.name]: e.target.value})
            }}/>
        </div>

        <div className="formGroup">
            <label>Message: </label>
            <textarea name="message"></textarea>
        </div>
        
        
        
        <button type="submit">Submit</button>
        
        </form>

        </div>
        :
        <footer>
            This is the end
        </footer>
      }
    </div>
  );
}
