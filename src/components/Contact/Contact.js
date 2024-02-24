import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kpevcwg', 'template_vx5bm3n', form.current, 'BiccFHFt4RpNsta6c')
    e.target.reset();
    }
  return (
    <section className='contact container section' id='contact'>
        <h2 className='section__title'>Get In Touch</h2>

        <div className='contact__container grid'>
            <div className='contact__info'>
                <h3 className='contact__title'>Lets Talk About Everything</h3>
                <p className='contact__details'>Don't Like Forms? Email Me</p>
                </div>
                 <form  ref={form} onSubmit={sendEmail} className='contact__form'>
                  <div className='contact__form-group'>
                  <div className='contact__form-div'>
                        <input type='text' name='name' required placeholder='Enter Name' className='contact__form-input'/>
                    </div>
                    <div className='contact__form-div'>
                        <input type='text' name='email' required placeholder='Enter Email' className='contact__form-input'/>
                    </div>
                    <div className='contact__form-div'>
                        <input type='text' name='subject' required placeholder='Your Subject' className='contact__form-input'/>
                    </div>
                  </div>
                  <div className='contact__form-div contact__form-area'>
                        <textarea type='text' name='message' required placeholder='Massage'
                         cols="30" rows="10" className='contact__form-input'
                         />
                    </div>
                    <button type='submit'>
                     <div className="svg-wrapper-1">
                      <div className="svg-wrapper">
                  <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
         >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="currentColor"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </div>
  <span>Send</span>
</button>
 </form> 
</div>
</section>
  )
}

export default Contact;