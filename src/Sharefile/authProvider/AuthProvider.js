import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
const [user,setUser]   = useState(null) 
const register = (email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const googleSign = (Provider) =>{
    return signInWithPopup(auth, Provider)
}
const LogOut = () =>{
    return signOut(auth)
}
const login = (email, password) =>{
    return signInWithEmailAndPassword(auth,email,password);
}
  useEffect( () =>{
   const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
    })
    return () =>{
        unsubscribe();
    }

  },[])
    
    const authInfo = { user,register,googleSign,LogOut,login }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;