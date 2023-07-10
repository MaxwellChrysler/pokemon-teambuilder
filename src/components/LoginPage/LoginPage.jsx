import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import './LoginPage.css'

function LoginPage() {
  const history = useHistory();

  return (
<>
<div className='setlogin'></div>


    <div className="ps2" >

    
    <div className='move'>
      <LoginForm />
  
      <center>
        <button
          type="button"
          className="btn btn_as"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Aren't signed up for the pokemon leauge?
          Sign up here
        </button>
      </center>
    </div>
    </div>
    </>
  );
}

export default LoginPage;
