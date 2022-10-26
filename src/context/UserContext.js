import React, { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';



export const AuthContext = createContext();

const auth = getAuth(app);


const UserContext = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState("null")

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

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)

        })

        return () => {
            unsubscribe();
        }

    }, [])




    const propsInfo = { user, loading, createUser, createUserGoogle, logOut, logIn, resetPassword };
    return (
        <AuthContext.Provider value={propsInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;