import {Component} from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import HomePage from './components/HomePage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import FeedbackContainerPage from './components/FeedbackContainerPage'

class App extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component = {LoginPage}/>
                    <Route path="/home" component = {HomePage}/>
                    <Route path="/register" component = {RegisterPage}/>
                    <Route path ='/feedback' component ={FeedbackContainerPage}/>
                    <Route exact path="/" component = {LoginPage}/>
                </Switch>
            </BrowserRouter>
        )
    }


}

export default App