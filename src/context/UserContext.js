import React from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
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






    const propsInfo = { user, createUser, createUserGoogle };
    return (
        <AuthContext.Provider value={propsInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;