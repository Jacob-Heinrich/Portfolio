import React from 'react';
import * as emailjs from 'emailjs-com';
import '../App.css';
import Swal from 'sweetalert2';

export default function EmbeddedEmail() {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_ziv48l7', 'template_uukj6ea',
        e.target, 'hC-a8Zq_Jx4sDTVDV')
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
          })
        }, (error) => {
          console.log(error.text);
          Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
            //clears the form after sending the email
            e.target.reset();
        }
    return (
      <div className = "email">
        <form onSubmit={sendEmail} className = 'form'>
            <input type='hidden' name='contact_number'className = "nameInput"/>
            <label for='name'>Name</label>
            <input id='name' type='text' name='from_name'
            placeholder='Your name'/>
            <label for='email'>Email</label>
            <input id='email' type='email' name='reply_to'
            placeholder='Your email' />
           <label for='message'>Message</label>
           <textarea id='message' name='message'
           placeholder="Let's talk about it..."/>
           <button type='submit' id="submit">Contact</button>
       </form>
       </div>
    );
}
