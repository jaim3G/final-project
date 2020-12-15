import React from 'react'
import { Link } from 'react-router-dom'
import './HeroSection.css'
import {Button } from 'react-bootstrap'
import img1 from './welcome-gym.jpg'
import GoogleMaps from '../../GoogleMaps/GoogleMaps'

function HeroSection({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, imgStart, num
}) {
    return (
        <>
        <div className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>
            <div className="container">
                <div className ="row home__hero-row"
                style={{display:'flex', flexDirection: imgStart ==='start' ? 'row-reverse' : 'row'}}
                >
                <div className="col">
                    <div className="home__hero-text-wrapper">
                    <div className="top-line"> {topLine}</div>
                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                    <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                    <Link to="/login">
                        <Button>{buttonLabel}</Button>
                    </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="home_hero-img-wrapper">
                    {num === 1
                    ?
                    <img src={img1} alt="Fitness life" className="home__hero-img" />
                    :
                    <GoogleMaps />}
                        
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default HeroSection
