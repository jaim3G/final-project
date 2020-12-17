import React from 'react'
import GymService from '../../../service/gym.service'
import MailService from '../../../service/email.service'
import './Activity-details.css'
import Alert from '../../shared/Alert/Alert'
import Loader from '../../shared/spinner/Loader'

import { Button} from 'react-bootstrap'



const ActivityDetails = ({activityDetailsInfo}) => {
    const mailService = new MailService()
    let toastText = ''
    let showToast = false
    const handleSubmit = e => {
        e.preventDefault()
        
        let data= {
            name: activityDetailsInfo.user.name,
            email: activityDetailsInfo.user.email,
            subject: `You have signed up for ${activityDetailsInfo.name}`,
            message: `Thank you for signing up to ${activityDetailsInfo.name}! We will see you in class`
        }

        mailService  
            .activityMail(data)
            .then(() => toastText="Email sent successfully!", showToast = true)
            .catch(() => toastText="Error while signing you up, please try agian or contact the team", showToast= true )
    }

    const gymService = new GymService()

    const signClass = () => {
        
        console.log('User ID: ', activityDetailsInfo.user._id)
        gymService
        .joinClass(activityDetailsInfo.user._id, activityDetailsInfo._id)
        .then(() => console.log('sign up complete!'))
        .catch(err => console.log(err))
    }

//    const handleToast = (visible, text) => {
//         showToast = visible,
//         toastText = text
//     }
        
        return(
            
            <>
            {activityDetailsInfo ? 
           
        <>
            <h1>{activityDetailsInfo.name}</h1> 
                    <img src={activityDetailsInfo.avatar} alt={activityDetailsInfo.name}/>
                    <h3>Instructor: {activityDetailsInfo.instructor}</h3>
                    <p>{activityDetailsInfo.description}</p>
                    { activityDetailsInfo.user ?
                    <Button className="btn btn-dark" onClick={signClass, handleSubmit} >Join</Button>
                    : <h3>Log in to sign up!</h3>}
                </>
            : <Loader />}
            {console.log(activityDetailsInfo)}

            </>
            
            
           
        )
}

export default ActivityDetails
