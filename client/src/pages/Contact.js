import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {

  return (
    <div className='contactPage main'>
      <h2>Let's <span className='blueText'>partner</span> up!</h2>
      <p>Have a project in mind or just want to say hi? I'm always open to discussing new ideas and opportunities. Reach out, and let's make your vision a reality!</p>
      <ContactForm />
    </div>
  );
};