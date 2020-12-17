import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import ActivityList from '../components/pages/Activity-list/Activity-list'
import ActivityDetails from '../components/pages/Activity-details/Activity-details'
import ActivityForm from '../components/pages/Activity-form/Activity-form'
import Navigation from '../components/layout/Navigation/Navigation'
import Signup from '../components/pages/Signup/Signup'
import Login from '../components/pages/Login/Login'
import AuthService from './../service/auth.service'
import Home from './pages/HomePage/Home'
import Footer from '../components/layout/Footer/Footer'
import ContactForm from '../components/pages/Contact/Contact'
import Team from '../components/pages/Team/Team'

class App extends Component {
  constructor(){
    super()
    this.state = {
      loggedInUser: undefined
    }
    this.AuthService = new AuthService
  }

  componentDidMount = () => {
      this.AuthService
      .isLoggedIn()
      .then(res => this.setState({loggedInUser: res.data}))
      .catch(err => console.log(err))
  }
  setTheUser = user => this.setState({ loggedInUser: user}, () => console.log('The new state is: ', this.state) )
  
  render(){
  return (
    <>
    <Navigation storeUser={this.setTheUser} loggedUser={this.state.loggedInUser}/>
    <main> 
    
    <Switch>
    <Route path='/' exact component={Home} />
    <Route  path='/activities' exact render= { () => <ActivityList user={this.state.loggedInUser} />} />
    <Route path='/activities/:activity_id' render= { props => <ActivityDetails {...props} user={this.state.loggedInUser}/> }/>
    <Route path='/createactivity' render= { () => <ActivityForm />} />
    <Route path='/signup' render= { props => <Signup storeUser={this.setTheUser}  {...props} />} />
    <Route path='/login' render= { props => <Login storeUser={this.setTheUser} {...props} />} />
    <Route path="/contact" render={() => <ContactForm />} />
    <Route path="/team" render={() => <Team />} />
    </Switch>
    </main>
    <Footer storeUser={this.setTheUser} loggedUser={this.state.loggedInUser}/>
    </>
  )
  }
}

export default App;
