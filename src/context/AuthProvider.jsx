import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from 'firebase/auth';
import React, {  useEffect, useState } from 'react' 
import auth from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';

// Google Provider
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true); 


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser)
            setUser(currentUser);
            setLoading(false)
        });

        return () => unSubscribe();

    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        logOut
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider