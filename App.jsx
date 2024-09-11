import React, { useEffect, useState } from 'react';
// import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser, faCoffee, faHome, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';


 


const Login = () => {
  useEffect(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");


   

    const SignUp = () => {
      const [email, setEmail]  = useState("")
      const [password, setPassword] = useState("")
      const [error, setError] = useState("");
      const navigate = useNavigate()

     
    }

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }, []);

  return (
    <body>
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit = {handleLogin}>
            <h2 className="title">Sign In</h2>
            <div className="input-field">
           <i> <FontAwesomeIcon icon={faUser} /></i>
              <input type="email" 
              placeholder="email"
              value={email}
              onChange={(e)=>
                setEmail(e.target.value)
              }
              required />
            </div>
            <div className="input-field">
           <i> <FontAwesomeIcon icon={faLock} /></i>
              <input type="password"
               placeholder="Password"
               value={password}
               onChange={(e)=>
                setPassword(e.target.value)
               }
               />
            </div>
            <input type="submit"
             value="Login"
             onClick={handleLogin}
              className="btn solid" required/>
            
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
            <a href="#" className="social-icon">
      <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
  <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
            </div>
          </form>

          <form onSubmit={handleSignUp} className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <div className="input-field">
            <i> <FontAwesomeIcon icon={faUser} /></i>
              <input type="text" placeholder="Username"required />
            </div>
            <div className="input-field">
            <i> <FontAwesomeIcon icon={faEnvelope} /></i>
              <input type="email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" required/>
            </div>
            <div className="input-field">
            <i> <FontAwesomeIcon icon={faLock} /></i>
              <input type="password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"  required/>
            </div>
            <input type="submit" onClick={handleSignUp} value="Sign Up" className="btn solid" required/>
            <div className="checkbox-checking"><input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" required/>
            <label for="vehicle1"> I have read the <a href='#tandc'>Terms and Conditions</a></label><br></br></div>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
            <a href="#" className="social-icon">
      <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faWhatsapp} />
  </a>
  <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href="#" className="social-icon">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Join a group of students who are intentional about their mental health
            </p>
            <button className="btn transparent" id="sign-up-btn">Sign Up</button>
          </div>
          <img src="src\assets\log.svg" className="image" alt="log" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Have an account?</h3>
            <p>
             Continue to grow with pasionate students like you who are intentional about their mental health
            </p>
            <button className="btn transparent" id="sign-in-btn">Sign In</button>
          </div>
          <img src="src\assets\register.svg" className="image" alt="register" />
        </div>
      </div>
    </div>
    </body>
  );
};

export default Login;
