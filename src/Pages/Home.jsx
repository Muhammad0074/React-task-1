import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <header id='header'>
        <div className="h-container">
            <img src="src\images\header.svg" alt="header-img" />
            <div className="text">
                <h2>START REACT</h2>
                <div className="icon">
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
        </div>
    </header>
  )
}
