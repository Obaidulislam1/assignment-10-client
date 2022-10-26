import React, { useContext } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Sharefile/authProvider/AuthProvider';

const Login = () => {
    const [error,setError] =useState('')
    const navigate = useNavigate();
    const { login } = useContext(AuthContext)
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'; 
    const loginIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if(user.emailVerified){
                navigate(from, {replace: true});
                }
                else{
                    toast.error('Please verify your email')
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }
    return (
        <form onSubmit={loginIn} className="form-control w-full max-w-xs m-auto">
            <label className="label">
                <span className="label-text">Your email eddress</span>
            </label>
            <input type="email" placeholder="your email eddress" name='email' className="input input-bordered w-full max-w-xs" required />
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="Type here password" className="input input-bordered w-full max-w-xs" required />
            <p className='text-orange-600'>{error}</p>
            <button type='submit' className="btn btn-active btn-ghost mt-5">Login</button>
        </form>
    );
};

export default Login;