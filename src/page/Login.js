import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Sharefile/authProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext)
    const loginIn = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')
                form.reset();
            })
            .catch(error => {
                console.error(error);
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
            <button type='submit' className="btn btn-active btn-ghost mt-5">Login</button>
        </form>
    );
};

export default Login;