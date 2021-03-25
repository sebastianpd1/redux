import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import {auth, signInWithFacebook, signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''

        }
    };

    handleSubmit = async event=>{
        event.preventDefault();
        const {email, password} = this.state
        try{ await auth.signInWithEmailAndPassword(email, password)
            this.setState({email:'', password: ''})
        }catch(error){console.log(error)}
        
    };

    handleChange = e=>{
        const {value, name} = e.target;
        this.setState({[name]: value}) // dinamically asingando nombre y valor al state
    };


    render(){
        return(
            <div>
             <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                     <label>Email</label>
                     <FormInput type="email" name="email" className="form-control" placeholder="User Name" value={this.state.email} handleChange={this.handleChange} required/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <FormInput type="password" name="password" className="form-control" placeholder="Password" value={this.state.password} handleChange={this.handleChange} required/>
                  </div>
                  <CustomButton type="submit" className="btn btn-dark">Sign In</CustomButton>
                  <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                  <CustomButton type="button" onClick={signInWithFacebook} className="btn btn-dark">Sign In With Facebook</CustomButton>
               </form>
            </div>
            )
    }
}

export default SignIn;