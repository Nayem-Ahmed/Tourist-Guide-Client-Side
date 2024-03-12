import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext(null)

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const resetPassword = email => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            setUser(currentUser)
            console.log('CurrentUser-->', currentUser)
            setLoading(false)

            // if (currentUser) {
            //     axiosPublice.post('/jwt', userEmail)
            //         .then(res => {
            //             console.log(res.data);
            //         })


            // }
            // else {
            //     axiosSecure.post('/logout ', userEmail)
            //         .then(res => {
            //             console.log(res.data);
            //         })

            // }
        })
        return () => {
            return unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        resetPassword,
        logOut,
        updateUserProfile,
    }

    return (
        <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;