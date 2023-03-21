import React from 'react'
import  "./Login.css";
import { Link } from 'react-router-dom';



 const Login =() => {


 return (
  <div className="formContainer">
  <div className="formWrapper">
  <img
      className="logoimage"
       src="logofood.png"
        alt="" 
        />
      <span className="logo">Login Account</span>
      <form>
          <input className="input" type="email" placeholder='Email'/>
          <input className="input" type="password" placeholder='Password'/>       
      </form>

         <Link to="/Homepage" className='send'> 
          <button className="signbutton">
           <p className="button_text"> Sign up</p>
            </button>
            </Link>
     
      <Link to="/Register"> 
      <span className="option">Dont have an account? Register</span>
      </Link>
     
  </div>
</div>
 
  )
}  

export default Login;