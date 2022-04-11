import { useEffect, useState } from 'react';
import {getAuth, GoogleAuthProvider , onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";
import app from '../firebase.init';


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => { 
    const [user, setUser] = useState({});


    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            const user = result.user;
            setUser(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    },[]);


    const handelSignOut = (e) => {
        signOut(auth)
        .then(()=>{

        })
        e.preventDefault();
    }

    
    // console.log(user)
    return {
        user,
        handelSignOut,
        signInWithGoogle
    };
};

export default useFirebase;