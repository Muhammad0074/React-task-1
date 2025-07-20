import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <section id='Contact'>
            <div className="contact-container mb-5">
                <h2>CONTACT ME</h2>
                <div className="c-icon">
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className="form-container">
                    <div className="form ">
                        <input className='input  ' type="text" placeholder='NAME'/>
                        <input className='input ' type="text" placeholder='Email Address'/>
                        <input className='input ' type="text" placeholder='Phone Number'/>
                        <input className='input ' type="text" placeholder='Message'/>
                        <button className='btn button'>send</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
