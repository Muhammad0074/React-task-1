import React from 'react'
import './Portfolio.css'

export default function Portfolio() {
    return (
        <section id='Portfolio'>
            <div className="portfolio-container mb-5 pb-5">
                <h2>PORTFOLIO</h2>
                <div className="p-icon">
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className='cards-container row g-5 ps-3 pe-3 pb-5'>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src="src\images\1.png" className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src="src\images\2.png" className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src="src\images\3.png" className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src="src\images\4.png" className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src="src\images\5.png" className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="card portfolio-card">
                            <img src="src\images\6.png" className="card-img-top" alt="card picture" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
