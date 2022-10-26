import React, { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, FacebookAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';



export const AuthContext = createContext();

const auth = getAuth(app);


const UserContext = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState("null")
    const [dark, setDark] = useState(true)

    //  user created with email and password 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // create user using google 
    const createUserGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // create user usign facebook 
    const createUserFaceBook = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    //log in user 

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out using firbase 
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    //reset password 
    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)

        })

        return () => {
            unsubscribe();
        }

    }, [])




    const propsInfo = { dark, setDark, user, loading, createUser, createUserGoogle, createUserFaceBook, logOut, logIn, resetPassword, updateUserProfile };
    return (
        <AuthContext.Provider value={propsInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;