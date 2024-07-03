import { Component } from "react";
import {Link} from 'react-router-dom'
import Cookies  from "js-cookie";

import './index.css'

class RegisterPage extends Component{
    state={
        userName:'',
        password:'',
        errorMsg:''
    }

    onChangeUserName =(e)=>{
        this.setState({userName:e.target.value})
    }

    onChangePassword =(e)=>{
        this.setState({password:e.target.value})
    }

    onRegisterUserDetails=()=>{
        const {userName, password}=this.state
        const existingUser = Cookies.get('userName')
        if(existingUser === userName){
            this.setState({errorMsg:'user already exists'})
        }else if(userName === '' || password === ''){
            this.setState({errorMsg:'user or password should not be empty'})
        }else{
            Cookies.set('username', userName, {expires:3})
            Cookies.set('password', password, {expires:3})
            const {history} = this.props 
            history.replace('/login')
        }

    }

    render(){
        const {userName, password, errorMsg} = this.state

        return(
            <div className="register-page-container">
              <div className='user-name-container'>
                    <label>Username:</label>
                    <input
                    type='text'
                    className='user-name-feild'
                    id='username'
                    onChange={this.onChangeUserName}
                    value={userName}
                    />
               </div>
               <div className='password-container'>
               <label>Password:</label>
                    <input
                    type='text'
                    className='password-feild'
                    id='password'
                    onChange={this.onChangePassword}
                    value={password}
                    />
               </div>
               <div className='login-button-container'>
                    <button className='register-button' type='button' onClick={this.onRegisterUserDetails}>Register</button>
               </div>
               <p className='error-msg'>{errorMsg}</p>
               <p>Already have an account? <span><Link to="/home">Login Here</Link></span></p>
            </div>
        )
    }
}

export default RegisterPage