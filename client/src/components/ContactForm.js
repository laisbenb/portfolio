import React from 'react';

export default function ContactForm() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6acb61d6-dcc7-47cc-b5c3-a2b3f9b380cb");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

  return (
    <div className='contactPage--form'>
        <form onSubmit={onSubmit}>
            <div className='inputBox'>
                <input type='text' className='field' placeholder='Full name' name='name' required />
            </div>
            <div className='inputBox'>
                <input type='email' className='field' placeholder='Email address' name='email' required />
            </div>
            <div className='inputBox'>
                <textarea className='field mess' placeholder='Enter your message' name='message' required></textarea>
            </div>
            <button type='submit'>Send message</button>
        </form>
    </div>
  );
};