import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Pricing.css'

function Pricing() {
    return (
        <>
        <div>
            <div className="pricing__section">
                <div className="pricing__wrapper">
                    <h1 className="pricing__heading">Pricing</h1>
                    <div className="pricing__container">
                    <Link to="/signup" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <h3>Casual</h3>
                                <h4>€39.99</h4>
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                <li>10 hours of personal coaching</li>
                                <li>Unlimited access to participate in any activity</li>
                                <li>Full access to the gym facilities</li>
                                </ul>
                                <Button>Choose plan</Button>
                            </div>
                        </Link>
                        <Link to="/signup" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <h3>Committed</h3>
                                <h4>€59.99</h4>
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                <li>24 hours of personal coaching</li>
                                <li>Monthly diet plans with the nutrition team</li>
                                <li>Everything in the Casual package included</li>
                                </ul>
                                <Button>Choose plan</Button>
                            </div>
                        </Link>
                        <Link to="/signup" className="pricing__container-card">
                            <div className="pricing__container-cardInfo">
                                <h3>Committed</h3>
                                <h4>€79.99</h4>
                                <p>per month</p>
                                <ul className="pricing__container-features">
                                <li>Up to 50 hours of personal coaching</li>
                                <li>Exclusive access between 00:00h to 6:30h</li>
                                <li>Everything Committed package included</li>
                                </ul>
                                <Button>Choose plan</Button>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}

export default Pricing
