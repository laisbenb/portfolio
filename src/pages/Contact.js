import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_i2gfxzr', 'template_eu9wqv2', form.current, {
        publicKey: 'GZOwweRRjF19AX_XH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contactPage main'>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
      <div className='contactPage-right'>
         
      </div>
    </div>
  );
};
