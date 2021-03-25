import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createProfileDocument, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword:''
        }
    }
    handleSubmit = async e => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password != confirmPassword){
            alert("passwords don't match")
            return
        }
        try{
            const{user} = await auth.createUserWithEmailAndPassword(email, password); // createUserEmailAndPassword ese metodo me devuelve un objeto con el usuario
            createUserProfileDocument(user, {displayName});  // displayName es un objeto que viene del state, y dentro de user ya esta email y password
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword:''
            })
        } catch(error){
            console.error(error)
        }
    }

    handleChange = e =>{
        const {name, value} = e.target;
        this.setState({[name]:value})
    }


    
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div>
                <h2 className= "h1"> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type = 'text' 
                    name = 'displayName' 
                    value ={displayName} 
                    onChange={this.handleChange}
                    label = 'Display Name'
                    required
                    />
                     <FormInput 
                    type = 'email' 
                    name = 'email' 
                    value ={email} 
                    onChange={this.handleChange}
                    label = 'Email'
                    required
                    />
                     <FormInput 
                    type = 'password' 
                    name = 'password' 
                    value ={password} 
                    onChange={this.handleChange}
                    label = 'password'
                    required
                    />
                     <FormInput 
                    type = 'password' 
                    name = 'confirmPassword' 
                    value ={confirmPassword} 
                    onChange={this.handleChange}
                    label = 'Confirm Password'
                    required
                    />
                    <CustomButton type='submit'>Sign UP</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;