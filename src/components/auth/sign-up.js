import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebase';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((UserCredentials)=>{
                console.log(UserCredentials);
            })
            .catch(error => {
                console.log(error);
            })
    }
  return (
    <form onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <input type="email" placeholder='Enter your email' value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <input type="password" placeholder='Enter your password' value={password} onChange={(e) => {setPassword(e.target.value)}}/>
        <input type="submit" value="Sign Up" />
    </form>
  )
}

export default SignUp