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
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // create user using google 
    const createUserGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    //log in user 

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out using firbase 
    const logOut = () => {
        return signOut(auth)
    }

    //reset password 
    const resetPassword = (email) => {
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




    const propsInfo = { user, createUser, createUserGoogle, logOut, logIn, resetPassword };
    return (
        <AuthContext.Provider value={propsInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;