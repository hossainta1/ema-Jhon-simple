import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';


export const AuthContext = createContext(null);

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [lodding, setLodding] = useState(true);

    const createUser = (email, password) => {
        setLodding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const signIn = (email, password) => {
        setLodding(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };


    // observe user Auth state
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLodding(false);
        })
        //   Stop obserbing while unmounting
        return () => {
            return unSubscribe();
        }
    }, [])



    const AuthInfo = {

        user,
        lodding,
        createUser,
        signIn,
        logOut,


    };



    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;