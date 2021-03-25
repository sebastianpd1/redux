import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';


const SignInAndSignUpPage = () => (

    <div className='sign-in'>
      <div className="container">
          <div className="row">
              <div className="col">  <SignIn/>     </div>
              <div className="col">   <SignUp/>    </div>
          </div>
      </div>    
    </div>
);
export default SignInAndSignUpPage