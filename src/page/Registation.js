import React, { useContext } from 'react';
import { AuthContext } from '../Sharefile/authProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';



const Registation = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const { googleSign,
         register,
         updateProfileUser,
         mailVerification,
         userGithubLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogle = () => {
        googleSign(googleProvider)

            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error)

            })
    }

    const fromSubmit = event => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const email = from.email.value;
        const password = from.password.value;
        const confirmPassword = from.confirmPassword.value;
        const photoURL = from.photo.value;
        // console.log(name, email, password, confirmPassword, photoURL);
        register(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/login')
                setError('')
                userUpdate(name,photoURL)
                verificationmail()
                toast.success('Please check your email')
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const userUpdate = (name,photoURL) =>{
      const profile ={
        displayName: name,
        photoURL: photoURL
      }  
      updateProfileUser(profile)
        .then( () =>{})
        .catch(error => console.error(error))
    }

    const verificationmail = () =>{
        mailVerification()
        .then( () =>{})
        .catch(error => console.log(error));
    }

    const githubLogin =() =>{
        userGithubLogin(githubProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
        } )
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className='mt-20'>
            <Form onSubmit={fromSubmit} className="from-control max-w-xs w-full m-auto">
            <h1 className='text-center'>Sign up to Learn</h1>
                <label className="label">
                    <span className="label-text">What is your name?</span>
                </label>
                <input type="text" placeholder="Your name" name='name' className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Your photoURL</span>
                </label>
                <input type="text" placeholder="Your photo url" name='photo' className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Your email eddress</span>
                </label>
                <input type="email" placeholder="your email eddress" name='email' className="input input-bordered w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="Type here password" className="input input-bordered w-full max-w-xs" required />
                <label className="label">
                    <span className="label-text">Confirm password</span>
                </label>
                <input type="password" name='confirmPassword' placeholder="Confirm password" className="input input-bordered w-full max-w-xs" required />
                <p className='text-orange-600 mt-3'>{error}</p>
                <button type='submit' className="btn btn-active btn-ghost mt-5">Register</button>
                <p className='mt-5 text-center'><Link to='/login'>im already a member</Link></p>
            </Form>
            <div className='flex justify-center mt-5'>
            <div>
               <p><button className="btn btn-outline btn-info" onClick={handleGoogle}>Google SignIn</button></p>
                <p><button className='mt-5 btn btn-outline btn-info' onClick={githubLogin}>Github sign in</button></p>
               </div>
                
            </div>
        </div>
    );
};

export default Registation; <h1>register page</h1>