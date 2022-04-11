import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const Welcome = () => {
    const [user] = useAuthState(auth) 
    return (
        <div>
           <h2>Welcome! {user?.displayName}</h2>
           {
               user?.email && <p>Email: {user.email}</p> 

            }{

                user?.photoURL && <img src={user.photoURL}/>
            }
            
        </div>
    );
};

export default Welcome;