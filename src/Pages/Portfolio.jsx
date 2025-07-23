import React from 'react'
import './Portfolio.css'
import img1 from '../images/1.png'
import img2 from '../images/2.png'
import img3 from '../images/3.png'
import img4 from '../images/4.png'
import img5 from '../images/5.png'
import img6 from '../images/6.png'

export default function Portfolio() {
    return (
        <section id='Portfolio'>
            <div className="portfolio-container mb-5 pb-5">
                <h2>PORTFOLIO COMPONENT</h2>
                <div className="p-icon">
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className='cards-container row g-5 ps-3 pe-3 pb-5'>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src={img1} className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src={img2} className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src={img3} className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src={img4} className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src={img5} className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src={img6} className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
