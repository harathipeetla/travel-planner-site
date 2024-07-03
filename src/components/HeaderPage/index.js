import {Component} from 'react'
import { PiPlanetFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { VscFeedback } from "react-icons/vsc";
import {Link} from 'react-router-dom'

import './index.css'

class HeaderPage extends Component{

    render(){
        return(
            <div className='header-container'>
            <div className='laptop-view'>
                <div className='logo-container'>
                   <Link to="/">
                   <h2>Travel <PiPlanetFill/></h2>
                   </Link> 
                </div>
                <ul className='list-conatiner'>
                   <Link to="/home"><li className='item'>Home</li></Link> 
                <Link to="/feedback"><li className='item'>feedbacks</li></Link>    
                </ul>
            </div>

            <div className='mobile-view'>
            <div className='logo-container'>
                   <Link to="/">
                   <h2>Travel <PiPlanetFill/></h2>
                   </Link> 
                </div>
                <ul className='list-conatiner'>
                   <Link to="/home"><li className='item'><FaHome/></li></Link> 
                <Link to="/feedback"><li className='item'><VscFeedback/></li></Link>    
                </ul>
            </div>

            </div>

            


        )
    }
}

export default HeaderPage