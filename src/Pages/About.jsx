import React from 'react'
import './About.css'

export default function About() {
    return (
        <section id='About' className='about-section'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <h2>ABOUT COMPONENT</h2>
                        <div className="about-icon">
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 left-p">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6 right-p">
                        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
