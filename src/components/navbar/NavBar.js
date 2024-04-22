import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './styles.scss';
import LoginModal from '../loginmodal/LoginModal';
import { useAuth } from '../../utils/auth';

import Doctor from '../../assets/doctorImg.png'


function NavBar() {
  const navigate = useNavigate();
  const auth = useAuth();

  const loginBtnHandler = () => {
    document.getElementById('loginModal').style.display='block'
  }
  const homeBtnHandler = () => {
    navigate('/');
  }

  const logoutBtnHandler = () => {
    auth.logout();
    navigate('/');
  }


  return (
    <div>      
      <nav>
          <img className='homeBtn' alt='Doctor' style={{width: '40px', height:'40px', cursor:'pointer'}} src={Doctor} onClick={homeBtnHandler} />
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact-us'>Contact Us</NavLink>
          <NavLink to='/submit-form'>Submit Form</NavLink>     
          <NavLink to='/research'>Research</NavLink>      
          <NavLink to='/services'>Services</NavLink>    
          {
            auth.user && (
              <NavLink to='/physician-portal'>Physician</NavLink>  
            )
          }   
          {
            !auth.user && (
              <button className='loginBtn' onClick={loginBtnHandler}>Physician Login</button> 
            )
          }
          {
            auth.user && (
              <button className='logoutBtn' onClick={logoutBtnHandler}>Logout</button> 
            )
          }        
          
      </nav>
      <LoginModal/>         
    </div>
    
  )
}

export default NavBar