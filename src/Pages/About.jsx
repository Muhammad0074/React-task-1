import React from 'react'
import './About.css'

export default function About() {
    return (
        <section id='About' className='about-section'>
            <div className="about-container">
                <div className="container">
                    <h2>ABOUT</h2>
                    <div className="about-icon">
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="about-text">
                        <div className="row w-75 mx-auto">
                            <div className="col-lg-6 col-md-6 col-12 left-p">
                                <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12 right-p">
                                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
