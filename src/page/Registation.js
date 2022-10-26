import React, { useContext } from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../Sharefile/authProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';



const Registation = () => {

    const {googleSign} = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()

    const handleGoogle = ()=>{
        googleSign(googleProvider)

        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
       <div>
         <form className="form-control w-full max-w-xs m-auto">
            <label className="label">
                <span className="label-text">What is your name?</span>
            </label>
            <input type="text" placeholder="Your name" name='name' className="input input-bordered w-full max-w-xs" />
            <label className="label">
                <span className="label-text">Your email eddress</span>
            </label>
            <input type="email" placeholder="your email eddress" name='email' className="input input-bordered w-full max-w-xs" required/>
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="Type here password" className="input input-bordered w-full max-w-xs" required/>
            <label className="label">
                <span className="label-text">Confirm password</span>
            </label>
            <input type="password" name='confirmPassword' placeholder="Type here" className="input input-bordered w-full max-w-xs" required/>
            <button type='submit' className="btn btn-active btn-ghost mt-5">Button</button>
        </form>

        <div className='flex justify-center'>
            <button onClick={handleGoogle}> 
                
                 Google SignIn</button>
        </div>
       </div>
    );
};

export default Registation; <h1>register page</h1>