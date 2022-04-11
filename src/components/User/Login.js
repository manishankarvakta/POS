import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from.pathname || '/';

    const handleGoogleSignIn = ()=>{
        console.log(location);
        signInWithGoogle()
        .then(()=>{
            navigate(from, {replace:true});
        })
    };
    return (
        <div>
            <h2>Login</h2>
            <button onClick={handleGoogleSignIn} >SignIn With Google</button>
        </div>
    );
};

export default Login; 