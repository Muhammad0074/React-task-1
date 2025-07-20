import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <div className="upper-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 f-card">
                            <h4>LOCATION</h4>
                            <p>2215 John Daniel Drive
                                Clark, MO 65243</p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 f-card">
                            <h4>AROUND THE WEB</h4>
                            <div className="social">
                                <ul className="social-list">
                                    <li className="social-item">
                                        <a href="#" className="social-link">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="social-item">
                                        <a href="#" className="social-link">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li className="social-item">
                                        <a href="#" className="social-link">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li className="social-item">
                                        <a href="#" className="social-link">
                                            <i className="fab fa-youtube"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-12 f-card">
                            <h4>ABOUT FREELANCER</h4>
                            <p className='paragraph'>Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lower-footer'>
                <div className="container">
                    <p>Copyright © Hamza Nouh 2022</p>
                </div>
            </div>
        </footer>
    )
}
