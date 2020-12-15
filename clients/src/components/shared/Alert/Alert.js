import { Toast } from 'react-bootstrap'
import logo from './logo.jpg'

const Alert = ({ show, toastText, handleToast }) => {
    return(
        <Toast show={show} onClose={() => handleToast(false)} delay={3000} autohide
                style={{ position: 'absolute', bottom: 10, right: 10, width: 400}}>
          <Toast.Header>
            <img src={logo} className="rounded mr-2" alt="Gym logo" style={{width: 30, height: 30}} />
            <strong className="mr-auto">Information message:</strong>
          </Toast.Header>
          <Toast.Body>{toastText}</Toast.Body>
        </Toast>
    )
}

export default Alert