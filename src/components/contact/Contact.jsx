import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vxer8j8', 'template_7vlk04s', form.current, 'mKA4jfWH_I4wNQ-Hp')
        e.target.reset()
    };

  return (
    <section className="content section" id="contact">
        <h2 className="section__title">Get in Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bxl-gmail contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data"></span>

                        <a href="mailto:erinkyle15@gmail.com" className="contact__button" target="_blank">Email me{" "} 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-linkedin-square contact__card-icon"></i>

                        <h3 className="contact__card-title">LinkedIn</h3>
                        <span className="contact__card-data"></span>

                        <a href="https://www.linkedin.com/in/erin-buchanan15" className="contact__button" target="_blank">Mesage on LinkedIn{""}
                            <i class="bx bx-right-arrow-alt contact__buton-icon"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Reach out</h3>
                
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            className="contact__form-input" 
                            placeholder="Insert your name" 
                        />
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            className="contact__form-input" 
                            placeholder="Insert your email" 
                        />
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Message</label>
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            className="contact__form-input"
                            placeholder="Write your message here"
                        ></textarea>
                    </div>

                    <button className="button button--flex">
                        Send Message
                        <svg class="button__icon" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="var(--container-color)" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path 
                                d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 
                                13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 
                                18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 
                                19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 
                                8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 
                                5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 
                                10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" 
                                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="var(--container-color)" 
                            ></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact