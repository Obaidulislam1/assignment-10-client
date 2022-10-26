import React from 'react';

const Login = () => {
    return (
        <form className="form-control w-full max-w-xs m-auto">
            <label className="label">
                <span className="label-text">Your email eddress</span>
            </label>
            <input type="email" placeholder="your email eddress" name='email' className="input input-bordered w-full max-w-xs" required/>
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name='password' placeholder="Type here password" className="input input-bordered w-full max-w-xs" required/>
            <button type='submit' className="btn btn-active btn-ghost mt-5">Login</button>
        </form>
    );
};

export default Login;