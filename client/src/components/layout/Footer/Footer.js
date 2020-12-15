import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
            <p className="footer-subscription-heading"> 
            Join the IronGym_ newsletter to recieve the latest deals
            </p> 
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                    <Button>Subscribe</Button>
                </form>
            </div>

            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About Us</h2>
                    <Link to="/activities">Activities</Link>
                    <Link to="/">Meet the team</Link>
                    <Link to="/">Contact Us</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Member Area</h2>
                    <Link to="/login">Sign In</Link>
                    <Link to="/profile">Profile</Link>
                </div>
                <div className="footer-link-items">
                    <h2>Social Media</h2>
                    <Link to="/">Facebook</Link>
                    <Link to="/">Instagram</Link>
                    <Link to="/">Youtube</Link>
                </div>
                </div>
            </div>
            <small className="website-rights">Iron Gym_ © 2020</small>
        </div>
    )
}

export default Footer
