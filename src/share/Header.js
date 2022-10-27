import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Sharefile/authProvider/AuthProvider';



const Header = () => {
  const { user,LogOut } = useContext(AuthContext);

  const handleLogOut = () =>{
    LogOut()
    .then( () =>{})
    .catch(error =>{
      console.error(error)
    })
  }
  console.log(user);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/courses'>Courses</Link></li>
            <li>
              <Link to='/courses'>FAQ</Link>
            </li>
            <li><Link>Blog</Link></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Learn Academy</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li><Link to='/courses'>Courses</Link></li>
          <li><Link>FAQ</Link></li>
          <li><Link>Blog</Link></li>
        </ul>
      </div>


      <div className="navbar-end">
        {
          user?.uid ?
            <>
              <span>{user?.displayName}</span>
              <button onClick={handleLogOut} className="btn btn-outline btn-info">Log Out</button>
            </>
            :
            <>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </>
        }

        {user?.photoURL ?
          <div className="w-14 rounded-full">
            <img src={user?.photoURL} />
          </div>
          :
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }

      </div>
      <input type="checkbox" className="toggle" checked />    </div>
  );
};

export default Header;