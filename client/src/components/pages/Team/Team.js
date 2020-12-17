import React from 'react'
import {useEffect} from 'react'
import {Carousel, Container } from 'react-bootstrap'
import Chat from '../../chatbox/chat'
import {createSession} from '../../../actions/watson'
import store from '../../store'
import {Provider} from "react-redux"
import axios from "axios"
import "./Team.css"
import img1 from './img/53101872-portrait-of-two-men-working-as-personal-trainers-in-a-gym-and-ready-to-help.jpg'
import img2 from './img/34847CEE-3351-457B-B6C5-BF212A78F10B_1_105_c.jpeg'
import img3 from './img/istockphoto-675179390-612x612.jpg'
import img4 from './img/19-07-Blog-fitness-training-personal-training.png'
if(localStorage.session){
    axios.defaults.headers.common["session_id"] = localStorage.session
} else {
    delete axios.defaults.headers.common["session_id"] 
}

const Team = () => {
    useEffect(() => {
        if(!localStorage.session){
            store.dispatch(createSession())
        }
    })
        return(
            <>

<Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
      width={600} height={500} alt="600x500"
    />
    <Carousel.Caption>
      <h3>Mike & Josh</h3>
      <p>Experts on Strength & Conditioning</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
      width={600} height={500} alt="600x500"
    />
    <Carousel.Caption>
      <h3>Josephine</h3>
      <p>Nutrition expert</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
      width={600} height={500} alt="600x500"
    />
    <Carousel.Caption>
      <h3>Federico</h3>
      <p>Endurance expert</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src={img4}
      alt="Third slide"
      width={600} height={500} alt="600x500"
    />
    <Carousel.Caption>
      <h3>Abdullah</h3>
      <p>Overall fitness expert</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<Container>
            <Provider store={store}>

            <Chat />
            </Provider>
            </Container>
            </>
        )
}

export default Team
