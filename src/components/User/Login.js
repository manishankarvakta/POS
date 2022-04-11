import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h2>Login</h2>
            <button onClick={signInWithGoogle} >SignIn With Google</button>
        </div>
    );
};

export default Login; 