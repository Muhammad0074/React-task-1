import React from 'react'
import './Home.css'
import headerImage from '../images/header.svg'

export default function Home() {
  return (
    <header id='header'>
      <div className="container">
        <div className="row justify-content-center">
          <div className="h-container col-lg-8 col-md-10 col-11">
            <img className="mb-4" src={headerImage} alt="header-img" />
            <div className="text">
              <h2 className="mb-3">START FRAMEWORK</h2>
              <div className="icon mb-3">
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
