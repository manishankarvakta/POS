import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from.pathname || '/';

    const handleGoogleSignIn = ()=>{
        console.log(from);
        signInWithGoogle()
        .then(()=>{
            navigate(from, {replace:true});
            // localStorage.setItem('user', JSON.stringify(user));
        })
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 offset-md-4 h-100 align-middle">
                    <div className='card w-50 mx-auto mt-5 '>
                        <h2 className='text-center'>Login</h2>
                        <button className='btn btn-dark' onClick={handleGoogleSignIn} >SignIn With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 