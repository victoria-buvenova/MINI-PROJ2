import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Navigate } from 'react-router';
import { isEmailValid, isPasswordValid } from '../utils';
import { useAuth } from '../context/AuthProvider';

    
const Login = () => {
    const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
    const [user, setUser] = useState(null);
    const [error, setError] = useState('')
    const {login} = useAuth()
  
    const changeHandler = (e) => {
      const { value, id} = e.target;
      console.log(id)
      setLoginDetails ({ ...loginDetails, [id]: value });
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      if(loginDetails.password.length < 5) {
          setError("Password must be at least 5 characters")
          return 
      }
      
      setUser(loginDetails);
      login(loginDetails)
    };
   const {password, email} = loginDetails
return (

<MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon icon="crow fa-4x" style={{ color: '#90EE90'}}/>
          </div>
          
          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='email' type='email' size="lg"  value={email}
            onChange={changeHandler} required/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='password' type='password' size="lg" value={password}
            onChange={changeHandler} required/>

            <MDBBtn disabled={!isEmailValid(email) && !isPasswordValid(password)}  className="mb-4 px-5 mx-5 w-100" color='info' size='lg' onClick={submitHandler}>Login</MDBBtn> 
            {error && <span style={{color: "red"}}>{error}</span>}
            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p>
            <div>
            <p className='ms-5'>Don't have an account? <Link to="/register">Register here</Link></p>
            {user && <Navigate to="/" state={user} replace={true} />}
            </div>
          </div>

        </MDBCol>

        <MDBCol sm='6' className='object-cover object-center w-100'>
          <img src="https://static.vecteezy.com/system/resources/previews/006/847/450/non_2x/make-up-cosmetics-collection-of-glamour-girl-like-nail-polish-mascara-lipstick-eyeshadows-brush-or-powder-in-flat-cartoon-illustration-vector.jpg"
            alt="Login img" className="w-100" style={{objectFit: 'cover', objectPosition: 'left'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;