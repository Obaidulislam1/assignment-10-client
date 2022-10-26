import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
const [user,setUser]   = useState(null) 
const [loading, setLoading] = useState(true)
const register = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
}
const googleSign = (Provider) =>{
    setLoading(true)
    return signInWithPopup(auth, Provider)
}
const LogOut = () =>{
    setLoading(true)
    return signOut(auth)
}
const login = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}


const updateProfileUser = (profile) =>{
    return updateProfile(auth.currentUser, profile)
}
  useEffect( () =>{
   const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser)
        setLoading(false)
    })
    return () =>{
        unsubscribe();
    }

  },[])
    
    const authInfo = { user,register,googleSign,LogOut,login,loading,updateProfileUser }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;